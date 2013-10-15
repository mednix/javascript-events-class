var expect = chai.expect;
var events = null;
beforeEach(function () {
    events = Events();
});
afterEach(function () {
    events = null;
});
describe("Events", function () {

    describe("#publish", function () {
        it("should fires event", function () {
            expect(events).to.be.an('object');
        });
    });
    describe("a2", function () {
        it("should pass", function () {

        });
    });
});

describe("B", function () {
    describe("b1", function () {
        it("should pass", function () {

        });
    });
    describe("b2", function () {
        it("should pass yes", function () {

        });
    });
});