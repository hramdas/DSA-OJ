arr = [[1, 2, 3, 4],
    [2, 4, 6, 8]]

function common(a, b){
    out = []
    for(var i=0; i<a.length; i++){  
     for(var j=0; j<b.length; j++){
        if(a[i]==b[j]){
         out.push(Number(b[j]))
        } 
    }      
} console.log(out)
} common(arr[0], arr[1])

