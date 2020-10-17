/// <reference types="cypress" />

let percyHealthCheck = require('@percy/cypress/task')

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('task', percyHealthCheck);
}
