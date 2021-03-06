'use strict';

const Joi = require('joi');

const keys = {
    '@key': Joi.string(),
    '@value': Joi.string()

};

const requiredKeys = [ '@key', '@value'];

module.exports = Joi
    .object()
    .keys(keys)
    .requiredKeys(requiredKeys);
