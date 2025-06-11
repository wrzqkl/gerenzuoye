/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    function isValid(board, row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num) return false;
        }
        
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === num) return false;
        }
        
        const boxRow = Math.floor(row / 3) * 3;
        const boxCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[boxRow + i][boxCol + j] === num) return false;
            }
        }
        
        return true;
    }
    
    function solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    for (let num = 1; num <= 9; num++) {
                        const charNum = num.toString();
                        if (isValid(board, row, col, charNum)) {
                            board[row][col] = charNum;
                            
                            if (solve()) {
                                return true;
                            }
                            
                            board[row][col] = '.'; 
                        }
                    }
                    return false;
                }
            }
        }
        return true; 
    }
    
    solve();
};