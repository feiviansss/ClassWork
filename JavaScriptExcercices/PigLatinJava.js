function PigLatin() {
    let str = document.getElementById("word").value;
    let answer = document.getElementById("answer");

    var returnList = [],
        wordArray = str.split(' ');

    for (var i = 0; i < wordArray.length; i++) {
        var word = wordArray[i];
        var start = word.charAt(0);

        if (/[aeiouAEIOU]/.test(start)) {
            returnList.push(word += 'way');
            continue;
        }

        for (var x = 1; x < word.length; x++) {
            if (/[aeiouAEIOU]/.test(word.charAt(x))) {
                break;
            } else {
                start += word.charAt(x);
            }
        }

        returnList.push(word.substr(start.length) + start + 'ay');
    }
    answer.innerHTML = returnList.join(' ');
}

