var nums = [2,7,11,15]
var target = 9

    let map = new Map();
    let result = [];
    nums.forEach((element, index) => {
        console.log(map, 'i', element)
        
        if (map.has(element)) result = [ map.get(element), index];
        map.set(target-element, index);
    });
    console.log(result)

    
//    for(var i=0; i<nums.length; i++){
//        j = i+1
//         while(j<nums.length){
//             if(nums[i] + nums[j] == target){
//                 // out.push(i+j)
//                 console.log('['+i+','+j+']')
//                 break;
//             } else j++
//         }
//    }

   