function Subseq(n, arr, sub, cur){
    if(sub.length > 0){
       var sum = 0
    //    console.log(sub)

        for(num of sub){
            sum+=num
        }

        if(sum === arr[arr.length-1]){
            out = true
            return
        }
    }

    if(cur == n) return


    for(let j = cur; j < n; j++){
        sub.push(arr[j])
        Subseq(n, arr, sub, j+1)
        sub.pop()
    }
}

function runProgram(input) {
    var input = input.trim().split('\n')
    cases = +input[0].trim()

    var line = 1
    for(var i=0; i<cases; i++){

        var n = +input[line++].trim()
        var arr = input[line++].trim().split(' ').map(Number)

        var arr = arr.sort(function(a,b) {return a-b})
        out = false

        Subseq(n-1, arr, [], 0)

        if(out == true){
            console.log('Yes')
        } else console.log('No')
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    3
    1 2 3
    4
    0 1 2 3
    4
    2 3 6 10`);
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
  