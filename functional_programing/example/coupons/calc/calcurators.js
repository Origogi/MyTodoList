function subCouponRank(subscriber) {
  if (subscriber.rec_count >= 10) {
    return 'best';
  } else {
    return 'good';
  }
}

function selectCopounsByRank(coupons, rank) {
  var ret = [];
  for (var c = 0; c < coupons.length; c++) {
    var coupon = coupons[c];

    if (coupon.rank === rank) {
      ret.push(coupon.code);
    }
  }
  return ret;
}

function emailForSubscriber(subscriber, goods, bests) {
  var rank = subCouponRank(subscriber);

  if (rank === 'best') {
    return {
      from: 'newsletter@coupondog.co',
      to: subscriber.email,
      subject: 'Your best weekly coupons inside',
      body: 'Here are the best coupons : ' + bests.join(', '),
    };
  } else {
    // rank === 'good
    return {
      from: 'newsletter@coupondog.co',
      to: subscriber.email,
      subject: 'Your good weekly coupons inside',
      body: 'Here are the good coupons : ' + goods.join(', '),
    };
  }
}

function emailsForSubscribers(subscribers, goods, bests) {
  var emails = [];
  for (var s = 0; s < subscribers.length; s++) {
    var subscriber = subscribers[s];
    var email = emailForSubscriber(subscriber, goods, bests);
    emails.push(email);
  }

  return emails;
}

function sendIssue() {
  var coupons = fetchCouponsFromDB();
  var goodCoupons = selectCopounsByRank(coupons, 'good');
  var bestCoupons = selectCopounsByRank(coupons, 'best');
  var subscribers = fetchSubscribersFromDB();
  var emails = emailsForSubscribers(subscribers, goodCoupons, bestCoupons);

  for (var e = 0; e < emails.length; e++) {
    var email = emails[e];
    emailSystem.send(email);
  }
}
