function elemtnts(n, arr){
    
  // Brutforce Method
    // res = []
    // res.push(-1)
    // stack = []
    // for (var i=1; i<n; i++){
    //   for (var j= i; j >=0; j--){
    //     if (arr[i] > arr[j]){
    //       res.push(arr[j]);
    //       break;
    //     }
    //   }
    //   if (j==-1){
    //     res.push(-1)
    //   }   
    // } 
    // console.log(res.join(' '));

    // Optimized
    res = []
    stack = []
   
    for (var i=0; i<n; i++){
      if(stack.length == 0){
        res.push(-1)
        stack.push(arr[i])
      } 
      while (arr[i])
      
      else if( arr[i] < stack[stack.length-1]){
        stack.pop()
      } else res.push(arr[i])
            stack.push(arr[i])
      //   if (arr[i] > arr[j]){
      //     res.push(arr[j]);
      //     break;
      //   }
      // if (j==-1){
      //   res.push(-1)
      // }   
    } 
    console.log(res.join(' '));
    // console.log(stack)

    

}
function runProgram(input) {
    input = input.trim().split('\n'); 
    n = Number(input[0].trim())
    arr = input[1].trim().split(' ').map(Number)
    elemtnts(n, arr)
}
if (process.env.USERNAME === "hedga") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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
  