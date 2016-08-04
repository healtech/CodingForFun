/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    var first = 0;
    var second = 1;
    var third = 2;
    
    while(third < nums.length ) {
        if(nums[first] >= nums[second]) {
            first++;
            second++;
            third++;
        }
        else {
            if(nums[second] < nums[third]) {
                return true;
            }
            else if ( nums[second]  == nums[third]){
                second++;
                third++;
            }
            else {
                if(nums[third] > nums[first]) {
                    second++;
                    third++;
                }
                else {
                    if(third === nums.length -1) {
                        return false;
                    }
                    else {
                        if(nums[third + 1] > nums[second]) {
                            return true;
                        }
                        else if(nums[third + 1] <= nums[third]) {
                            third++;
                        }
                        else {
                            first = third;
                            second = third + 1;
                            third = third +2;
                        }
                    }
                }
            }
        }
    }
    
    return false;
};
