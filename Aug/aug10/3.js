function runProgram(input) {
    input = input.trim().split('\n');

    line1 = input[0].trim().split(" ").map(Number)

    n1 = line1[0]
    m1 = line1[1]

    mat1 = [];
    for (var i = 1; i <=n1; i++) {
        mat1.push(input[i].trim().split(' '))
    }

    line2 = input[n1+1].trim().split(" ").map(Number)
    
    n2 = line2[0]
    m2 = line2[1]

    mat2 = [];
    for (var i = n1+2; i <input.length; i++) {
        mat2.push(input[i].trim().split(' '))
    }


    sum1 = 0
    for (var i = 0; i <n1; i++) {
        for (var j = 0; j <m1; j++) {
            sum1 += Number(mat1[i][j])
        }
    }

    sum2 = 0
    for (var i = 0; i <n2; i++) {
        for (var j = 0; j <m2; j++) {
            sum2 += Number(mat2[i][j])
        }
    }
   

    //console.log(sum1, sum2)

    if (sum1 < sum2) {
        console.log(sum2)
    } else {
        console.log(sum1)
    }



    

   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3 4
    1 2 3 4
    0 5 6 1
    9 3 0 8
    2 2
    8 8
    8 8`);
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
  