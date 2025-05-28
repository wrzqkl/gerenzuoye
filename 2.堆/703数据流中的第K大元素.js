/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = [];
    nums.forEach(num => this.add(num));
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.heap.length < this.k) {
        this.heap.push(val);
        this.heap.sort((a, b) => a - b);
    } else {
        if (val > this.heap[0]) {
            this.heap[0] = val;
            this.heap.sort((a, b) => a - b);
        }
    }
    return this.heap[0];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */