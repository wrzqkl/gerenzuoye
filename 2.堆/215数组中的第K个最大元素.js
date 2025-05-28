/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const partition = (arr, left, right) => {
        const pivot = arr[right];
        let i = left - 1;
        for (let j = left; j < right; j++) {
            if (arr[j] > pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
        return i + 1;
    };
    const quickSelect = (arr, left, right, kth) => {
        const pivotIndex = partition(arr, left, right);
        if (pivotIndex === kth) {
            return arr[pivotIndex];
        } else if (pivotIndex > kth) {
            return quickSelect(arr, left, pivotIndex - 1, kth);
        } else {
            return quickSelect(arr, pivotIndex + 1, right, kth);
        }
    };
    return quickSelect(nums, 0, nums.length - 1, k - 1);
};