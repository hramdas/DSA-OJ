function runProgram(input) {
    var arr = input.trim().split(' ').map(Number)
    var n = arr[0]
    var m = arr[1]
    //console.log(n, m)
    if(n>m){
        h = n
        r = m
    }  else h = m; r = n
   
    hp = []
    console.log(path(h, r))
}

function path(h, r){
    hp.push(h)
    if( check(r) == true ) {
        console.log('check', check(r))
        return true
    }
    if(r>h) return -1

    hval = h + char(h)
    rval = r + char(r)
    //console.log('r h', rval, hval)

    if(check(rval)){
        return true
    } else path(hval, rval)
   
}

function char(a){
    a = a.toString().split('').map(Number)

    var sum = 0;
    a.forEach(e =>sum+=e);
    return sum
}

function check(r){
    for(let i=0 ;i<hp.length; i++){
        if(r == hp[i]){
            console.log('hpi', hp[i])
            return true
        }
    } return false
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`32 47`);
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
  