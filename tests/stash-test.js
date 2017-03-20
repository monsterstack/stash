'use strict';

/**
 * Test Stash 
 * Use in-memory transport. 
 * @see ./config/default.json
 */
describe('stash-test', (done) => {
    let stash = null;

    before((done) => {
        stash = require('../index').stash;
        done();
    });

    it('log error', (done) => {
        console.stash('Hello World');
        done();
    });

    after((done) => {
        done();
    });
});