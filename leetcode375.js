/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    // use dp, f(i, j) = min(k + max(f(i, k-1), f(k+1, j))
    function dps(i,j, dp) {
        if (dp[i - 1][j -1] === undefined) {
            if(i == j) {
                dp[i - 1][j -1] = 0;
            }
            else if(j - i == 1) {
                dp[i -1][j -1] = i;
            }
            else if(j - i == 2) {
                dp[i -1 ][j -1] = i + 1;
            }
            else {
                var min;
                for(var k = i + 1; k < j; k++) {
                    var temp = k  + Math.max(dps(i, k- 1, dp), dps(k + 1, j, dp));
                    if(temp <min || min === undefined){
                        min = temp;
                    }
                }
                
                dp[i -1][j -1] = min;
            }
            
        }
        
        return dp[i -1][j -1];
    }
    
    var dp = Array.from({length: n}, ()=> new Array(n));
    
    return dps(1, n, dp);
    
};
