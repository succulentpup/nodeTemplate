const Req = require('supertest');
const App = require('../..');
const Expect= require('chai').expect;

describe('Health end point test suite:- ',() => {
    it('Health should be fine:', async () => {
        const retValue = await Req(App)
                        .get('/health');
        Expect(retValue.res.statusCode).to.equal(200);
    });
});
