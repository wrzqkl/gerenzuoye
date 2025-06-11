
var MyHashMap = function() {
    this.size = 1000; // 基础桶大小
    this.buckets = new Array(this.size).fill(null).map(() => []);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    
    // 检查是否已存在该key
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            bucket[i][1] = value; // 更新值
            return;
        }
    }
    
    // 不存在则添加新键值对
    bucket.push([key, value]);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    
    for (const [k, v] of bucket) {
        if (k === key) return v;
    }
    
    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            bucket.splice(i, 1);
            return;
        }
    }
};

MyHashMap.prototype._hash = function(key) {
    return key % this.size;
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */