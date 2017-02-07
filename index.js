'use strict';

const config = require('config');
const Logstash = require('logstash-client');

const stash = new Logstash({
  type: config.stash.type,
  host: config.stash.host,
  port: config.stash.port
});


console.stash = (level, message) => {
  stash.send({
    '@timestamp': new Date(),
    'message': message,
    'level': level
  });
}

module.exports = stash;
