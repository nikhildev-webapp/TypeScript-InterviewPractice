//Task-Create a task analyzer with the feature of word Count, charactercount,vowlescount, ispalindrom
let Text: string = 'Harry Potter';
console.log(`Orginal Text:${Text}`);

let totalWordText: number = Text.split('').length;
console.log(`Total word in Text:${totalWordText}`);

let totalCharacterText: number = Text.length;
console.log(`Total character of in Text:${totalCharacterText}`);

let Vowels = 'aeiouAEIOU';
let vowelCount: number = 0;

for (const char of Text){
    if(Vowels.includes(char)) {
        vowelCount++
    }
}

console.log(`Total number of Vowels in Text:${vowelCount}`);

let reverText = '';
for (let i = Text.length - 1; i >= 0; i--){
    reverText += Text[i];
}

let isPalindrom: boolean = reverText === Text;
console.log(`String is Palindrom:${isPalindrom ? 'Yes' : 'No'}`);
