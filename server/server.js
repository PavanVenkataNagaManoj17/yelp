require('dotenv').config();
const express=require('express');
const app=express();
const db=require("./db")
const cors=require("cors")
app.use(cors())
app.use(express.json())
//get all restaurants
app.get("/api/v1/restaurants",async (req,res)=>{
    const result= await db.query("select * from restaurants;");
    // console.log(result);
    res.status(200).json({
        status:"success",
        results:result.rows.length,
        data:{
            restaurants:result.rows,
        },
    });
});
//get a single restaurant
app.get("/api/v1/restaurants/:id",async (req,res)=>{
    try{
    // console.log(req.params.id)
    const result= await db.query("select * from restaurants where id =$1;",[req.params.id]);
    res.status(200).json({status:"success",rows:result.rows.length,data:{result:result.rows}});
    res.status(200).json(res.send(result.rows[0]));
    // console.log(result.rows);
    }catch(err){
        console.log('error');
    }
});
//create a new restaurant
app.post("/api/v1/restaurants", async(req,res)=>{
    try{
        const result= await db.query("INSERT INTO RESTAURANTS(NAME,LOCATION,PRICE_RANGE)VALUES($1,$2,$3) returning *",[req.body.name,req.body.location,req.body.price_range]);
        res.status(204).json({status:"success",data:{restaurant:result.rows}});
        // console.log(result.rows);
        console.log("new restaurant added");
    }catch(err){
        console.log("error");
    }
});
//update restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
      const results = await db.query(
        "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
        [req.body.name, req.body.location, req.body.price_range, req.params.id]
      );
  
      res.status(200);
      res.json(results);
    } catch (err) {
      res.status(400);
      res.json({"status":"error"})
    }
    console.log(req.params.id);
    console.log(req.body);
  });
app.delete("/api/v1/restaurants/:id",async (req,res)=>{
    const result=await db.query("DELETE FROM restaurants WHERE ID= $1 returning *;",[req.params.id])
     console.log("Deletion done");
    // console.log(result.rows)
    res.status(321).json({
        status:"success",
        results:result.rows.length,
        data:{
            restaurantdeleted:result.rows,
        },
    });
});
const port =process.env.PORT|| 4005;
console.log("Pavan venkata naga manoj"); 
app.listen(port,()=>{
    console.log(`server is up and listening to port ${port}`);
});