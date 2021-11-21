function Search(arr, k){
    var l=0; var h = arr.length-1;

    while(l <= h){

        var mid = Math.floor(l + (h-l)/2)
        if(arr[mid] == k){
            return mid
        }

        if(k <= arr[arr.length-1]){
            console.log('arr.len', arr[arr.length-1])
            l = mid+1
            h = arr.length-1
            while(h >=l ){
                var mid2 = Math.floor(l + (h-1)/2)
                if(arr[mid2] === k) return mid2
                if (arr[mid2] > k){
                    h = mid-1
                } else l = mid+1
            }
        }

        if(arr[mid] < k ){
            l = mid+1
           
        } else h = mid-1
        console.log('mid' ,mid)

    } return -1

    // for(var i=0; i<arr.length; i++){
    //     if(arr[i] === k){
    //         return i
    //     }
    // } return -1

}

function runProgram(input) {
    var input = input.trim().split('\n')
    var cases = input[0].trim().split(' ').map(Number)
    var k = cases[1]
    let arr = input[1].trim().split(' ').map(Number)

    // arrcol = []
    // for(var i=0; i< arr.length; i++){
    //     if(arr[i] < arr[i+1]){
    //         while( i< )
    //     }
    // }
    console.log(Search(arr, k))
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`10 3
    7 8 11 12 13 14 2 3 4 5`);
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
  