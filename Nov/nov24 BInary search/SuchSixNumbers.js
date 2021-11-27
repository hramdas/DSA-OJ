function runProgram(input) {
    var input = input.trim().split('\n')
    var n = +input[0].trim()
    let arr = []

  for(let i=1; i<=n; i++){
        arr.push(+input[i].trim())
    }

    var lhs = []
    for(let j=0; j<n; j++){
        for(let k=0; k<n; k++){
          for(let l=0; l<n; l++){
            lhs.push((arr[j] * arr[k])+arr[l])
          }
        }
    }

    var rhs = []
    for(let j=0; j<n; j++){
        for(let k=0; k<n; k++){
          for(let l=0; l<n; l++){
            if(arr[l]!==0){
              rhs.push((arr[j] + arr[k]) * arr[l])
            }
          }
        }
  }

  //  console.log(lhs, lhs.length)
  //  console.log(rhs, rhs.length)

   var lobj = {}
   for(let a =0; a<lhs.length; a++){
     lobj[lhs[a]] = lobj[lhs[a]] ? lobj[lhs[a]]+=1 : lobj[lhs[a]] =1
   }

   var robj = {}
   for(let a =0; a<rhs.length; a++){
    robj[rhs[a]] = robj[rhs[a]] ? robj[rhs[a]]+=1 : robj[rhs[a]] =1
   }

   var lkey = Object.keys(lobj)
   var rkey = Object.keys(robj)
  
  count = 0;

  for(let a =0; a<lkey.length; a++){
    for(let b =0; b<rkey.length; b++){
      if(lkey[a] == rkey[b]){
        count+= (lobj[lkey[a]] * robj[rkey[b]])
      }
    }
  }

  console.log(count)

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    2
    3`);
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
  