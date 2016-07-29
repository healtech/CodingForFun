/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var indexs  = [];
    var vowels = [];
    
    var vowelSet = new Set("aoeiuAOEIU");
    
    s.split('').forEach(function(e, index) {
        if(vowelSet.has(e)) {
            vowels.push(e);
            indexs.push(index);
        }
    });
    var i = 0;
    return s.split('').map(function(e, index) {
        if(index == indexs[i]) {
            var result = vowels[indexs.length - 1 - i];
            i++;
            return result;
        }
        else {
            return e;
        }
    }).join('');
};
