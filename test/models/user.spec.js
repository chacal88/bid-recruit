import sinon from 'sinon';
import chai from 'chai';
import User from "../../src/models/User";

const expect = chai.expect;
require('sinon-mongoose');

describe('user test', () => {

    it('should create a new user', (done) => {
        let mock = sinon.mock(
            new User({
                uuid: '123abc',
                name: 'Kaue Rodrigues',
            })
        );

        let user = mock.object; //objeto necessario para criação

        mock.expects('save').yields(null,
            new User({
                uuid: '123abc',
                name: 'Kaue Rodrigues',
            })
        );

        user.save((err, result) => {
            mock.verify();
            mock.restore();

            expect(result.uuid).to.equal(user.uuid);
            expect(result.name).to.equal(user.name);
            expect(result).to.be.an('object');
            done();
        });
    });

    it('should remove one user by id', (done) => {

        let user = new User({
            uuid: '123abc',
            name: 'Kaue Rodrigues',
        })

        user.save();

        let mock = sinon.mock(User);

        mock.expects('findOneAndRemove').withArgs({
            _id: user._id
        }).yields(null, true);

        User.findOneAndRemove({
            _id: user._id
        }, (err, result) => {
            mock.verify();
            mock.restore();

            expect(result).to.equal(true);

            done();
        });
    });

    it('should return all users', (done) => {
        let mock = sinon.mock(User);

        mock.expects('find').yields(null, {
            status: true,
            data: []
        });

        User.find((err, result) => {
            mock.verify();
            mock.restore();

            expect(result.status).to.be.true;
            expect(result.data).to.be.an('array');
            done();
        });
    });
});
