// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID=mongodb.ObjectID;
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
    connectionURL, { useNewUrlParser: true },
    (error, client) => {
        if (error) return console.log("not connected");
        console.log("connected");
        const db = client.db(databaseName);

        db.collection('orders').insertMany(
            [
                { product: "toothbrush", total: 4.75, customer: "Mike" },
                { product: "guitar", total: 199.99, customer: "Tom" },
                { product: "milk", total: 11.33, customer: "Mike" },
                { product: "pizza", total: 8.50, customer: "Karen" },
                { product: "toothbrush", total: 4.75, customer: "Karen" },
                { product: "pizza", total: 4.75, customer: "Dave" },
                { product: "toothbrush", total: 4.75, customer: "Mike" },
            ]
        )

        // create / insert
        // db.collection("users").insertOne({
        //         name: "jess",
        //         age: 35,
        //     },
        //     (error, result) => {
        //         if (error) return console.log("unable to insert");
        //         console.log(result.ops);
        //     }
        // );

        // db.collection("users").insertMany([{
        //         name: "boby",
        //         age: 20,
        //     },
        //     {
        //         name: "richardson",
        //         age: 28,
        //     }
        // ], (error, result) => {
        //     if (error) return console.log("unable to insert");
        //     console.log(result.ops);
        // })

        // db.collection("tasks").insertMany(
        //     [{
        //             description: "compelete writing",
        //             compeleted: false,
        //         },
        //         {
        //             description: "check database",
        //             compeleted: true,
        //         },
        //         {
        //             description: "update list",
        //             compeleted: false,
        //         },
        //     ],
        //     (error, result) => {
        //         if (error) return console.log("unable to insert");
        //         console.log(result.ops);
        //     }
        // );

        // read
        // db.collection("users").findOne({ name: "bob" }, (error, user) => {
        //     if (error) return console.log("not found");
        //     console.log(user);
        // })

        // db.collection("users").findOne({ _id: new ObjectID("6033ab0b7bdb7458e4b70970") }, (error, user) => {
        //     if (error) return console.log("not found");
        //     console.log(user);
        // })

        // db.collection("tasks").find({ compeleted: false }).toArray((error, tasks) => {
        //     if (error) return console.log("not found");
        //     console.log(tasks);
        // })

        // db.collection("tasks").find({ compeleted: false }).count((error, num) => {
        //     if (error) return console.log("not found");
        //     console.log(num);
        // })

        // update
        // db.collection('users').updateOne({
        //     _id: new ObjectID("6033ab0b7bdb7458e4b70970")
        // }, {
        //     $inc: {
        //         age: 5
        //     }
        // }).then((result) => {
        //     console.log(result);
        // }).catch((error) => {
        //     console.log(error);
        // })

        // db.collection('tasks').updateMany({
        //     compeleted: false
        // }, {
        //     $set: {
        //         compeleted: true
        //     }
        // }).then((result) => {
        //     console.log(result);
        // }).catch((error) => {
        //     console.log(error);
        // })

        // delete
        // db.collection('users').deleteOne({
        //     _id: new ObjectID("6033ab0b7bdb7458e4b70970")
        // }).then((result) => {
        //     console.log(result);
        // }).catch((error) => {
        //     console.log(error);
        // })

        // db.collection('tasks').deleteMany({
        //     compeleted: false
        // }).then((result) => {
        //     console.log(result);
        // }).catch((error) => {
        //     console.log(error);
        // })
    }
);