/**
 * IMPORTS
 */
const baseConfig = require('./base');
const merge = require('webpack-merge');


/**
 * EXPORTS
 */
module.exports = merge(baseConfig, {
    mode: 'production'
});
