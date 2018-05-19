'use strict';

const { ServiceProvider } = require('@adonisjs/fold');

class LogzioProvider extends ServiceProvider {
  register() {
    this.app.extend('Adonis/Src/Logger', 'logzio', () => {
      const Logzio = require('../src/Logzio');
      return new Logzio();
    });
  }
}

module.exports = LogzioProvider;
