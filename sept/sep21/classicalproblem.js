function runProgram(input) {
    input = input.trim().split('\n')
    n = +input[0].trim()
  
    for (var i=1; i<=n; i++){
        arr = input[i].trim()
        s = []
        c = 0

        for (var j=0; j<arr.length; j++){
            if (arr[j]=='{' || arr[j]=='[' || arr[j]=='('){
                s.push(arr[j])
            } else if( (arr[j]==')' && s[s.length-1]=='(') || (arr[j]=='}' && s[s.length-1]=='{') || (arr[j]==']' && s[s.length-1]=='[')){
                s.pop()
            } else c=1;
            //console.log(s)
        }

        if(c==1){
            console.log('not balanced')
        }
        else if(s.length == 0){
            console.log('balanced')
        } else {
            console.log('not balanced')
        }
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
}(()){}
(()
))))))
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
  