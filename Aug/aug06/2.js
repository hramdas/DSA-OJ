function runProgram(input) {
    input = input.trim().split(''); 
    N = input.length;
    vowel = "aoiu";

    
    out = 0;
    for (var i = 0; i<N; i++) {
        for (var j = i; j<N; j++) {
            str = []
            count = 0
            for (var k = i; k<=j; k++) {
                str.push(input[k])
            } 
            substr = str.join('')
            //console.log(substr)
                      
            for (var a = 0; a<4; a++){
                for (var l = 0; l<substr.length; l++) {
                    if (substr[l] == vowel[a]){
                        count++;
                        break;
                    }
                }
            } //console.log(count)
            if (count >=4){
                out++
            }            
        }  
    } console.log(out)

    

   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`dangerouscovid`);
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
  