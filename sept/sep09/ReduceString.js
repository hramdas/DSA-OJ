function runProgram(input) {
    arr = input.trim()
    top = arr.length-1

    // obj = {}
    // for (var i=0; i<arr.length; i++){
    //     if (obj[arr[i]] = obj[arr[i]]){
    //         obj[arr[i]] +=1
    //     } else {obj[arr[i]] = 1}
    // } 
    // console.log(Object.keys(obj))

    // res = []
    // for (var key in obj) {
    //     if (obj[key]%2 !==0)
    //     res.push(key)
    // }
    // console.log(res.join(""))

    // out = []
    // for (let i = 0; i < arr.length; i++){
    //   if(arr[i] == arr[i+1]){
    //     i+=2
    //     console.log(i)
    //   } else if(i<arr.length-1){
    //   console.log('i:'+ i)
    //   out.push(arr[i])}
    // }
    // console.log(out)

    // for (var i = 0; i < arr.length; i++){
    // let i=0
    //   while(i<arr.length){
    //   while(arr[i] == arr[i+1]){
    //     i+=2
    //   } res.push(arr[i])
    //   i++
    // }
    // console.log(res.join(''))

    res=[]
    let i=0;
      while(i<arr.length){
      if(arr[i] == arr[i+1]){
        i+=2
      } else {res.push(arr[i])
        i++}
    }

    if(res.length==0){
      console.log('Empty String')
    } else
    console.log(res.join(''))

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`aaaa`);
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
  