const { PrismaClient } = require("@prisma/client");
const express =require("express");
const router =express.Router();
const { getData, postData, putData, delData} =require("../api/datatest");

router.get("/datatest", getData);
router.post("/datatest", postData);
router.put("/datatest/:id", putData);
router.delete("/datatest/:id",delData);


module.exports =router;
