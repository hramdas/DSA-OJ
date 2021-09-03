function runProgram(input) {
    var fix = 80;
    var total = Number(input);
    var bill = total - fix
    // console.log(bill)

    if (0 <= bill && bill <= 150+fix) {
        console.log(bill / 3)
    } else if (150+fix < bill && bill <= 650+fix) {
        bill5 = ((bill-150)/5)
        console.log(bill5+50)
    } else if ( bill > 650+fix){
        bill10 = ((bill - 650)/10)
        console.log(bill10 + 150)
    }
}  
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`930`);   // INPUT
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