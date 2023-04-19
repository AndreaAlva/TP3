const mqtt = require('mqtt')


function publish(message)
{
    const client = mqtt.connect('mqtt://mqttserver:1883')
    client.on('connect', () => {
        client.publish('upb/logs',message, (err) => {
          if (err) {
            console.log('No se envió el mensaje')
          }
        })
    })
}

module.exports = {
    publish : publish
  }