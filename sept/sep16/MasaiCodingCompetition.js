function runProgram(input) {
    input = input.trim().split('\n'); 
    n = Number(input[0].trim())
    
    //var c = [];  //club
    var r = [];  //roll

    for(let i=1; i<=n;i++){
        var line = input[i].trim().split(' ')
        // console.log(line)
        if( r.length == 0 && line[0] == 'E'){
            //c.push(line[1])
            r.push([line[1], line[2]])
        } else if(line[0] == 'E'){
            for(var j = r.length-1; j>=0;j--){
                if(r[j][1] == line[1]){
                    // console.log(r[j][2])
                    r.splice(j,0, [line[1], line[2]])
                    // r.splice(j+1,0, )
                    // console.log('splice', r)
                    break;
                } else if(j == 0) {
                    // c.push()
                    r.push([line[1], line[2]])
                    break;
                }
            }
            // console.log( r)
        } else if(line[0] == 'D'){
            console.log(r.shift().join(' '))
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