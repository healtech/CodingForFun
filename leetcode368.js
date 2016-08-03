/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    var map = new Map([[-1, []]]);
    
    nums.sort((a,b)=>a-b).forEach(function(num) {
       
        var [key, value] = selectMax(map, (k, v)=> num% k===0, (k,v)=>v.length);
        map.set(num, [...value, num]);
    });
    
    return selectMax(map, ()=>true, (k,v)=>v.length)[1];
};

var selectMax = function(map, selectFn, maxFn) {
    var max = -1;
    var result = null;
    for(var [key, value] of map) {
        if(selectFn(key, value)) {
            var fnValue = maxFn(key, value);
            if(fnValue > max) {
                max = fnValue;
                result = [key, value];
            } 
        }
    }
    
    return result;
};
