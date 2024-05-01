const Seller = require("../models/Seller")
const Item = require("../models/Item")
const Order = require("../models/Order")


const insertseller = async (request, response) => {
    try 
    {
      const input = request.body;
      const seller = new Seller(input);
      await seller.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

const checksellerlogin = async (request, response) => 
{
   try 
   {
     const input = request.body
     const seller = await Seller.findOne(input)
     response.json(seller)
   } 
   catch (error) 
   {
     response.status(500).send(error.message);
   }
 };


 const additem = async (request, response) => {
  try 
  {
    const input = request.body;
    const item = new Item(input);
    await item.save();
    response.send('Added Successfully');
  } 
  catch(e) 
  {
    response.status(500).send(e.message);
  }
};


const viewitems = async (request, response) => 
 {
    try 
    {
      const suname = request.params.suname
      const items = await Item.find({"seller.ownername":suname});
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

  const deleteitem = async (request, response) => 
  {
     try 
     {
       const email = request.params.email
       const item = await Item.findOne({"email":email})
       if(item!=null)
       {
         await Item.deleteOne({"email":email})
         response.send("Deleted Successfully")
       }
       else
       {
         response.send("Username Not Found")
       }
 
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };


   const viewordersplaced = async (request, response) => 
   {
     try 
     {
         const suname = request.params.suname;
         const items = await Item.find({ "seller.username": suname });
 
         if (items.length === 0) 
         {
             return response.status(200).send("No items found for this seller");
         }
         else
         {
           const itemnames = items.map(item => item.itemname);
 
           const ordersPlaced = await Order.find({ itemname: { $in: itemnames } });
   
           if (ordersPlaced.length === 0) 
           {
               return response.status(200).send("No Orders found ");
           }
           else
           {
             response.json(ordersPlaced);
           }
         }
     } 
     catch (error) 
     {
         response.status(500).send(error.message);
     }
 };

 const changestatus = async (request, response) => 
{
  try 
  {
    const { orderId, status } = request.body;

    if (!orderId || !status) 
    {
      return response.status(400).send('Order ID and status are required');
    }

    await OrderPlaced.findOneAndUpdate(
      { orderId },
      { $set: { orderStatus: status } },
      { new: true } 
    );

    response.status(200).send('Order Status Updated Successfully');
  } catch (error) {
    response.status(500).send(error.message);
  }
};

 
 module.exports= {insertseller,checksellerlogin,additem,viewitems,deleteitem,viewordersplaced,changestatus}