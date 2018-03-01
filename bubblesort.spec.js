describe ("Bubble Sort", function(){
    var arr;

    it("is a function", function(){
        expect(typeof bubbleSort).toEqual("function")
    })
    it("handles an array with elements", function(){
        expect(bubbleSort([2, 3])).toEqual(true)
    });

    it("sorts an array in ascending order",function(){
        expect(bubbleSort([8,4,2]).toEqual([2,4,8]))
    })
    it("sorts an array with one element", function(){
        expect(bubbleSort([4]).toEqual([4]));
    })

});