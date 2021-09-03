function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim());
    int = input[1].trim().split(' ').map(Number);

    //console.log(N, int)
    count = 0;
    for (var i =0; i<N; i++) {
        if (i ==0 && int[i] > int[i+1]){
            count++
        } else if (i ==N-1 && int[N-1] > int[N-2]){
            count++
        } else if (int[i-1] < int[i] && int[i]> int[i+1] ){
            count++
        } //else if (i == int[] < int[i])

    } console.log(count)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`8
    3 2 3 4 2 1 4 5`);
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
  
