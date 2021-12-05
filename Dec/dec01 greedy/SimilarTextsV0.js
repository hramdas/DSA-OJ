function subSequesce(str, cur, sub, subSeq){
    if(sub.length > 0){
        subSeq.push(sub)
    }
    if(cur == str.length) return;

    for(var i=cur ;i < str.length; i++){
        sub+=str[i]
        subSequesce(str, i+1, sub, subSeq)
        sub = sub.split('')
        sub.pop()
        sub = sub.join('')
    }
}

function runProgram(input) {
    input = input.trim().split('\n')
    var v = input[0].trim().split('')
    var r = input[1].trim().split('')

    subSeq1 = []
    subSeq2= []
    sub1=''
    sub2=''
    subSequesce(v, 0, sub1, subSeq1)
    subSequesce(r, 0, sub2, subSeq2)

    obj1 = {}
    obj2 = {}
    for(let i=0; i<subSeq1.length; i++){
        obj1[subSeq1[i]] = subSeq1[i].length;
    }
    
    len = 0
    for(let i=0; i<subSeq2.length; i++){
        if(obj1[subSeq2[i]] > len){
            len = obj1[subSeq2[i]]
        }
    }
    console.log(len)
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`eziowiomkvrrdzx
orugiebaolddavd`);
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
  