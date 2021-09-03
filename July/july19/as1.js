function runProgram(input) {
    input = input.trim().split("\n")

  var arr = {}
  for(var i = 0; i < input.length;i++) {
      var products = input[i].trim().split(" ");
      [Name, Category, Price] = products
      arr[i] = {Name, Category, Price}
  } 
  //console.log(arr)

  // out = {}
  // for (var i = 0; i < arr.length; i++) {
  //   for (var j = 0; j < 3; j++) {
  //     if (arr[i][j] = out[arr[i][j]]){
  //       out[Object(arr[i][j])]
  //     } else out[arr[i][j]]
  //   }
  // }
  //  console.log(out)

  console.log(Object.values(arr[0]))
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`OnePlus Electronics 29000
    Coffee Grocery 400
    Pen Office 30
    Book Office 60
    Rice Grocery 100
    Earphones Electronics 1000`);
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
  