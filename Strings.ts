//Strings in typescript
//Exercise-1-count the character of string
let userName: string = 'Nikhil';
let countOfString: number = userName.split('').length;
console.log(`Total Number of Character in String:${countOfString}`);

//Exercise-2-reverse the string anfd check it is palindrom or Not
let orgStr: string = 'Hello';
console.log(`Origanl String:${orgStr}`);
let revStr:string =''
for (let i = orgStr.length - 1; i >= 0;i--){
    revStr+=orgStr[i]
}
console.log(`Reverse string;${revStr}`);
let isPalindrom: boolean = orgStr === revStr;
console.log(isPalindrom ? 'Yes String is Palindrom' : 'No String is not palindrom');

//Exercise-3-count vowels in string;
let userStr: string= 'Hello my name is Nikhil';
let vowels:string = 'aeiouAEIOU';
let vowelsCount:number= 0;

for(const char of userStr){
    if(vowels.includes(char)){
        vowelsCount++;
    }
}

console.log(`Total number of vowels in string:${vowelsCount}`);

//Exercise-4-convert sting in lowercase and uppercase
let localStr: string = 'javascript';
let uppercaseStr: string = localStr.toLocaleUpperCase();
console.log(`UpperCase String:${uppercaseStr}`);
let lowercaseStr: string = localStr.toLocaleLowerCase();
console.log(`LowerCase String:${lowercaseStr}`);