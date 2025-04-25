
var MedianFinder = function() {
    this.maxHeap = new MaxHeap();
    this.minHeap = new MinHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // 先将数字添加到最大堆
    this.maxHeap.insert(num);
    // 将最大堆的最大值移到最小堆（保证最小堆的所有数 >= 最大堆的所有数）
    this.minHeap.insert(this.maxHeap.extractMax());
    
    // 平衡两个堆的大小，保证最大堆的大小 >= 最小堆的大小
    if (this.maxHeap.size() < this.minHeap.size()) {
        this.maxHeap.insert(this.minHeap.extractMin());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.maxHeap.size() > this.minHeap.size()) {
        return this.maxHeap.getMax();
    } else {
        return (this.maxHeap.getMax() + this.minHeap.getMin()) / 2;
    }
};

// 最大堆实现
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    getMax() {
        return this.heap[0];
    }
    
    insert(num) {
        this.heap.push(num);
        this.heapifyUp();
    }
    
    extractMax() {
        const max = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        return max;
    }
    
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let largest = index;
            
            if (leftChild < length && this.heap[leftChild] > this.heap[largest]) {
                largest = leftChild;
            }
            if (rightChild < length && this.heap[rightChild] > this.heap[largest]) {
                largest = rightChild;
            }
            if (largest === index) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}

// 最小堆实现
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    getMin() {
        return this.heap[0];
    }
    
    insert(num) {
        this.heap.push(num);
        this.heapifyUp();
    }
    
    extractMin() {
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        return min;
    }
    
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = index;
            
            if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */