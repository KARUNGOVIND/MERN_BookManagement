const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();


const db=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'Karun@317',
    database:"test"
})

app.use(express.json())
app.use(cors())

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
  }
    console.log('Connected to the database as ID ' + db.threadId);
});

app.get('/',(re,res)=>{
    return res.json("From Backend Side");
})

app.get("/books",(re,res)=>{
    const q="SELECT * FROM BOOKS"
    db.query(q,(err,data)=>{
        if(err){return res.json(err)}
        return res.json(data)
    });
});

app.post("/books",(req,res)=>{
    const q="INSERT INTO books (title,description,price,colorpicture) VALUES(?)"
    const values=[req.body.title,req.body.description,parseInt(req.body.price),req.body.colorpicture];
    console.log(values)
    db.query(q,[values],(err,data)=>{
        if(err){console.log(err,data)
             return res.json(err);}
        
        return res.json("book created succesfully ");
    });
});

app.listen(8081,()=>{
    console.log("Listining");
})