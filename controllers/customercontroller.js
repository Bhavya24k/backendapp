const Customer = require("../models/Customer")
const Item = require("../models/Item")
const Order = require("../models/Order")
const insertcustomer = async (request, response) => {
    try 
    {
      const input = request.body;
      const customer = new Customer(input);
      await customer.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };
  
  const checkcustomerlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const customer = await Customer.findOne(input)
       response.json(customer)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };


    const viewitemsbycustomer= async (request, response) => 
    {
       try 
       {
         const items = await Item.find();
         if(items.length==0)
         {
           response.status(200).send("DATA NOT FOUND");
         }
         else
         {
           response.json(items);
         }
       } 
       catch (error) 
       {
         response.status(500).send(error.message);
       }
     };

     const orderitems = async (request, response) => {
      try 
      {
         const input = request.body; 
          const orderplaced = new Order(input);
          await orderplaced.save();
          response.status(200).send('Ordered Successfully');
       
      } 
      catch(e) 
      {
        response.status(500).send(e.message);
      }
    };
    
    const orders = async (request, response) => 
    {
       try 
       {
         const email = request.params.email
         const orderitems = await Order.find({"customeremail":email});
         if(orders.length==0)
         {
           response.status(200).send("DATA NOT FOUND");
         }
         else
         {
           response.json(orders);
         }
       } 
       catch (error) 
       {
         response.status(500).send(error.message);
       }
     };
   
     const customerprofile = async (request, response) => 
     {
        try 
        {
          const email = request.params.email
          const customer = await Customer.findOne({email})
          if(customer)
          {
            response.json(customer)
          }
          else
          {
            return response.status(200).send('Customer not found with the provided email id');
          }
          
        } 
        catch (error) 
        {
          response.status(500).send(error.message);
        }
      };

      const updateprofile = async (request, response) => 
      {
        try 
        {
          const input = request.body;
          const email = input.email; 
          const customer = await Customer.findOne({ email });
          if (!customer) 
          {
            response.status(200).send('Customer not found with the provided email id');
          }
          for (const key in input) 
          {
            if (key !== 'email' && input[key]) {
              customer[key] = input[key];
            }
          }
          await customer.save();
          response.status(200).send('Customer Profile Updated Successfully');
        } 
        catch (e) 
        {
          response.status(500).send(e.message);
        }
      };

  module.exports = {insertcustomer,checkcustomerlogin,viewitemsbycustomer,orderitems,orders,customerprofile,updateprofile}