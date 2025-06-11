/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const originalColor = image[sr][sc];
    if (originalColor === color) return image;
    
    const m = image.length;
    const n = image[0].length;
    
    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] !== originalColor) {
            return;
        }
        
        image[i][j] = color;
        
        dfs(i + 1, j); 
        dfs(i - 1, j); 
        dfs(i, j + 1); 
        dfs(i, j - 1); 
    };
    
    dfs(sr, sc);
    return image;
};