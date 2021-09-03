function runProgram(input) {
    var input = input.trim().split("\n")
    var [row, col] = input[0].trim().split(" ").map(Number)
    //console.log(row, col)

    mat = []
    for (var i = 1; i <=row; i++){
        mat.push(input[i].trim().split(""))
    }
    //console.log(mat)

    count1 = 0
    for (var i = 0; i <row; i++){
        for (var j = 0; j < col-2; j++)
        if (mat[i][j] + mat[i][j+1] + mat[i][j+2] + mat[i][j+3] == "saba"){
            count1++
        }
    } //console.log(count1)

    count2 = 0
    for (var i = 0; i <col; i++){
        for (var j = 0; j < row-3; j++){
            if (mat[j][i] + mat[j+1][i] + mat[j+2][i] + mat[j+3][i] == "saba"){
                count2++
            }
        }
    } //console.log(count2)

    count3 = 0
    for (var i = 0; i <col-3; i++){
        for (var j = 0; j < row-3; j++){
            if (mat[j][i] + mat[j+1][i+1] + mat[j+2][i+2] + mat[j+3][i+3] == "saba"){
                count3++
            }
        }
    } //console.log(count3)

    count4 = 0
    for (var i = row-1; i >=4; i--){
        for (var j = 0; j < col-4; j++){
            if (mat[i][j] + mat[i-1][j+1] + mat[i-2][j+2] + mat[i-3][j+3] == "saba"){
                count4++
            }
        }
    } //console.log(count4)

    console.log(count1 + count2 + count3 + count4)

    
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5 5
    safer
    amjad
    babol
    aaron
    songs`);
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
  