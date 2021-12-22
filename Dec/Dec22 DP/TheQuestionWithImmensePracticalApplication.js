function runProgram(input) {
    input = input.trim().split('\n')
    var len = +input[0].trim()
    var line = 1;

    for(let i=0; i<len; i++){
        var str1 = input[line++].trim()
        var str2 = input[line++].trim()
        var m = str1.length;
        var n = str2.length;
        // console.log(str1, str2, m, n)
        console.log(distance(str1, str2, m, n))
    }
}
function distance(str1, str2, m, n){
    if(m == 0) return n;
    if(n == 0) return m;

    if(str1[m-1] == str2[n-1]) return distance(str1, str2, m-1, n-1);

    return 1 + minVal(
        distance(str1, str2, m-1, n),
        distance(str1, str2, m, n-1),
        distance(str1, str2, m-1, n-1)
    )
}

function minVal(a, b, c){
    if(a <= b && a <= c) return a
    if(b <= a && b <= c) return b
    else return c
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    abcde
    abde
    abde
    abcde
    abcde
    abxde
    `);
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
  