function Discover(arr, num){
    var l =0;
    var h = arr.length-1;

    while(l<=h){

        var mid = Math.floor(l + (h-l)/2)
        if(arr[mid]  === num) return 'YES'
        if(arr[mid] > num){
            h = mid-1
        } else l = mid+1
    } return 'NO'
}

function runProgram(input) {
    var input = input.trim().split('\n')
    var cases = input[0].trim().split(' ').map(Number)
    var q = cases[1]
    var arr = input[1].trim().split(' ').map(Number)

    line = 2;

    arr = arr.sort(function(a, b){return(a-b)})

    for(var i = 0; i<q; i++){
        console.log(Discover(arr, +input[line++].trim()))

    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    100`);
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
  