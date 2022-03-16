function runProgram(input) {
    input = input.trim().split('\n')
    let testcases = +input[0].trim()

    var line = 1
    for(let i=0; i<testcases; i++){

      // console.log('1l', line)
        var n = +input[line++].trim()
        var x = +input[line++].trim()  //put
        var y = +input[line++].trim()  //remove

        var pre = []
        var post = []

        // console.log('l & n', line, n)

        for(let j = line; j< line+n; j++){
          // console.log('line1', line+n)
            var height = input[j].trim().split(' ').map(Number)
            pre.push(height[0])
            post.push(height[1])
            // console.log(height)
        }
        line = line+n

        pre = pre.sort()
        post = post.sort()
        // console.log(pre, post)

        var sum = 0;
       for(let k=0; k<pre.length; k++){

         if(pre[k] < post[k]){
           sum+=(post[k] - pre[k])*x

          }else if(pre[k] > post[k]){
           sum+=(pre[k]-post[k])*y
         }
       }

       console.log(sum)
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`6
5
10
20
174094 882455
171152 761423
221685 761892
795431 233411
387427 793198
5
10
20
650286 248650
900613 893446
661849 637882
913598 407636
154209 737260
5
10
20
165754 120014
607177 773359
981826 603801
250947 835120
164061 898414
5
10
20
398808 778383
710734 965109
968348 499255
333743 808806
819897 228289
5
10
20
781586 124258
626539 246182
119762 952003
918195 325258
677229 419698
5
10
20
255491 250839
396799 769357
665825 441616
335532 825361
862146 291503`);
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
  