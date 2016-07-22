/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    
    if(nums.length <= 1 ) return nums.length;
    
    var length = 1;
    
    var offset;
    var pre = nums[0];
    for(var i = 1; i < nums.length; i++) {
        
        if(pre == nums[i]) {
            // do nothing;
        }
        else {
            if(!offset) {
                offset = nums[i] - pre;
                length++;
            }
            else {
                
                if(offset * (nums[i] - pre) > 0) {
                    // do nothing
                }
                else {
                    length++;
                }
            }
            
            offset = nums[i] - pre;
            pre = nums[i];
        }
        
    }
    
    return length;
   
};
