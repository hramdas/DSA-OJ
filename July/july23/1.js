function runProgram(input) {
    input = input.trim().split("\n")
    row1 = input[0].trim().split(" ")
    row = Number(row1[0])
    col = Number(row1[1])
    sum = Number(row1[2])

    //console.log(row, col, sum)

    mat = [];
    for (var i =1; i <= row; i++){
        mat.push(input[i].trim().split(" "))
    }
    //console.log(mat)

    count1 = 0
    for (var r=0; r<row; r++){
        for (var c=0; c<col; c++){
            if((Number(mat[r][c]) * Number(mat[r][c+1]) * Number(mat[r][c+2])) == sum){
                count1++
            }
        } 
    } //console.log(count1)

    count2 = 0
    for (var r=0; r<row; r++){
        for (var c=0; c<col-2; c++){
           if (Number(mat[c][r])* Number(mat[c+1][r])* Number(mat[c+2][r]) == sum){
             count2++
           }
        } 
    } //console.log(count2)

    count3 = 0
    for (var r=0; r<row-2; r++){
      for (var c=0; c<col-2; c++){
         if (Number(mat[c][r])* Number(mat[c+1][r+1])* Number(mat[c+2][r+2]) == sum){
           count3++
         }
      } 
  } //console.log(count3)

    count4 = 0
    for (var r=0; r<row-2; r++){
      for (var c=0; c<col; c++){
         if (Number(mat[r][c])* Number(mat[r+1][c-1])* Number(mat[r+2][c-2]) == sum){
           count4++
         }
      } 
  } //console.log(count4)

console.log(count1+count2+count3+count4)
    

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4 4 16
    1 2 1 8
    2 2 8 6
    8 1 2 5
    2 5 8 6`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
}
  