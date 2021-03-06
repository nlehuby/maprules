'use strict';

const db = require('../../connection');
const adaptRules = require('../../adapters/rules');
const ensureExtant = require('../helpers').ensureExtant;
const parseMapCSS = require('mapcss-parse').parse;

module.exports = async (r, h) => {
    try {
        const uuid = r.params.id;
        await ensureExtant(uuid);

        const query = await db('presets').select('preset').where({ id: uuid });
        const config = JSON.parse(query[0].preset);
        const rulesMapCSS = parseMapCSS(adaptRules(config));
        return h.response(rulesMapCSS).header('Content-Type', 'application/json').code(200);
    } catch (error) {
        return error;
        
    }
};