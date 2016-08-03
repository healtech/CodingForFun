/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    
    var process = function(node, left, right) {
        if (node === null || node === undefined) return;
        node.maxWithoutNode = getMaxFnValue(left).maxFromNode + getMaxFnValue(right).maxFromNode;
        node.maxWithNode = node.val + getMaxFnValue(left).maxWithoutNode+ getMaxFnValue(right).maxWithoutNode;
        node.maxFromNode = Math.max(node.maxWithoutNode, node.maxWithNode);
        node.processed = true;
    };
    
    var getMaxFnValue = function(node) {
        var result = { maxWithoutNode :0, maxWithNode : 0, maxFromNode: 0 };
        if(!node) {
            return result;
        }
        else {
            return node;
        }
    }
    
    var isChildProcessed = function(node) {
        var left = !node.left || node.left.processed;
        var right = !node.right || node.right.processed;
        
        return left && right;
    }
    
    if(root === null) return 0;
    // use a stack for post-order travel the tree, maintain the process value for each node.
    var stack = [];
    
    stack.push(root);
    
    while(stack.length > 0) {
        var top = stack[stack.length - 1];
        
        if(isChildProcessed(top)) {
            process(top, top.left, top.right);
            stack.pop();
        }
        
        if(top.right !== null && top.right.processed === undefined) {
            stack.push(top.right);
        }
        if(top.left !== null && top.left.processed === undefined) {
            stack.push(top.left);
        }
    }
    
    return root.maxFromNode;
};
