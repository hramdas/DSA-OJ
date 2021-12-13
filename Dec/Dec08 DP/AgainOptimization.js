function runProgram(input) {
    input = input.trim().split('\n')
    var testcases = +input[0].trim()
    line = 1
    for(var i=0; i<testcases; i++){
        cases = input[line++].trim().split(' ').map(Number)
        s = cases[0]
        n = cases[1]
        // console.log(s, n)
        arr = []
        for(let k=0; k<n; k++){
            val = input[line++].trim().split(' ').map(Number)
            arr.push([val[0], val[1], val[1]/val[0]])
        }
        arr = arr.sort((a,b)=>b[2]-a[2])
        // console.log(arr)
        var sum =0;
        for(let j=0; j<arr.length; j++){
            
            if(sum == s || s<=0){
                break;
            } else if(arr[j][0]<=s){
                sum+=arr[j][1]
                s-=arr[j][0]
            } else break
        }
        console.log(sum)
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`);
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
  