const express =require("express");
const { allpro, onepro } =require("../api/product");
const router =express.Router();

router.get("/product", allpro);
router.get("/product/:id", onepro);

module.exports =router;