function findPivot(arr, l, h){
    if(l>h) return -1;
    if(h==l) return l;

    let mid = Math.floor(l + (h-l)/2);
    if(mid < h && arr[mid] > arr[mid+1]) return mid;

    if(mid > l &&  arr[mid] < arr[mid-1]) return mid-1;
    if(arr[l] >= arr[mid]) return findPivot(arr, l, mid-1)

    return findPivot(arr, mid+1, h)
}
function Search(arr, k){

    let pivot = findPivot(arr, 0, arr.length-1)

    if(pivot == -1) return bSearch(arr, 0, arr.length-1, k)
    if(arr[pivot] == k) return pivot;
    if(arr[0] <= k) return bSearch(arr, 0, pivot-1, k);
    return bSearch(arr, pivot+1, arr.length-1, k)

}

function bSearch(arr, l, h, k){
    if(h <= l) return -1;

    let mid = Math.floor(l + (h-1)/2)
    if(k == arr[mid]) return mid;
    if(k > arr[mid]) return bSearch(arr, mid+1, h, k);
    return bSearch(arr, l, mid-1, k)
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
  