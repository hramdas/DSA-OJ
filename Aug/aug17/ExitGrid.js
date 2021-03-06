function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim())

    var line = 1;
    for (var i = 0; i < N; i++){
        size = Number(input[line++].trim());
        val = [];
        for (var j = line; j <line + size; j++){
            val.push(input[j].trim());
        }

        var count = 0;
        var x=0;
        var y=0;
        while (x>=0 && x<size && y>=0 && y<size) {
            if (val[x][y] =='z'){
                console.log(0)
            }
            if (val[x][y] == 'R'){
                val[x][y] = 'z';
                y++
            } else if (val[x][y] == 'L'){
                val[x][y] = 'z'
                y--
            } else if (val[x][y] == 'U'){
                val[x][y] = 'z'
                x--
            } else {
                val[x][y] = 'z'
                x++;
            }
            count++;
        }
        console.log(count)

        line = line+size
    }
}

if (process.env.USERNAME === "hedga") {
    runProgram(`3
    4 
    RRRR
    LLLL
    UUUU
    DDDD
    3
    LRL
    UUU
    DLR
    2
    RL
    DD
    `);
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
  