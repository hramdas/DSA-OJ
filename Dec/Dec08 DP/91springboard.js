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
        st = []
        for(var k=0; k<w; k++){
            console.log('k', k)
            console.log(maxSum(sq,0, h, k, w, 0))
        }
        line = line+h
    }
}

function maxSum(sq, t, b, l, r, sum){
    sumall =0;
    for(let i=t; i<b; i++){
        if(l<r){
            sumall+=sq[i][l]
            if(sq[i][l] < sq[i][l-1] && l>0){
                l = sq[i][l-1]
            }
            if(sq[i][l-1]< sq[i][l+1] && l-1<r){
                l = sq[i][l+1]
            }
        }
      
    }
    return sumall
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
  