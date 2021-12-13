//Recursion by Brute-Force algorithm 
function knapSack(w, val, wt, n){
    var arr = []

    for(let i=0; i<=n; i++){
        arr[i] = []
        for(let j=0; j<=w; j++){

            if(i==0 || j == 0) arr[i][j] = 0
            else if(wt[i-1] <= j){
                arr[i][j] = Math.max(val[i-1] + arr[i-1][j-wt[i-1]], arr[i-1][j]);
            } else arr[i][j] = arr[i-1][j];
        }
    }
    // console.log(arr)
    return arr[n][w]
  
  }
  
  function runProgram(input) {
      input = input.trim().split('\n')
      var testcases = +input[0].trim()
     
      line = 1
      for(var i=0; i<testcases; i++){
          cases = input[line++].trim().split(' ').map(Number)
          w = cases[0]
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
          console.log(knapSack(w, val, wt, n))
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
    