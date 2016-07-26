/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
   
    // f(nums, target) = Sum i  from 0..nums.length of f(nums, target - nums[i])
    // use dp to record calculated f(nums, target)
    var dp = [];
    dp[0] = 1;
    for(var i = 1; i <= target; i ++) {
        var result =  nums.reduce(function(pre, cur) {
            if(i >= cur) {
                return pre + dp[i - cur];
            }    
            else {
                return pre;
            }
        }, 0);
        
        dp[i] = result;
    }
    
    return dp[target];
};
