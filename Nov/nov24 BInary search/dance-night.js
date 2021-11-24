function danceNight(boys, girls, m, n){
 
    var g = 0;
    var b = 0;
    while(b<=g && b < m ){
      if(boys[b] <= girls[g]){
        return 'NO';
      } 
      if(boys[b] > girls[g]){
        g++
        b++
      }
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
    8 10
    124 142 130 179 117 36 191 43
    89 107 41 143 65 49 47 6 91 130`);
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
  
