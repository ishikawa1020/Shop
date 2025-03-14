const coupons = [
  {
    _id: "643970d0e58a401b6c62c753",

    status: "show",
    title: {
      en: "電波目覚まし時計",
      de: "august geschenkgutschein",
      hy: "օգոստոսյան նվեր վաուչեր",
      af: "augustus geskenkbewys",
      cs: "augustový dárkový poukaz",
      az: "avqust hədiyyə vauçeri",
      ln: "sánzá ya zómi na mɔ̌kɔ́",
      ar: "قسيمة هدايا أغسطس",
      pt: "voucher presente agosto",
    },
    couponCode: "AUGUST24",
    endTime: "2024-10-31T08:30:00.000Z",

    minimumAmount: 2000,
    productType: "Grocery",
    logo: "/MT-36475-01.webp",
    discountType: {
      type: "percentage",
      value: 50,
    },
  },
  {
    _id: "643970d0e58a401b6c62c756",

    status: "show",
    title: {
      en: "コットン巾着",
      de: "sommer geschenkgutschein",
      hy: "ամառային նվեր - վաուչեր",
      af: "somer geskenkbewys",
      cs: "letní dárkový poukaz",
      bn: "গ্রীষ্মের উপহার ভাউচার",
      az: "yay hədiyyə vauçeri",
      ln: "sanza ya Zomi na Mibale",
    },
    couponCode: "SUMMER24",
    endTime: "2024-10-18T20:38:00.000Z",

    minimumAmount: 500,
    productType: "Grocery",
    logo: "/TR-0293-008-11-03.webp",
    discountType: {
      type: "percentage",
      value: 10,
    },
  },
  {
    _id: "643970d0e58a401b6c62c754",

    status: "show",
    title: {
      en: "Summer Gift Voucher",
      de: "sommer geschenkgutschein",
    },
    couponCode: "SUMMER24",
    endTime: "2024-12-20T00:56:00.000Z",

    minimumAmount: 1000,
    productType: "Cloths",
    logo: "/MT-36475-01.webp",
    discountType: {
      type: "percentage",
      value: 10,
    },
  },
  {
    _id: "643970d0e58a401b6c62c755",

    status: "show",
    title: {
      en: "電波目覚まし時計",
      de: "wintergeschenkgutschein",
      az: "qış hədiyyə vauçeri",
      ln: "zima Mpho Mpho Mpho",
      ar: "قسيمة هدايا الشتاء",
      pt: "voucher de presente de inverno",
    },
    couponCode: "WINTER24",
    endTime: "2024-05-31T20:19:00.000Z",

    minimumAmount: 1500,
    productType: "Grocery",
    logo: "/MT-36475-01.webp",
    discountType: {
      type: "fixed",
      value: 100,
    },
  },
];
module.exports = coupons;
