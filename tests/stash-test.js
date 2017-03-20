'use strict';

/**
 * Test Stash 
 * Use in-memory transport. 
 * @see ./config/default.json
 * 
 * @param done {Function}
 * @returns {Error}
 */
describe('stash-test', (done) => {
    let stash = null;

    /**
     * Create Log Stash Client
     * @params done {Function}
     * @returns {Error}
     */
    before((done) => {
        stash = require('../index').stash;
        done();
    });

    /**
     * Log Error Test
     * @param done {Function}
     * @returns {Error}
     */
    it('log error', (done) => {
        console.stash('Hello World');
        done();
    });

    /**
     * Clean up after tests
     * @param done {Function}
     * @returns {Error}
     */
    after((done) => {
        done();
    });
});