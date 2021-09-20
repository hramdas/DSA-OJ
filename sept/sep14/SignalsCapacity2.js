function runProgram(input) {
    input = input.trim().split('\n'); 
    cases = Number(input[0].trim())

    line=1;

    for (let i=0; i<cases; i++) {
        n = +input[line++].trim()
        arr = input[line++].trim().split(' ').map(Number)
        var res = []
        var st = []
        st.push(0);
        res.push(1);

        for(let i = 1; i<n; i++){
            while(arr[st.length-1] <= arr[i] && st.length !==0){
                st.pop()
            }
            // console.log( 'AA ', res.join(' '))
            if(st.length == 0){
                res.push(i+1)
                // console.log( 'BBB ', res.join(' '))
            } else {res.push(i-st[st.length-1])}
            console.log('i, st :' , i, st)
            st.push(i)
            
            console.log( 'BB ', res.join(' '))     
        }
        console.log('ANS   :  ', res.join(' '))
    }
}

if (process.env.USERNAME === "hedga") {
    runProgram(`2
    7
    100 80 60 70 60 75 85
    5
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
  