 function Subset(arr, n, cur){
      if(sub.length > 0){
          var sum = 0
          for(var j =0; j<sub.length; j++){
              sum+=sub[j]
          }
  
          if(sum%2!==0){
              count++
          }
      }
  
      if(cur == n) return;
  
      for(var i= cur; i<n; i++){
          sub.push(arr[i]);
          Subset(arr, n, i+1)
          sub.pop()
      }
  }


function runProgram(input) {
    var input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)
   // console.log(n, arr)

    sub = []
    count = 0
    
    Subset(arr, n, 0)
    console.log(count)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    1 2 3`);
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
  