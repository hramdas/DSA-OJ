function runProgram(input) {
    input = input.trim().split('\n')
    var testcases = +input[0].trim()
    line = 1;
    for(let i=0; i<testcases; i++){
        sqlen = input[line++].trim().split(' ').map(Number)
        var h = sqlen[0]
        var w = sqlen[1]

        sq = []
        for(let a=line; a<h+line; a++){
            var row = input[a].trim().split(' ').map(Number)
            sqr =[]
            for(let b=0; b<w; b++){
                sqr.push(row[b])
            }
            sq.push(sqr)
        }
        console.log(sq)

        
        res = sq[0]
        for(let j=1; j<h; j++){
            temp = []
            for(let k=0; k<w; k++){
                if(k==0){
                    temp.push(sq[j][k] + Math.max(res[j], res[1]))
                    console.log(sq[j][k], Math.max(res[j], res[1]))

                } else if (k == w-2){
                    temp.push(sq[j][k] + Math.max(res[j], res[j-1]))
                    console.log(sq[j][k], Math.max(res[j], res[j-1]))

                } else temp.push(sq[j][k] + Math.max(res[j], res[j-1], res[j+1]))
            }
        }
        console.log(temp)
    }
}

if (process.env.USERNAME === "hedga") {
    runProgram(`1
    6 5
    3 1 7 4 2
    2 1 3 1 1
    1 2 2 1 8
    2 2 1 5 3
    2 1 4 4 4
    5 2 7 5 1`);
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
  