const removeFromArray = function(arr, ...n) {
    let newarr= new Array();
    arr.forEach(element => {
        let flag=0;
        for (let i = 0; i < n.length; i++) {
            if(element===n[i]){
                flag=1;
                break;
            }
        }
        if(flag==0){
            newarr.push(element);
        }
    });

    return newarr
};

// Do not edit below this line
module.exports = removeFromArray;
