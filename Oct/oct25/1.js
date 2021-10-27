function Trucks(k,n,t, cur){
    // if(sub.length == 1)

    if(sub.length > 0){
        let sum = 0
        for(let j=0; j<sub.length; j++){
            sum+=sub[j]
        } 
        if(sum == k && sub.length > 1){
            count+=sub.length*(sub.length-1)
            console.log('sub.length*(sub.length-1)', sub.length*(sub.length-1))
        } else if (sum == k){
            count+=1
        } else if(sum !== k && k%sum == 0){
            count++
        }
        console.log(sub)
        console.log(count)
    }
    if(cur == n) return;

    for(var i=cur; i<n; i++){
        sub.push(t[i])
        Trucks(k, n, t, i+1)
        sub.pop()
    }
}

function runProgram(input) {
    input = input.trim().split('\n')
    cases = input[0].trim().split(' ').map(Number)
    k = cases[0]  //weight
    n = cases[1]  //trucks
    t = input[1].trim().split(' ').map(Number)

    sub = []
    count = 0
   Trucks(k, n, t, 0)
   console.log(count)

    // 
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5 5
    1 2 3 4 5`);
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
  