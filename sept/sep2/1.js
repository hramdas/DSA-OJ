function runProgram(input) {
    input = input.trim().split('\n'); 
    line = input[0].trim().split(' ').map(Number)
    n = line[0]
    k = line[1]

    arr = input[1].trim().split(' ').map(Number)
    
    res = []
    for (var i = 0; i < n; i++) {
        sub = []
        sum = 0
        for (var j = i; j < n; j++) {
            sub.push(arr[j])
            sum += arr[j]
            //console.log('sub  ' +sub)
            if (sum%k !== 0){
                res.push(sub)
            }
        } 
    } //console.log(res)

    long = res[0]
    for (var i=1; i<res.length; i++){
        if (long.length < res[i].length){
            long = res[i]
        }
    }
    
    count = 0
    for (var i=0; i<res.length; i++){
        if (long.length == res[i].length){
            count++
        }
    }
    console.log(count)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`100 50
    96 47 58 86 82 81 65 66 56 28 79 56 61 9 31 47 35 4 69 70 78 51 19 13 76 92 7 79 20 15 58 93 88 50 18 63 18 29 46 99 86 75 70 88 19 39 99 70 97 44 95 52 27 58 72 76 52 37 77 23 54 52 16 47 92 67 22 94 38 90 39 71 29 21 51 54 9 58 35 76 3 7 63 16 100 61 27 78 55 63 17 15 30 61 70 39 22 30 57 79`);
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
  