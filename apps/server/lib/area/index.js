"use strict";
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://root:root@cluster0.l9i01.mongodb.net/area?retryWrites=true&w=majority";
MongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    var dbo = db.db("mydb");
    dbo.collection("users").find({}).toArray(function (err, result) {
        if (err)
            throw err;
        console.log(result);
        db.close();
    });
});
//# sourceMappingURL=index.js.map