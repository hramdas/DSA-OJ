function subseq(str, cur, sub, st){
    if(sub.length > 0){
        st.push(sub)
    }
    if(cur == str.length) return

    for(var j=cur; j<str.length; j++){
        sub+=str[j]
        subseq(str, j+1, sub, st)
        sub = sub.split('')
        sub.pop()
        sub = sub.join('')
    }
    // console.log( str, cur, sub, st)
}

function runProgram(input) {
    input = input.trim().split('\n')
    var v = input[0].trim().split('')
    var r = input[1].trim().split('')

    sub1 = ''
    st1 = []
    sub2 = ''
    st2 = []
    subseq(r, 0, sub1, st1)
    subseq(v, 0, sub2, st2)
    console.log(st1, st2)

    // obj1 = {}
    // for(let i=0; i<st1.length; i++){
    //     obj1[st1[i]] = st1[i].length;
    // }

    // max = 0
    // for(var k=0; k<st2.length; k++){
    //     if(obj1[st2[k]] > max){
    //         max = obj1[st2[k]]
    //     }
    // }
    // console.log(max)

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`AEDFHR
    ABCDGH`);
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
  