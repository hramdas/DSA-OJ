function AllSub(arr, n, sub, cur){
    if(sub.length >0){

        // sub.sort(function(a,b) {return a-b})
        // console.log(sub ) 
        out.push(sub.join(' '))
        // 
    }

    if(cur == n) return

    for(let i=cur; i<n; i++){
        sub.push(arr[i])
        AllSub(arr, n, sub, i+1)
        sub.pop()
    }
}

function runProgram(input) {
    var input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)

    arr = arr.sort(function(a,b) {return(a-b)})

    out = [[ ], ]
    
    AllSub(arr, n, [], 0)

    // console.log(out)

    var res = []
    res.push(out[0])

   for( let k=1;k<out.length; k++){
       var sim = true
       for(let l=0; l<res.length; l++){
           if(out[k] == res[l]){
               sim = false
               break;
           }
       }

       if(sim == true){
           res.push(out[k])
       }
   }

// for( let k=0;k<out.length; k++){
//    var el = out[k];
//    if(res.length == 0){
//        res.push(el)
//    }
//    count = 0
//     for(let l=0; l<res.length; l++){
//         if(el == res[l]){
//             count++
//             break;
//         }
//     }

//     if(count == 0){
//         res.push(el)
//     }
// }

console.log(res.join('\n'))
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    1 2 2`);
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
  