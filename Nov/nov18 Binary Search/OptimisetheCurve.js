function Optimise(arr){
    var a = arr[0]
    var b = arr[1]
    var c = arr[2]
    var k = arr[3]

    let x = Number.MAX_VALUE;
    if(k <= c){
      return -1;
    }
    let h = k-c;
    let l = 0

    while(l<=h){
      let m = Math.floor(l + (h-l)/2)
        if(((a*m*m) + (b*m)) > k-c){
          x =Math.min(x, m);
          h = m-1
        } else if ((a*m*m) + (b*m) < (k - c))
          l = m+1;
          else return m;

    } return x
}

function runProgram(input) {
    var input = input.trim().split('\n')
    var cases = +input[0].trim()

    for( let i=1; i<=cases; i++){
        var arr = input[i].trim().split(' ').map(Number)

        console.log(Optimise(arr))
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    3 2 4 15`);
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
  