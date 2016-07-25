function CMP(l,r) { return l-r; }

function MinHeap(scoreFn) {
  this.cmp = scoreFn || CMP;
  this.heap = [];
  this.size = 0;
}

MinHeap.prototype = {
  
  insert: function(item) {
    
    var heap  = this.heap,
        ix    = this.size++;
        
    heap[ix] = item;
    
    var parent = (ix-1)>>1;
    
    while ((ix > 0) && this.cmp(heap[parent], item) > 0) {
      var tmp = heap[parent];
      heap[parent] = heap[ix];
      heap[ix] = tmp;
      ix = parent;
      parent = (ix-1)>>1;
    }
        
  },
  
  removeHead: function() {
    
    var heap  = this.heap,
        cmp   = this.cmp;
    
    if (this.size === 0)
      return undefined;
      
    var out = heap[0];
    
    this._bubble(0);
    
    return out;
    
  },

  remove: function(item) {

    var heap = this.heap;

    for (var i = 0; i < this.size; ++i) {
      if (heap[i] === item) {
        this._bubble(i);
        return true;
      }
    }

    return false;

  },

  _bubble: function(ix) {

    var heap  = this.heap,
        cmp   = this.cmp;

    heap[ix] = heap[--this.size];
    heap[this.size] = null;

    while (true) {
      
      var leftIx  = (ix<<1)+1,
          rightIx = (ix<<1)+2,
          minIx   = ix;
      
      if (leftIx < this.size && cmp(heap[leftIx], heap[minIx]) < 0) {
        minIx = leftIx;
      }
      
      if (rightIx < this.size && cmp(heap[rightIx], heap[minIx]) < 0) {
        minIx = rightIx;
      }
      
      if (minIx !== ix) {
        var tmp = heap[ix];
        heap[ix] = heap[minIx];
        heap[minIx] = tmp;
        ix = minIx;
      } else {
        break;
      }
      
    }

  }

};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    // define matrix(i, j) which i is the nums1's length, j is nums's length,
    // for each node at row x, column y in the matrix is the sum of nums1[x], nums[y]
    if(nums1.length == 0 || nums2.length == 0) {
        return [];
    }
    
    var heap = new MinHeap(function(node1, node2) {
        return (nums1[node1.x] + nums2[node1.y]) - (nums1[node2.x] + nums2[node2.y]);
    });
    var cache =  new Set();
    var node = {x:0, y: 0};
    heap.insert(node);
    cache.add('0+0');
    var i = 0;
    var ksp = [];
    
    while(i < k) {
        var head = heap.removeHead();
        
        if(head === undefined) {
            //heap is empty
            break;
        }
        ksp.push([nums1[head.x], nums2[head.y]]);
        
        if(head.y + 1 < nums2.length) {
            var right = {x: head.x, y: head.y + 1};
            if(!cache.has(right.x+ '+' + right.y)) {
                heap.insert(right);
                cache.add(right.x+ '+' + right.y);
            }
        }
        if(head.x + 1 < nums1.length) {
            var bottom = {x: head.x +1, y : head.y};
            
            if(!cache.has(bottom.x+ '+' + bottom.y)) {
                heap.insert(bottom);
                cache.add(bottom.x+ '+' + bottom.y)
            } 
        }
        i++;
    }
    
    return ksp;
    
};
