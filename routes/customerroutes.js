const customercontroller = require("../controllers/customercontroller")

const express = require("express")
const customerrouter  = express.Router()

customerrouter.post("/insertcustomer",customercontroller.insertcustomer)
customerrouter.post("/checkcustomerlogin",customercontroller.checkcustomerlogin)

customerrouter.get("/viewitemsbycustomer",customercontroller.viewitemsbycustomer)
customerrouter.post("/orderitems",customercontroller.orderitems)
customerrouter.get("/customerprofile/:email",customercontroller.customerprofile)
customerrouter.put("/updateprofile",customercontroller.updateprofile)

customerrouter.get("/orders/:email",customercontroller.orders)
module.exports = customerrouter