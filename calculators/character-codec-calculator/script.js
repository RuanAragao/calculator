const input = document.getElementById("ip");
const output = document.getElementById("op");
const base64 = document.getElementById("b64");
const morse = document.getElementById("msc");
const utf = document.getElementById("utf");
const form = document.getElementById("form");
const encCheck = document.getElementById("switchEncode");
const decCheck = document.getElementById("switchDecode");

function validateForm() {
  
  if (input.value == ""){
    alert("Input field required!");
  }   
  else if(morse.checked == false && (base64.checked == false && utf.checked == false)){
    alert("Please select a encoding-decoding scheme!");
  }  
 else {
    
    if(encCheck.checked==true)
        code();
    else if(decCheck.checked==true)
        decode(input.value);
        
  }
}

function generateMorseCode() { 
    const code = {}; 
    const letters = 
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,?\'!/()&:;=+-_"$@ '; 
  
    const morseValues = 
        [ 
            '.-', '-...', '-.-.', '-..', '.', '..-.', 
            '--.', '....', '..', '.---', 
            '-.-', '.-..', '--', '-.', '---', 
            '.--.', '--.-', '.-.', '...', '-', 
            '..-', '...-', '.--', '-..-', '-.--', 
            '--..', '-----', '.----', '..---', 
            '...--', '....-', '.....', '-....', 
            '--...', '---..', '----.', '.-.-.-', 
            '--..--', '..--..', '.----.', '-.-.--', 
            '-..-.', '-.--.', '-.--.-', 
            '.-...', '---...', '-.-.-.', '-...-', 
            '.-.-.', '-....-', '..--.-', 
            '.-..-.', '...-..-', '.--.-.'
        ]; 
  
    for (let i = 0; i < letters.length; i++) { 
        code[letters[i]] = morseValues[i]; 
    } 
  
    return code; 
} 
  
const morseCode = generateMorseCode(); 
  
// Create reverse Morse code dictionary 
const reverseMorseCode = {}; 
for (const key in morseCode) { 
    if (morseCode.hasOwnProperty(key)) { 
        const value = morseCode[key]; 
        reverseMorseCode[value] = key; 
    } 
} 
  
// Function to translate text to Morse code 
const encodeToMorse = (text) => { 
    const words = text.split(' '); 
    const translatedWords = 
        words.map((word) => { 
            const chars = word.split(''); 
            const morseChars = chars.map((char) => { 
                return morseCode[char] || char; 
            }); 
            return morseChars.join(' '); 
        }); 
    return translatedWords.join('/'); 
}; 
  
// Function to translate Morse code to text 
const decodeMorse = (morseText) => { 
    const morseWords = morseText.split('/'); 
    const translatedWords = 
        morseWords.map((morseWord) => { 
            const morseChars = morseWord.split(' '); 
            return morseChars 
                .map((morseChar) => { 
                    return reverseMorseCode[morseChar] 
                        || morseChar; 
                }) 
                .join(''); 
        }); 
    return translatedWords.join(' '); 
}; 

function code() {
    var op;
    if(base64.checked)
    {
        op = btoa(input.value);
    }
    else if(morse.checked)
    {
        const text = input.value.trim().toUpperCase();
        op = encodeToMorse(text); 
    }
    else if(utf.checked)
    {
        op = encodeURIComponent(input.value);
    }
    output.value = op;
}

function decode() {
    var op;
    if(base64.checked)
    {
        op = atob(input.value);
    }
    else if(morse.checked)
    {
        op = decodeMorse(input.value); 
    }
    else if(utf.checked)
    {
        op = decodeURIComponent(input.value);
    }
    output.value = op;
}

document.getElementById("submit").addEventListener("click", validateForm);