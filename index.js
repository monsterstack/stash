'use strict';
const debug = require('debug')('stash-log');
const config = require('config');
const Logstash = require('logstash-client');

// LogStash Client
const stash = new Logstash({
  type: config.stash.type,
  host: config.stash.host,
  port: config.stash.port,
  maxQueueSize: 1000
});

/**
 * Generate a Stash Log
 * @param level {string}
 * @param message {string}
 * 
 * @returns log {object}
 */
const generateStashLog = (level, message) => {
  return {
    '@timestamp':  new Date(),
    'message': message,
    'level': level
  };
}

/**
 * Stash a Log
 * @param level {string}
 * @param {message}
 * 
 * @return log {obj}
 */
console.stash = (level, message) => {
  debug(`Sending to stash ${message}`);
  stash.send(generateStashLog(level, message), (err) => {
    if(err) {
      console.log(err);
      debug('error writing to stash');
    }
  });
}

// Public
module.exports = stash;
