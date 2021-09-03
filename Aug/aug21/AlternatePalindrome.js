function runProgram(input) {
    input = input.trim().split('\n'); 
    cases = Number(input[0].trim())

    for (var i =1; i < input.length; i+=2) {
        size = Number(input[i].trim())
        arr = input[i+1].trim();
        
        obj = {}

        for (var j = 0; j < size; j++) {
           if( obj[arr[j]] = obj[arr[j]] ) {
               obj[arr[j]] += 1
            } else obj[arr[j]] = 1
        }


        values = Object.values(obj)

        count = 0
        for (var k=0; k<values.length; k++) {
            if (values[k]%2 !==0){
                count++
            }
        }

        if (count > 1){
            console.log("No")
        } else console.log("Yes")
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    1
    a
    3
    aab
    4
    abbb`);
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
  