const bcrypt = require("bcryptjs");

const customers = [
  
  {
    _id: "6439713c1d8869133e8881e5",

    name: "山本 陽菜",
    email: "customer2@gmail.com",
    password: bcrypt.hashSync("12345678"),
    phone: "090-000-0012",
  },
  {
    _id: "6439713c1d8869133e8881f4",

    name: "鈴木 美咲 ",
    email: "customer1@gmail.com",
    password: bcrypt.hashSync("12345678"),
    phone: "090-000-0010",
  },
  {
    _id: "6439713c1d8869133e8881f5",

    name: "高橋 さくら",
    email: "customer@gmail.com",
    password: bcrypt.hashSync("12345678"),
    phone: "090-000-0011",
  },
];
module.exports = customers;
