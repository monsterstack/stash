'use strict';

/**
 * Test Stash 
 * Use in-memory transport. 
 * @see ./config/default.json
 */
describe('stash-test', (done) => {
    let stash = null;

    /**
     * Create Log Stash Client
     * @params done {function}
     * @returns {Void}
     */
    before((done) => {
        stash = require('../index').stash;
        done();
    });

    /**
     * Log Error Test
     * @param done {function}
     * @returns {Void}
     */
    it('log error', (done) => {
        console.stash('Hello World');
        done();
    });

    /**
     * Clean up after tests
     * @param done {function}
     * @returns {Void}
     */
    after((done) => {
        done();
    });
});