//
// import chai from 'chai';
// import chaiHttp from 'chai-http';
//
// chai.use(chaiHttp);
// const expect = chai.expect;
// const request = chai.request;
//
// describe('request test', () => {
//
//     it('should request git hub', (done) => {
//         request('https://api.github.com')
//             .get('/')
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
//             .get('/')
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
//     afterEach((done) => {
//         res = {};
//         done();
//     });
// });
