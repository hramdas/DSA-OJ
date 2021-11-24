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

    var rhs =[]
    for(let j=0; j<n; j++){
        for(let k=0; k<n; k++){
          for(let l=0; l<n; l++){
            if(arr[l]!==0){
              rhs.push((arr[j] + arr[k]) * arr[l])
            }
          }
        }
  }

  rhs = rhs.sort((a,b)=>a-b)
  lhs = lhs.sort((a,b)=>a-b)
    console.log(lhs, rhs) 

     count = 0;
  //  for(var x=0; x<lhs.length; x++){
  //    for(var y=0; y<rhs.length; y++){
  //      if(rhs[y] == lhs[x]){
  //        count++
  //        break;
  //      } 
  //    }
  //  }

  // if(lhs.length > rhs.length){
  //   temp = rhs;
  //   rhs = lhs;
  //   lhs = temp

  // }
  
  for(var x=0; x<lhs.length; x++){
    var l= 0;
    var h = rhs.length

    while(l<=h){

      var mid =Math.floor(l +(h-l)/2);
      if(rhs[mid] == lhs[x] ){
        console.log('mid',rhs[mid], lhs[x] )
        count ++
      }
      if(rhs[mid] > lhs[x]){
        h = mid-1
      } else l = mid+1

     
    }
    
  }

   console.log(count)
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    5
    7
    10`);
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
  