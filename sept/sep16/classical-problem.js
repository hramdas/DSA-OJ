function runProgram(input) {
    input = input.trim().split('\n'); 
    n = Number(input[0].trim())
    

    for(let i=1; i<=n;i++){
      var s = input[i].trim()
      var len = s.length
      var res = [];
      var count = 0

      for (let j = 0; j < len; j++){
        if(s[j] == '(' || s[j] == '{' || s[j] == '['){
          res.push(s[j]);
          // console.log('1 ', res, s[j])
        } else{
          if(res.length == 0){
            count = 1
            break;
          } else {
            if((s[j] == ')' && res[res.length-1]!=='(') || (s[j] == '}' && res[res.length-1]!=='{') || (s[j] == ']' && res[res.length-1]!=='[')) {
              count = 1;
              break;
            } else {res.pop()}
            
          }
        }
        // console.log('2 ', res, i)
      }

      // console.log(res)
      if(count == 1){
        console.log("not balanced")
      } else {
        if(res.length == 0){
        console.log("balanced")
        } else console.log("not balanced")
      }

      
    }
    
}
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    {([])}
    ()
    ([]`);
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