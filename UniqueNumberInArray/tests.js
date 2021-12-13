describe("findUniqNumberInArray()", function() {
    it("[3,1,7,1,3] → 7", function() {
        assert.equal(findUniqNumberInArray([3,1,7,1,3]), 7);
    });

    it("[3,8,8] → 3", function() {
        assert.equal(findUniqNumberInArray([3,8,8]), 3);
    });
});