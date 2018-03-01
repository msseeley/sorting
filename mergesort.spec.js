describe('Split Array function', function() {
    var arr;
    it ('splits array into two', function() {
        expect(split().length).toEqual(2)
    });
    it ('is an array', function() {
        expect(Array.isArray(split())).toEqual(true);
    })
    it ('works', function() {
        expect(split([1, 2, 3, 4])).toEqual([1, 2], [3, 4])
    })
});