function runProgram(input) {
    input = input.trim();
    N = input.length;
    //console.log(input, input.length);

    for (var i=0; i<N; i++) {       
      for (var j=i; j<N; j++){
          out = []
          for (var k=i; k<=j; k++) {
              out.push(input[k]);
          } //console.log(out.join(""))
      } 
  } 

    function substr(out){
    for (var i = 0; i < N; i++) {
        for (var j = i; j<N; j++) {
            out = []
            for (var k = i; k<=j; k++) {
                out.push(input[k])
            } console.log(out.join(''));
        } 
    } 
    } //substr()

    function count(substr){
      sub = substr.split('\n').
     console.log(sub)
      // var len = substr[0].length;
      // for (var i = 1; i <substr.length ; i++) {
      //   if (len > substr[i].length){
      //     len = substr[i].length;
      //   }

      // }
      // return len
    } count(substr())

    
   
    
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`zoomsessionmooz`);
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
  