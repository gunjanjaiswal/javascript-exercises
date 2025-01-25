const repeatString = function(val,n) {
    let res= new String();
    if((!val)||(!n)){
        return "";
    }

    else if (n<0) {
       return 'ERROR'; 
    }
    for (let i = 0; i < n; i++) {
        res= res+val;
    }
    return res;

};

// Do not edit below this line
module.exports = repeatString;
