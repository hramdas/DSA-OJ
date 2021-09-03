function runProgram(input) {
    input = input.trim().split('\n');
    N = Number(input[0].trim());

    line = 1;
    for (var a = 0; a <N; a++){
        size = Number(input[line++].trim());
        str = input[line++].trim();
        
        out = []
        for (i=0; i<size; i++) {
            for (j=i; j<size; j++) {
                substr =[]
                for (k=i; k<=j; k++) {
                    substr.push(str[k])
                }  out.push(substr.join(''));
                //console.log(substr)
            }
        }  
        //console.log(out)

        obj = {}
        for (j=0; j<out.length; j++) {
            if (obj[out[j]] = obj[out[j]]){
                obj[out[j]]+= 1
            } else obj[out[j]] =1 
        }  
        //console.log(obj)
        console.log(Object.keys(obj).length) 
       
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    5
    abcde
    3
    aaa`);
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
  