function runProgram(input) {
    input = input.trim().split('\n')
    var cap = +input[0].trim()
    var n = +input[1].trim()
    var val = input[2].trim().split(' ').map(Number)
    var wgt = input[3].trim().split(' ').map(Number)
    //console.log(cap, val, wgt)

    var arr = []
    for(let i=0; i<n; i++){
        arr.push([val[i], wgt[i], (val[i] / wgt[i])])
    }

    arr.sort(
        (a, b)=>{
            return b[2] - a[2]
        }
    )
    // console.log(arr)

    var sum =0
    for(let j =0; j<n;j++){
        if(cap > 0){
            if(cap > arr[j][1]){
                sum+=arr[j][0]
                cap-= arr[j][1]
                // console.log(arr[j][0])
            } else{
                sum+= (arr[j][0]/arr[j][1]) *cap
                cap-=arr[j][1]
                // return
            }
        }
    }

    console.log(Math.round(sum))

   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`201
    8
    96 23 12 7 58 100 32 2
    90 51 20 23 4 100 21 58`);
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
  
