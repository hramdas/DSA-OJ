function Permutations(arr, curr){
  if(curr === arr.length){
    console.log(arr.join(' '))
    return;
  }

  for(var i = curr; i<arr.length; i++){
    temp = arr[i]
    arr[i] =arr[curr]
    arr[curr] =temp
    Permutations(arr, curr+1);
    temp2 = arr[i]
    arr[i] = arr[curr]
    arr[curr] = temp2
  }
}

function runProgram(input) {
    input = input.trim().split('\n')
    // n = +input[0].trim()
    arr = input[1].trim().split(' ').map(Number)
    Permutations(arr, 0)
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
  