'use strict';

const _ = require('lodash');
const Winston = require('winston');
const logzioWinstonTransport = require('winston-logzio');

class Logzio {
  setConfig(config) {
    this.config = Object.assign({}, {
      name: 'adonis-app',
      level: 'info',
      json: 'true',
      stripColors: 'true',
      timestamp: new Date().toLocaleTimeString()
    }, config);

    this.logger = Winston.Logger({
      transports: [new Winston.transports.logzio(this.config)]
    });

    this.logger.setLevels(this.levels);
  }

  /**
   * The levels to be used by winston
   *
   * @method levels
   *
   * @return {Object}
   */
  get levels() {
    return {
      emerg: 0,
      alert: 1,
      crit: 2,
      error: 3,
      warning: 4,
      notice: 5,
      info: 6,
      debug: 7
    };
  }

  /**
   * Returns the current level for the driver
   *
   * @attribute level
   *
   * @return {String}
   */
  get level() {
    return this.logger.transports[this.config.name].level;
  }

  /**
   * Update driver log level at runtime
   *
   * @param  {String} level
   *
   * @return {void}
   */
  set level(level) {
    this.logger.transports[this.config.name].level = level;
  }

  /**
   * Log message
   *
   * @method log
   *
   * @param  {Number}    level
   * @param  {String}    msg
   * @param  {...Spread} meta
   *
   * @return {void}
   */
  log(level, msg, ...meta) {
    const levelName = _.findKey(this.levels, (num) => num === level);
    this.logger.log(levelName, msg, ...meta);
  }
}

module.exports = Logzio;
