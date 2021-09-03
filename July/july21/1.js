function runProgram(input) {
  input = input.trim().split("\n")
  //console.log(input)
  var [row, col] = input[0].trim().split(" ")
  var k = input[input.length - 1].trim()
  //console.log(row, col, k)
 
  mat = []
  for (var i = 1; i <=row; i++) {
      mat.push(input[i].trim().split(" "))
  }

  a1 = []
  a2 = []
  for (var i =0; i <row; i++) {
      for (var j = 0; j <col; j++) {
          if(mat[i][j] == k){
             a1.push(i)
             a2.push(j)
          }
      } 
  } diff = a1 - a2
    sum = Number(a1) + Number(a2)
  //console.log(diff,sum,  a1, a2)

  out = []
  for (var i =0; i <row; i++) {
    for (var j = 0; j <col; j++) {
      if (i-j == diff){
        out.push(mat[i][j])} 
    } 
} console.log(out.join(' '))

  out2 = []
  for (var i =0; i <row; i++) {
    for (var j = 0; j <col; j++) {
      if (i+j == sum){
        out2.push(mat[i][j])}
    } 
} console.log(out2.join(' '))

}

if (process.env.USERNAME === "hedga") {
  runProgram(`3 3
  1 2 3
  4 5 6
  7 8 9
  6`);
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
