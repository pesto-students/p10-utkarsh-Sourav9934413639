function isVowel(char){
    return "aeiou".includes(char)||"AEIOU".includes(char);
}
function vowelCount(str){
    let vowelMap=new Map();
    for(let ch of str){
        if(isVowel(ch))
        {
            if(vowelMap.has(ch))
            {
                vowelMap.set(ch,vowelMap.get(ch)+1);
            }
            else
            {
                vowelMap.set(ch,1);
            }
        }
    }
    return vowelMap;
}
let result=vowelCount("sourav");
console.log(result);