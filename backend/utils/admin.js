const bcrypt = require("bcryptjs");
const admins = [
  {
    name: {
      en: "山本 陽菜",
    },
    image: "",
    email: "team@gmail.com",
    password: bcrypt.hashSync("12345678"),
    phone: "090-000-0005",
    role: "Security Guard",
    joiningData: new Date(),
  },
  {
    name: {
      en: "佐藤 葵",
    },
    image: "",
    email: "team4@gmail.com",
    password: bcrypt.hashSync("12345678"),
    phone: "090-000-0004",
    role: "Driver",
    joiningData: new Date(),
  },
  {
    name: {
      en: "山田 陽翔",
    },
    image: "",
    email: "team3@gmail.com",
    password: bcrypt.hashSync("12345678"),
    phone: "090-000-0003",
    role: "Accountant",
    joiningData: new Date(),
  },
  {
    name: {
      en: "田中 結衣",
    },
    image: "",
    email: "team2@gmail.com",
    password: bcrypt.hashSync("12345678"),
    phone: "090-000-0002",
    role: "Manager",
    joiningData: new Date(),
  },
  {
    name: {
      en: "高橋 大輝",
    },
    image: "",
    email: "team1@gmail.com",
    password: bcrypt.hashSync("12345678"),
    phone: "090-000-0001",
    role: "CEO",
    joiningData: new Date(),
  },
  {
    name: {
      en: "佐藤 翔太",
    },
    image: "",
    email: "team5@gmail.com",
    password: bcrypt.hashSync("12345678"),
    phone: "090-000-0000",
    role: "Admin",
    joiningData: new Date(),
  },
  {
    name: {
    en: "管理人",
    },
    image: "",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345678"),
    phone: "090-000-0006",
    role: "Admin",
    joiningData: new Date(),
  },
];

module.exports = admins;
