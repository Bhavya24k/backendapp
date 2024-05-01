const sellercontroller = require("../controllers/sellercontroller")


const express = require("express")
const sellerrouter = express.Router()


sellerrouter.post("/insertseller",sellercontroller.insertseller)
sellerrouter.post("/checksellerlogin",sellercontroller.checksellerlogin)
sellerrouter.post("/additem",sellercontroller.additem)
sellerrouter.get("/viewitems",sellercontroller.viewitems)

sellerrouter.delete("/deleteitem",sellercontroller.deleteitem)

sellerrouter.get("/viewordersplaced",sellercontroller.viewordersplaced)
sellerrouter.post("/changestatus",sellercontroller.changestatus)


module.exports = sellerrouter