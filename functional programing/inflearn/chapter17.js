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
    L.takeUntil(({length}) => length < 3),
    _.flat,
  );

  console.log(payments);
}

job();
