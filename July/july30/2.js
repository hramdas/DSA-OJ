function runProgram(input) {
    input = input.trim().split("\n");
    test = input[0];
    alpha = "abcdefghijklmnopqrstuvwxyz"

    line = 1
    for (var i = 1; i <= test; i++) {
        size = Number(input[line].trim())
        line++
        str = input[line].trim()
        //console.log(str)

        out = []
        for (var j = 0; j < 26; j++) {
            count = 0
            for (var k = 0; k <size; k++) {
                if (str[k] == alpha[j]) {
                    count++
                }
                
            } //console.log(count)
            if (count>0){
              out.push(count)}
        } //console.log(out)

        odd = 0
        for (var l = 0; l < out.length; l++) {
          if (out[l]%2 !==0){
            odd++
          }
        }

        if (odd<2){
          console.log("Possible!")
        } else console.log("Not Possible!")

        line++
    } //console.log(line)
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`8
    3
    jbh
    8
    dcgfggbi
    9
    efibeejhh
    7
    giggbgb
    2
    fg
    9
    ghccjjecd
    4
    eiig
    7
    gfhdhgj`);
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
  