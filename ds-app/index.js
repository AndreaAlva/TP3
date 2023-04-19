var express = require('express');
var axios = require('axios');
var mqttClient = require('./mqttClient');

var app = express();
var next = process.env.NEXT;
var name = process.env.NAMEC;
var ipc = process.env.IPC;
var port = 8888;

app.get('/ds-app', async (req,res) =>{
    var services= getJSON();
    mqttClient.publish(services);

    if(typeof next != 'undefined')
    {
        const response = await axios.get(`http://${next}:${port}/ds-app`);
        services +=("\n" + response.data);
    }
    res.send(services);
    
});

function getJSON()
{
    const data = {
        microservice: name,
        time: Date(), 
        ip: ipc
    }
    const jsonData = JSON.stringify(data);
    return jsonData;
}

app.listen(port);