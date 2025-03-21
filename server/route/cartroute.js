const  express =require("express");
const  {addcart, getcart} =require("../api/cart");
const router =express.Router();

router.post("/cart", addcart);
router.get("/cart", getcart);

module.exports =router;
