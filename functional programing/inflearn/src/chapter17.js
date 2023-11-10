const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");

const Impt = {
  payments: {
    1: [
      { imp_id: 11, order_id: 1, amount: 1000 },
      { imp_id: 12, order_id: 2, amount: 2000 },
      { imp_id: 13, order_id: 3, amount: 3000 },
    ],
    2: [
      { imp_id: 14, order_id: 4, amount: 4000 },
      { imp_id: 15, order_id: 5, amount: 5000 },
      { imp_id: 16, order_id: 6, amount: 6000 },
    ],
    3: [
      { imp_id: 17, order_id: 7, amount: 7000 },
      { imp_id: 18, order_id: 8, amount: 8000 },
    ],
    4: [],
    5: [],
  },
  gatPayments: (page) => {
    console.log(`http://..?page=${page}`);
    return _.delay(1000 * 2, Impt.payments[page]);
  },

  cancelPayment: (imp_id) => Promise.resolve(`${imp_id} 취소완료`),
};

const DB = {
  getOrders: (ids) => _.delay(100, [{ id: 1 }, { id: 3 }, { id: 7 }]),
};

async function job() {
  // 결제된 결제 모듈측 payments 가져온다.
  // page 단위로 가져오는게, 그 결과를 하나로 합친다.

  const payments = await _.go(
    L.range(1, Infinity),
    L.map(Impt.gatPayments),
    L.takeUntil(({ length }) => length < 3),
    _.flat
  );

  const order_Ids = await _.go(
    payments,
    _.map(({ order_id }) => order_id),
    DB.getOrders,
    _.map(({ id }) => id)
  );

  // 결제 모듈의 payemnt와 가맹점의 주문서를 비교해서
  // 결제를 취소해야할 id들을 뽑는다.
  // 결제 취소 api를 실행한다.
  await _.go(
    payments,
    L.reject(({ order_id }) => order_Ids.includes(order_id)),
    L.map((p) => p.imp_id),
    L.map(Impt.cancelPayment),
    _.each(console.log)
  );
}

(function recur() {
  Promise.all([_.delay(10000, undefined), job()]).then(recur);
})();
