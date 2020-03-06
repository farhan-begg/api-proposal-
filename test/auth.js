const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
const should = chai.should()
chai.use(chaiHttp)

const agent = chai.request.agent(app);
const User = require('../api/models/user');

describe("User", function () {

    it("should not be able to login if they have not registered", function (done) {
        agent.post("/user/login", {
            email: "test@test.com",
            password: "test"
        }).end(function (err, res) {
            res.status.should.be.equal(401);
            done();
        });
    });

    //signup
    it('user is able to signup successfully', function (done) {
        User.findOneAndRemove({
            username: "testone"
        }, function () {
            agent
                .post('/user/signup')
                .send({
                    username: "testone",
                    password: "password"
                })
                .end(function (err, res) {
                    console.log(res.body);
                    res.should.have.status(200);
                    agent.should.have.cookie('nToken');
                    done();
                });
        });
    });

    //login
    it('user should be able to login successfully', function (done) {
        agent
            .post('/user/login')
            .send({
                username: "testone",
                password: "password"
            })
            .end(function (err, res) {
                console.log(res.body);
                res.should.have.status(200);
                agent.should.have.cookie('nToken');
                done();
            })
    })

    after(function () {
        agent.close()
    });

})