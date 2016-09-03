describe('function truthy', function() {
    it('should return true always', function() {
        assert.isTrue(functions.truthy());
    });
});

describe('function isEven', function() {
    it('should return true if even', function() {
        functions.getNumber = sinon.stub().returns(10);
        assert.isTrue(functions.isEven());
    });

    it('should return false if odd', function() {
        functions.getNumber = sinon.stub().returns(13);
        assert.isFalse(functions.isEven());
    });
});
