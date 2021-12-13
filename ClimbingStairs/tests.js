describe("climbingStairs()", function() {
    it("2 → 2", function() {
        assert.equal(climbingStairs(2), 2);
    });

    it("3 → 3", function() {
        assert.equal(climbingStairs(3), 3);
    });

    it("4 → 5", function() {
        assert.equal(climbingStairs(4), 5);
    });

    it("5 → 8", function() {
        assert.equal(climbingStairs(5), 8);
    });

    it("6 → 13", function() {
        assert.equal(climbingStairs(6), 13);
    });

    it("7 → 21", function() {
        assert.equal(climbingStairs(7), 21);
    });
});