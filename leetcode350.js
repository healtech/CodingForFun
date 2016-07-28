/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var cache = {};
    
    nums1.forEach(function(e) {
        if(cache[e] === undefined) {
            cache[e] =1;
        }
        else 
        {
            cache[e] = cache[e] + 1;
        }
    })
    
    var result = [];
    nums2.forEach(function(e) {
        if(cache[e] > 0) {
            result.push(e);
            cache[e] = cache[e] - 1;
        }
    })
    
    return result;
};
