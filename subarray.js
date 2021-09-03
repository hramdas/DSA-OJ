var A = [2, 1, 7, 4, 8]

for (var i = 0; i<A.length; i++){
    for (var j = i; j<A.length; j++){
        s = []
        for (var k = i; k<=j; k++){
            s.push(A[k])
            
        } console.log(s.join(" "))
        // if (s==11){
        //     console.log("Yes")
        //}
    }
}