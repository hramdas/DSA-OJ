function danceNight(boys, girls, m, n){
    if(n < m || boys[m] > girls[n]) return 'NO'

    let l=0;
    while(l<=m){
        if(boys[l] < girls[l]){
            return 'NO'
        }
        l++
    }
    return 'YES'

}

function runProgram(input) {
    var input = input.trim().split('\n')
    var cases = +input[0].trim()

    let line =1;
    for(let i=0; i<cases; i++){
        let BoyGirl = input[line++].trim().split(' ').map(Number)
        let m = BoyGirl[0]
        let n = BoyGirl[1]
        let boys = input[line++].trim().split(' ').map(Number).sort((a,b)=>a-b)
        let girls = input[line++].trim().split(' ').map(Number).sort((a,b)=>a-b)

        console.log(danceNight(boys, girls, m, n))
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    4 5
    2 5 6 8
    3 8 5 1 7`);
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
  