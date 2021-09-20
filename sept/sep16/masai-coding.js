function runProgram(input) {
    input = input.trim().split('\n'); 
    n = Number(input[0].trim())
    
    var c = [];  //club
    var r = [];  //roll

    for(let i=1; i<=n;i++){
        var line = input[i].trim().split(' ')
        // console.log(line)

        if( c.length == 0 && line[0] == 'E'){
            c.push(line[1])
            r.push(line[2])
        } else if(line[0] == 'E'){
            for(var j = c.length-1; j>=0;j--){
                if(c[j] == line[1]){
                    // console.log('j', j)
                    c.splice(j+1,0, line[1])
                    r.splice(j+1,0, line[2])
                    // console.log('splice', c, r)
                    break;
                } else if(j == 0) {
                    c.push(line[1])
                    r.push(line[2])
                    break;
                }
            }
            // console.log(c, r)
        } else if(line[0] == 'D'){
            console.log(c.shift(), r.shift())
            
        }
        
    }

    // console.log(c.join(' '))
    // console.log(r.join(' '))

}
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
    D`);
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