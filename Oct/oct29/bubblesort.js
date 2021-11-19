// function solve(N,arr){
//     if(N===1) return
    
//     for(var i=0;i<N;i++){
//         if(arr[i] > arr[i+1]){
//             temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//         }
//     }
//     solve(N-1, arr)
    
// }


function runProgram(input) {
    var input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)
   
  //  solve(n, arr)

   for(var i=0;i<n; i++){
     for(var j=0; j<n-i-1; j++){

        if(arr[j] > arr[j+1]){
          //swapping
          // temp = arr[j]
          // arr[j] = arr[j+1]
          // arr[j+1] = temp

          [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]] //Swapping
        }
      }
    }

   console.log(arr.join(' '))
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    3 5 0 9 8`);
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
  