function AZtraverse(line){
  out = []
  for(var i=0; i<line.length; i++) {
    out.push(line[i]) 
  } console.log(out)
}


function ZAtraverse(line){
  out = []
  for(var i=line.length-1; i>=0; i--) {
    out.push(line[i]) 
  } return out.join(" ")
}

// function One(mat, n){
//   out = []
//   for (var r = 0; r < n; r++) {
//     if (r%2==0){
//       out.push(AZtraverse(mat[r]))
//     } else out.push(ZAtraverse(mat[r]))
//     console.log(out.join(" "))
//   }
//   //console.log(out.join(" "))

// }


function runProgram(input) {
    input = input.trim().split("\n")
    test = Number(input[0].trim())

    line = 1;
    for (var i = 0; i < test; i++){
        cases = input[line++].trim().split(" ").map(Number)
        n = cases[0];
        m = cases[1];
        q = cases[2];
        mat= []
        for (var j = 0; j <n; j++) {
           mat.push(input[line++].trim().split(" "))
        }
        //console.log(mat)
        //One(mat, n)
        
        if(q ==1){
            for (var r = 0; r < n; r++) {
              if (r%2==0){
                out =console.log(AZtraverse(mat[r]))
              } else out+= ZAtraverse(mat[r])
            }
           // console.log(out)
        }



      }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    3 3 1
    1 2 3
    4 5 6
    7 8 9
    3 3 2
    1 2 3
    4 5 6
    7 8 9
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
  