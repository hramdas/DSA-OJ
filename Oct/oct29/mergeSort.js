function  Merge(l, m, h, arr){
    var a1 = m-l+1
    var a2 = h-m

    //create new temp array
     arr1 = []
     arr2 = []
    //add data to temp arrays

    for(let x=l; x<a1; x++){
      arr1.push(arr[x])
    }


    for(let y=m+1; y<a2; y++){
      arr2.push(arr[y])
    }

    //merg temp array
    i =0, j=0, k=1;

    while(i<a1 && j<a2){
      if(arr1[i] <= arr2[j]){
        arr[k] = arr1[i]
        i++
      } else {
        arr[k] = arr2[j]
        j++
      }
      k++
    }

    while (i<a1){
      arr[k] = arr1[i]
      i++
      k++
    }

    while (j<a2){
      arr[k] = arr2[j]
      j++
      k++
    }
    

}

function solve(l, h, arr){
    if(l<h){
        mid = Math.floor((l+h)/2)

        solve(l, mid, arr)
        solve(mid+1, h, arr)
        Merge(l, mid, h-1, arr)
        // console.log(arr)
        console.log(arr1, arr2)
        
    }
}

// #inputs
function runProgram(input) {
    var input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)
   
   solve(0, n, arr)

   console.log(arr)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    3 5 0 9 8`);
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
