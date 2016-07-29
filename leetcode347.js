/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var result = {};
    
    nums.forEach(function(e) {
        if(result[e] === undefined) {
            result[e] = 1;
        }
        else {
            result[e] = result[e] + 1;
        }
    });
    
    return Object.keys(result).sort(function(a, b) {
        return result[b] - result[a];
    }).map(Number).slice(0, k);
    
};
