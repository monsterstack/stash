'use strict';


describe('stash-test', (done) => {
    let stash = null;

    before((done) => {
        stash = require('../index').stash;
        done();
    });

    it('log error', (done) => {
        console.stash('Hello');
        done();
    });

    after((done) => {
        done();
    });
});