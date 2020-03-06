const app = require("../server.js");
const mongoose = require('mongoose');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const chaiHttp = require("chai-http");

chai.config.includeStack = true;

chai.should()
chai.use(chaiHttp);


const sampleProduct = {
    name: 'White Cement',
    price: '200.00'
}


it('should show all products', (done) => {
    chai.request(app)
        .get('/products')
        .end((err, res) => {
            if (err) {
                return done(err)
            }

            assert.equal(res.status, 200)
            assert.isArray(res.body)
            return done()
        })
})