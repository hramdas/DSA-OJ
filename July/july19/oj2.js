function charCount(subArr){


  while(a=0){
    count = 0
    for(let i=0;i<subArr.length;i++){
      if (subArr[a] !== subArr[i]){
        break;
      }
    }
  }

}


function runProgram(input) {
    var arr = input.trim();
    var char = "ACGT"
  
    for (var i=0; i<arr.length; i++) {  
      for (var j=i; j<arr.length; j++){
        subArr = []
        for (var k=i; k<=j; k++){
          subArr.push(arr[k])
        }
         console.log(subArr)
      } 
    }
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`ATTCGGGA`);
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
  