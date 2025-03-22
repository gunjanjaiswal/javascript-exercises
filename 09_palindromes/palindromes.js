const palindromes = function (string){
    let start=0;
    let end=string.length-1;
    while(start<end){
        while(!checkAlphanum(string[start])){
            start++;
        }
        while(!checkAlphanum(string[end])){
            end--;
        }
        if(start<end && string[start].toLowerCase()!=string[end].toLowerCase()){
            console.log("start",string[start]," end ",string[end])
            return false;
        }
        start++;
        end--;
    }
    return true;
};

function checkAlphanum(character) {
    n=character.charCodeAt(0);
    return (n >= 65 && n < 91) || (n >= 97 && n < 123) || (n>=48 && n<=57)
}

// Do not edit below this line
module.exports = palindromes;
