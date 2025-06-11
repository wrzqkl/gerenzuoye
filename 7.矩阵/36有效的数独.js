/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        const rowSet = new Set();
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num!== '.' && rowSet.has(num)) {
                return false;
            }
            if (num!== '.') {
                rowSet.add(num);
            }
        }
    }
    
    for (let j = 0; j < 9; j++) {
        const colSet = new Set();
        for (let i = 0; i < 9; i++) {
            const num = board[i][j];
            if (num!== '.' && colSet.has(num)) {
                return false;
            }
            if (num!== '.') {
                colSet.add(num);
            }
        }
    }

    for (let startRow = 0; startRow < 9; startRow += 3) {
        for (let startCol = 0; startCol < 9; startCol += 3) {
            const subBoxSet = new Set();
            for (let i = startRow; i < startRow + 3; i++) {
                for (let j = startCol; j < startCol + 3; j++) {
                    const num = board[i][j];
                    if (num!== '.' && subBoxSet.has(num)) {
                        return false;
                    }
                    if (num!== '.') {
                        subBoxSet.add(num);
                    }
                }
            }
        }
    }
    return true;
};