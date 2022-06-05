const express = require("express");
const app = express();
const path = require("path");

const cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

const { MongoClient, ObjectId } = require("mongodb");

const PORT = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const multer = require("multer");

app.use("/images", express.static(path.join(__dirname, "/images")));

app.get("/", (req, res) => {
  res.send(`Server is running`);
});

// REGISTERATION
app.post("/authregister", (req, res) => {
  console.log(req.body);
  MongoClient.connect(process.env.CONNECTIONSTRING, async (err, client) => {
    const db = client.db();
    const con = db.collection("users");

    if (!req.body.fullname || !req.body.username || !req.body.password) {
      res.send({
        status: 503,
        message: `Plase fill out complete registeration form`,
      });

      return;
    }

    try {
      const checkusername = await con
        .find({ username: req.body.username })
        .toArray();
      const checkedusername = checkusername[0] && checkusername[0].username;
      if (checkedusername === req.body.username) {
        res.send({
          status: 503,
          message: `This Username is already registered`,
        });
        return;
      } else {
        await con.insertOne({
          fullname: req.body.fullname,
          username: req.body.username,
          password: req.body.password,
          userstatus: "Available",
        });
        res.send({
          status: 200,
          message: `Thanks for registration`,
        });
      }
    } catch (error) {
      console.log("database", error);
    }

    client.close();
  });
});

app.post("/authlogin", (req, res) => {

    
  MongoClient.connect(process.env.CONNECTIONSTRING, async (err, client) => {
    const db = client.db();
    const con = db.collection("users");

    if (!req.body.username || !req.body.password) {
      res.send({
        status: 403,
        message: `please enter your username/password`,
      });
      return;
    }

    try {
      const getUser = await con.findOne({
        username: req.body.username,
        password: req.body.password,
      });

      if (getUser) {
        if (
          req.body.username === getUser.username &&
          req.body.password === getUser.password
        ) {
          res.send({
            status: 200,
            message: `correct info`,
            username: req.body.username,
            getUser: getUser,
          });
        }
      } else {
        res.send({
          status: 503,
          message: `not correct info`,
        });
      }
    } catch (error) {
      console.log("database", error);
    }

    client.close();
  });
});

// PROFILES
app.post("/profiles", (req, res) => {
  // console.log(req.body.password);

  MongoClient.connect(process.env.CONNECTIONSTRING, async (err, client) => {
    const db = client.db();
    const con = db.collection("users");

    try {
      const getUsers = await con.find().toArray();
      res.send({
        status: 200,
        getUsers: getUsers,
      });
    } catch (error) {
      console.log("database", error);
    }

    client.close();
  });
});

// UPDATE USER
app.post("/updateuser", function (req, res) {
  MongoClient.connect(process.env.CONNECTIONSTRING, async (err, client) => {
    const db = client.db();
    const con = db.collection("users");

    try {
      var myquery = { username: req.body.username };
      var newvalues = {
        $set: {
          userstatus: req.body.userstatus,
        },
      };
      con.updateOne(myquery, newvalues);

      res.send({
        status: 200,
        message: "done",
      });
    } catch (error) {
      console.log("database", error);
    }
  });
});

app.post("/publicmsgcontrol", (req, res) => {

 console.log(req.body);

  MongoClient.connect(process.env.CONNECTIONSTRING, async (err, client) => {
    const db = client.db();
    const conn = db.collection("commonmsgs");

    try {


      await conn.insertOne({
        username: req.body.username,
        commonmessages: req.body.commonmessages,
      });

      const getAllMessages = await conn.find().toArray();

      res.send({
            status: 200,
            getAllMessages: getAllMessages
      })
      
    } catch (error) {
      console.log("database", error);
    }

    client.close();
  });
});

app.listen(process.env.PORT || PORT);
