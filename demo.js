// let payload = [10,10,10,5];
//  console.log(payload.filter((e,i,arr)=>arr.indexOf(e)==i));
// let total  = payload.map((e)=>e.n).reduce((a,b)=>a+b)
// let pass = parseInt((34/100)*total);
// function check() {
//     for (let current_index in payload) {
//         let first_Index = payload.findIndex((e)=>e.n==payload[i].n);
//         if(first_Index != current_index){
//             return 'Duplicate Entry!';
//         }
//     };
// }

// let names = ["s","a","a","s","s"];
// let unique = [];
// for (let i = 0; i< names.length; i++) {
//     let character = names[i];
//     for (let j = 0; j < names.length; j++) {
//         if(names[j]===character && i!=j){
//             break;
//         }
//         else if(names[j]===character && i===j){
//             unique.push(names[i]);
//         }
//     }
// }
// console.log(unique);

// let names = ["a","s","d"];
// let reverse = [];
// let n = names.length;
// for (let i = 1; i <= n; i++) {
//         reverse.push(names[n-i]);
// }
// console.log(reverse);

// const lower = ["a","b","c","d","e","f","g","h","i","j","k","l",'m',"n","o","p","q","r","s"];
// const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S"];
// let str = "sanam kajla";
// let arr = [];
// let i = 0;
// while(arr.length != str.length){
//     arr.push(str[i]);
//     i++;
// }
// for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     for (let j = 0; j < lower.length; j++) {
//         let lwr = lower[j];
//         if(lwr===element){
//             arr[i] = upper[j];
//         }
//     }
// }
// str = "";
// i = 0;
// while(arr.length != str.length){
//     str += arr[i];
//     i++;
// }
// console.log(str);

// let Arr =[64,25,12,22,11];
// for (let i = 0; i < Arr.length; i++) {
//     for (let j = 0; j < Arr.length; j++) {
//         if(Arr[i] > Arr[j] && i < j ){
//             let temp = Arr[i];
//             Arr[i] = Arr[j];
//             Arr[j] = temp;
//         }
//     }
// }
// console.log(Arr);

// function reverse(str,rts="",i=1) {
//     if(i>str.length){
//         return rts;
//     }
//     rts += str[str.length - i];
//     return reverse(str,rts,i+1);
// }
// let str = "abcd";
// console.log(reverse(str));

// function compare(a, b, c) {
//     switch (true) {
//         case c >= b && c >= a:
//             return c;
//             break;
//         case b >= c && b >= a:
//             return b;
//             break;
//         default:
//             return a;
//             break;
//     }
// }
// console.log(compare(3,2,3));
// let payload = {
//     startTime:"10:00",
//     endTime:"11:20",
//     duration:"00:   "
// }
// let endTime = (payload.endTime.split(":")[0] * 3600000) + (payload.endTime.split(":")[1] * 60000);
// let startTime = (payload.startTime.split(":")[0] * 3600000) + (payload.startTime.split(":")[1] * 60000);
// let duration = (parseInt(payload.duration.split(":")[0]) * 3600000) + (parseInt(payload.duration.split(":")[1]) ? parseInt(payload.duration.split(":")[1]) * 60000:0);
// if (!duration || endTime - startTime < duration)
// console.log(duration);
// let percentage = 90/110*100;
// let grade = percentage >= 90 ? 'A' : percentage >= 80 ? 'B' : percentage >= 60 ? 'C' : percentage >= 50 ? 'D' : percentage >= 40 ? 'E' : 'F';
// console.log(grade,percentage);
// let a = [1,2,2,4,5];
// for(let i = 1;i < a.length;i++){
//     let sub = a[i]-a[i-1];
//     if(sub > 1){
//         for (let j = 1; j < sub; j++) {
//             console.log(a[i]-j,"missing");
//         }
//     }
//     else if(sub == 0){
//         console.log(a[i],"repeated");
//     }
// }

// interview questions
// 1
// let str = "abcdef 1234_as_123";
// let uniqueNumbers = [];
// for (let index = 0; index < str.length; index++) {
//     const element = str[index]-0;
//     if(element && !isNaN(element) && !c.includes(element)){
//         c.push(element);
//     }
// };
// console.log(uniqueNumbers);
// 2
// let arr = ['this','that','than','their'];
// let common = '';
// for (let index = 0; index < arr[0].length; index++) {
//     const element = arr[0][index];
//   if(arr.every((str)=>str.includes(element))){
//     common += element;
//   }
// };
// console.log(common);
//3
// let str = 'i am a student';
// let [a,...b]=str.split(' ');
// let c = a;
// for (let index = 0; index < b.length; index++) {
//     const [e,...f] = b[index];
//     c += '_';
//     c += e.toUpperCase() + f.join('');
// };
// console.log(c);
//4
// let arr = [1,3,5,6,6];
// let missing = [];
// let repeated = [];
// for (let index = 1; index < arr.length; index++) {
//     const curr = arr[index];
//     const pre = arr[index - 1];
//     let diff = curr - pre;
//     if(diff>1){
//         for (let index = 1; index < diff; index++) {
//             const element = curr - index;
//             missing.push(element);
//         }    
//     }
//     else if(diff == 0 && !repeated.includes(curr)){
//         repeated.push(curr);
//     }
// };
// console.log(repeated,missing);
//5
// let str = 'SanamSanamSanam';
// let word = '';
// for (let i = 0; i < str.length; i++) {
//     if((str.length%i)==0){
//         let x = i;
//         let repeat = false;
//         while (x<=str.length-i) {
//             if(str.slice(0,i)==str.slice(x,x+i)){
//                 repeat = true;
//             }else{
//                 repeat = false
//             }    
//             x += i;
//         }
//         if(repeat){
//             word = str.slice(0,i);
//         }
//     }    
// };
// console.log(word);
//6
// let arr = [11,12,3,14,5,6,17,8,19];
// arr.sort((a,b)=>a-b);
// let i = 0;
// while(i <= (arr.length - 2)){
//     let element = arr[i];
//     arr[i] = arr[i + 2];
//     arr[i + 2] = element;
//     i += 2;
// }
// console.log(arr);
