const { PrismaClient } = require("@prisma/client");
const express =require("express");
const { login } =require("../api/login");
const router =express.Router();

router.post("/login",login);

module.exports =router;