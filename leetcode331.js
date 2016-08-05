/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    if(!preorder) return false;
    var arr = preorder.split(',');
    
    var stack = [];
    
    for(var e of arr) {
        
        while(stack.length > 0 && stack[stack.length - 1] == '#' && e =='#') {
            stack.pop();
            if(stack.length === 0) {
                return false;
            }
            stack.pop();
        }
        
        stack.push(e);
    }
    
    return stack.length == 1 && stack[0] =='#';
};
