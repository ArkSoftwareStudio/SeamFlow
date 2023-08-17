const AWS = require('aws-sdk');

const express = require('express');
const app = express();

// port on which the server listens
const port = 3000;

app.get("/rows/all", (req, res) => {
    // magic happens here
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const client = new AWS.DynamoDB.DocumentClient();
const tableName = 'seamflow_users';

// update the region to 
// where DynamoDB is hosted
AWS.config.update({ region: 'us-east-2' });

// Input object with Table specified
// Since we're using scan() method, no query
// is required for us
var params = {
    TableName: tableName
};

// client.scan() returns all the documents
// in the table. you can also use client.query()
// in case of adding a condition for selection
client.scan(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        var items = [];

        // the rows are present in the Items property
        // of the data object returned in the callback
        // extract the Name property from the rows and
        // push them into a new array
        for (var i in data.Items)
            items.push(data.Items[i]['Name']);

        // send the obtained rows onto the response
        res.contentType = 'application/json';
        res.send(items);
    }
});

app.get("/rows/all", (req, res) => {
    var params = {
        TableName: tableName
    };

    client.scan(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var items = [];
            for (var i in data.Items)
                items.push(data.Items[i]['Name']);

            res.contentType = 'application/json';
            res.send(items);
        }
    });
});

