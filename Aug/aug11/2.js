function runProgram(input) {
    input = input.trim().split('\n'); 
    cases = Number(input[0].trim())
    //console.log(input[1], N)

    line = 1;
    for (var i = 0; i < cases; i++) {
        size = input[line++].trim().split(" ").map(Number)
        r = size[0]
        c = size[1]
        console.log(line)

        mat = []
        for (var a = 0; a < r; a++) {
            mat.push(input[line++].trim().split(" "))
        }

        left = 0;
        right = c-1;
        top = 0;
        bottom = r-1;

        size = r*c;
        console.log(size)
        count = 0;
        out = []
        console.log(mat[left][0])

        // while (count < size) {
        //   for (var i=top; i < bottom; i++) {
        //     out.push(mat[left][i])
        //     count++
        //     left++
        //   }
        //   for (var i=left; i < right; i++) {
        //     out.push(mat[bottom][i])
        //   }
        // }

        // console.log(out)
        

    
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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
  