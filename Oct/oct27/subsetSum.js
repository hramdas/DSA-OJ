function SubSum(arr, k, cur, sub){
    if(sub.length > 0){
        sum = 0
        for(num of sub){
            sum+=num
        }

        if(sum == k){
            count++
        }
    }

    if(cur == arr.length) return

    for(var i=cur; i<arr.length; i++){
        sub.push(arr[i])
        SubSum(arr, k, i+1, sub)
        sub.pop()
    }
}

function runProgram(input) {
    input = input.trim().split('\n')
    cases = input[0].trim().split(' ').map(Number)
    n = cases[0]
    k = cases[1]

    arr = input[1].trim().split(' ').map(Number)

    count = 0

    SubSum(arr, k, 0, [])
    console.log(count)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4 10
    1 2 3 4`);
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
  