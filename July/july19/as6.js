arr = ["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"]

var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

arr = arr.join("")

count = 0
for (var i = 0; i <arr.length;i++){
    for (var j = 0; j <cap.length; j++){
        if (arr[i]==cap[j]){
            count++
        }
    }
} console.log(count)