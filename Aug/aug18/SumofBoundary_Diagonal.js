function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim())

    mat = [];
    for (var i = 1; i <=N; i++) {
        mat.push(input[i].trim().split(' ').map(Number));
    }
    Sum(N, mat)
}

function Sum(N, mat){
   out = 0
   for (let r=0; r<N; r++) {
      out+= mat[0][r];
      out+= mat[N-1][r]
   } 
  //  console.log(out);

   for (let c=1; c<N-1; c++) {
       out+= mat[c][0]
       out+= mat[c][N-1]
   }
  //  console.log(out);
  
   for (let r=1; r<N-1; r++) {
       for (let c=1; c<N-1; c++) {
           if (r==c){
               out+=mat[r][c]
           }
           if (r+c == N-1) {
               out+= mat[r][c]
           }
       }
   }
  //  console.log(out);

   if (N%2 !==0){
    out= out - mat[Math.floor(N/2)][Math.floor(N/2)]
   }

   console.log(out);  

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    109901 198190 189199 673242 903
    23213 23213 3445 21222 4555
    13234 24321 1211 12312 245523
    123124 23414 242321 112 1124
    2221 22324 211122 244 2324`);
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
  