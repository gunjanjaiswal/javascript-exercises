const reverseString = function(val) {
    if(val.length==0){
        return '';
    }
    let res= new String();
    for (let i = val.length-1; i>=0;i--){
        res=res+val[i];
   }
   return res;
};

// Do not edit below this line
module.exports = reverseString;
