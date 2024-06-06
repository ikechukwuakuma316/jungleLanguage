function jungleLanguage(input) {
    const vowelToNumber = {'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5'};
    
    let result = '';

    for (let i = 0; i < input.length; i++) {
        let character = input[i].toLowerCase();
        if(vowelToNumber[character]) {
            result = result + vowelToNumber[character];
        } else if (character >= 'a' && character <= 'z') {
            result = result + character + 'a';
        } else {
            result = result + input[i];
        }
    }

    return result;
}


function convertToJl() {
    let input = document.getElementById("jungle").value;

    let result = jungleLanguage(input);

    document.getElementById('output').textContent = result;
}



// 1. Get the character
// 2. Check if each character is a vowel or consonant
// 3. If the character is a vowel then let the ouput be a number (a=1, e=2, i=3, o=4, u=5)
// 4. Else if the character is a consonant let the output have letter "a" after the consonant
// 5. else ignore. 
