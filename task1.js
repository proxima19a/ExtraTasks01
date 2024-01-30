const javaScriptDescription='JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';
let halfSymbolsQuantity=Math.floor(javaScriptDescription.length/2);

let finalString=javaScriptDescription.slice(0,halfSymbolsQuantity);

finalString=finalString.replaceAll(' ', '');

finalString=finalString.replaceAll('a', 'A');

finalString=finalString.replaceAll('а', 'А');
//console.log(finalString);
finalString=finalString.repeat(3);
console.log('Средний символ', finalString[Math.floor(finalString.length/2)]);

console.log(finalString);