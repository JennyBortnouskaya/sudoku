module.exports = function solveSudoku(matrix) {
  // your solution
  for(let row = 0; row < matrix.length; row++){ 
		for(let column = 0; column < matrix[row].length; column++){ 
      if(matrix[row][column] == 0){ 
        let false_digits = []; 
				for(let i = 0; i < matrix.length; i++){ 
					if(matrix[row][i] > 0) false_digits.push(matrix[row][i]); 
					if(matrix[i][column] > 0) false_digits.push(matrix[i][column]);  
        } 
        for(let i = Math.floor(row/3)*3; i < (Math.floor(row/3)*3 + 3) ; i++){ 
					for(let j = Math.floor(column/3)*3; j < (Math.floor(column/3)*3 + 3) ; j++){ 
						if(matrix[i][j] > 0){ 
							false_digits.push(matrix[i][j]); 
						} 
					} 
        } 
        let right_digits = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(filter);

        function filter(value){
           return false_digits.indexOf(value) < 0;           
        }
				let check; 
				for(let i = 0; i < right_digits.length; i++){     
					matrix[row][column] = right_digits[i]; 
				  check = solveSudoku(matrix); 
          if(check) 
          return check; 
				} 
				matrix[row][column] = 0; 
				return false; 
			} 
		} 
	} 
	return matrix; 
}
