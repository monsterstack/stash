'use strict';
const debug = require('debug')('stash-log');
const config = require('config');
const Logstash = require('logstash-client');

const stash = new Logstash({
  type: config.stash.type,
  host: config.stash.host,
  port: config.stash.port,
  maxQueueSize: 1000
});

console.stash = (level, message) => {
  debug(`Sending to stash ${message}`);
  stash.send({
    '@timestamp': new Date(),
    'message': message,
    'level': level
  }, (err) => {
    if(err) {
      console.log(err);
      debug('error writing to stash');
    }
  });
}

module.exports = stash;
