//
// import chai from 'chai';
// import chaiHttp from 'chai-http';
//
// chai.use(chaiHttp);
// const expect = chai.expect;
// const request = chai.request;
//
// describe('request github list users test', () => {
//
//     it('should request github get list', (done) => {
//         request('https://api.github.com')
//             .get('/users')
//             .end((err, res) => {
//                 expect(res.status).to.equal(200);
//                 done();
//             })
//     });
//
//     let res = {};
//
//     beforeEach((done) => {
//         request('https://api.github.com')
//             .get('/users')
//             .end((err, response) => {
//                 res = response;
//                 done();
//             });
//     });
//
//     it('should request website and return status 200', () => {
//         expect(res).to.have.status(200);
//     });
//
//     it('should have body not null', () => {
//         expect(res.body).to.not.equal(null);
//     });
//
//     it('should have body with 60 users', () => {
//         expect(res.body).to.have.lengthOf(30);
//     });
//
//
//     afterEach((done) => {
//         res = {};
//         done();
//     });
// });
