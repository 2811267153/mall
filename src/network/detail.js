import { request } from "./request";

export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}

export function getRecmmend() {
  return request({
    url: '/recommend',
  })
}

export class Goods {
  constructor(itemInfo, columns, service) {
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.lowPrice = itemInfo.lowPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.service = service;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sell = shopInfo.cSells;
    this.scores = shopInfo.score;
    // console.log(this.scores);
    this.goodsCount = shopInfo.cGoods;
  }
}

export class goodsparams {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.size = rule.tables;
  }
}
