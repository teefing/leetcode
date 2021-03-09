/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  class Heap {
    constructor(compareFn) {
      this.compare = compareFn || this.compare;
    }
    compare = (a, b) => a > b;
    compareValue = (i, j) => this.compare(this.heap[i], this.heap[j])
    heap = [null];
  
    leftChildKey = (k) => k * 2;
    rightChildKey = (k) => k * 2 + 1;
    parentKey = (k) => Math.floor(k / 2);

    swap = (i, j) => {
      let temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
    };
    N = 0
  
    get top() {
      return this.heap[1];
    }
  
    // 节点上浮
    swim = (k) => {
      while(k>1) {
        let parentKey = this.parentKey(k)
        if(this.compareValue(k, parentKey)){ 
          this.swap(k, parentKey)
          k = parentKey
        } else {
          break
        }
      }
    };
  
    // 节点下沉
    sink = (k) => {
      while(this.leftChildKey(k) <= this.N) {
        let left = this.leftChildKey(k)
        let maxIndex = left
        let right = this.rightChildKey(k)
        
        if(right <= this.N && !this.compareValue(left, right)) {
          maxIndex = right
        }
        
        if(this.compareValue(k, maxIndex)) break
        this.swap(k, maxIndex)
        k = maxIndex
      }
    };
  
    insert = (val) => {
      this.N++
      this.heap.push(val)
      this.swim(this.N)
    };
  
    delTop = () => {
      let top = this.top
      this.swap(1, this.N)
      this.N--
      this.sink(1)
      return top
    };
  }
  let heap = new Heap()
  for(let num of nums) {
    heap.insert(num)
  }
  let res
  for(let i=0;i<k;i++) {
    res = heap.delTop()
  }

  return res
};

// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))

// @lc code=end

