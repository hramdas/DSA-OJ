//Recursion by Brute-Force algorithm 
function knapSack(s, val, wt, n){
  if(n==0 || s ==0) return 0;

  if(wt[n-1] > s){
    return knapSack(s, val, wt, n-1)
    
  } else return Math.max(val[n-1] + knapSack(s-wt[n-1] , val, wt, n-1), knapSack(s, val, wt, n-1))

}

function runProgram(input) {
    input = input.trim().split('\n')
    var testcases = +input[0].trim()
   
    line = 1
    for(var i=0; i<testcases; i++){
        cases = input[line++].trim().split(' ').map(Number)
        s = cases[0]
        n = cases[1]
        //console.log(s, n)

        wt = []
        val = []
        for(let k=0; k<n; k++){
            cases = input[line++].trim().split(' ').map(Number)
            wt.push(cases[0])
            val.push(cases[1])
        }
        //console.log(wt, val)
        console.log(knapSack(s, val, wt, n))
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
  