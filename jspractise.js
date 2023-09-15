// let data={name:"dutt"};
// console.log(data.name);
// let a=3;
// let b=4;
// function call(){
//   return a+b;
// }
// console.log(call());
// const fetching= fetch("https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises");
// console.log(fetching);
// fetching.then((response)=>{
//   console.log(`Recived responce:${response.status}`)
// });
// console.log("started req")
// function randomVal(){
//   return 30;
// }

// function add(a,b=10,c=randomVal()){
//   return a+b+c;
  
// };
// console.log(add(20));
// const arr=[10,20,30,40,50,60,70,80,90,100];
// let result=arr.find((item)=>{
//    return item>40 
// });
// console.log(result);
// 

 
// function findlongestString(stringArray){
//     let longestString=stringArray[0];
//     for(let i=0;i<stringArray.length;i++){
//         const currentString=stringArray[i];
//         if(currentString.length>longestString.length){
//             longestString=currentString;
//         }
//     }
//     return longestString;
// }
// const string=["ndr", "nfnf", "j4jj4","iiiii"];
// console.log(findlongestString(string));

// function commonArray(arr1,arr2){
//     var commonArr=[];
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//            if(arr1[i]==arr2[j]){
//             commonArr.push(arr1[i]);
//            }
//         }
//     }
//     return commonArr
    
// }
// let array1=[1,2,3,4,5,6,8,1,2,3];
//     let array2=[1,3,5,8,1,2];
// console.log(commonArray(array1,array2));

// function commonArray(arr1,arr2){
//     var commonArr=[];
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]=arr2[j]){
//                 commonArr.push(arr1[i]);
//             }
//         }
//     }
//     return commonArr
// }
// let array1=[22,33,43,44,54,55,65,66,77,76,88,84];
// let array2=[22,23,44,45,55,56,66,67,77,78,88,89];
// console.log(commonArray(array1,array2));

// function factorial(num){
//    if(num===0||num===1)
//    return 1;
//    for(let i=num-1;i>=1;i--){
//     num*=i;
//    }
//   return num;
// }
// console.log(factorial(9));

// function palindrome(str){
//     let re=/[\W_]/g;
//     let lowRegStr=str.toLowerCase().replace(re,'');
//     let reverseStr=lowRegStr.split('').reverse().join('');
//     return reverseStr===lowRegStr;
// }
// console.log(palindrome("race car"));

// function removevowels(string){
//     let newString="";
//     for(i=0;i<string.length;i++){
//         if(string[i]!="a",string[i]!="e",string[i]="i",string[i]="o",string[i]="u"){
//        return newString += string[i];
//     }
// }
// }
// console.log(removevowels())

// const obt={
//     name:"kds",
//     age:"13",
//     schl:"sgss"
// }
// console.log(Object.keys(obt));
// console.log(Object.values(obt));

// const obt1={
//     name:"kds",
//     age:"13",
//     schl:"sgss"
// }
// const obt2={
//     area:"jnrd",
//     city:"rjy",
// }
// let bd=Object.assign(obt1,obt2);
// console.log(bd);

// const arr1=[{
//     name:"kds",
//     age:"13",
//     schl:"sgss"
// }];
// const arr2=[{
//     area:"jnrd",
//     city:"rjy"
// }];
// let so=[...arr1,...arr2]
// console.log(so);

// let numArr=[2,3,4,5,6,7,8,9,10];
// const sum=arr=>arr.filter(e=>!(e%2)).reduce((a,b)=>a+b);
// console.log(sum(numArr))

// const fru=["apl","orgn","gua","bb","rsb","stb","jacfr","coco"]
// const uppcase=fru.map(function(n){return n.toUpperCase();});
// console.log(uppcase);

// let productOfArray=(numbers)=>{
//       return numbers.reduce((accumalator,currentValue)=>accumalator*currentValue
// )};
// const numbArr=[32,23,34,43,45,56,54,63,34]
// console.log(productOfArray(numbArr));


//  const markSheet=[
//     {name:"edd",mark:23},
//     {name:"dde",mark:32},
//     {name:"ddr",mark:45},
//     {name:"vbn",mark:11}
//  ];
//  function getAvgScore(markSheet){
// const avgOfStudent=markSheet.reduce((accumalator,currentValue)=>accumalator+currentValue);
// const total=markSheet.reduce((totalMarks,obj)=>obj.mark+totalMarks,0);
// const avg=total/markSheet.length
// return avg;
//  };
//  console.log(getAvgScore(markSheet));

// const data=[
//     {"id": 1, "name": "Amit Kumar", "age": 25},
//     {"id": 2, "name": "Rahul Dixit", "age": 20},
//     {"id": 3, "name": "Ravi Joshi", "age": 55},
//     {"id": 4, "name": "Rohit Verma", "age": 35},
//     {"id": 5, "name": "Ajay Jain", "age": 17},
//     ]
    
//     const targetName = "Rohit Verma";
//     const rohitVerma = data.find(person => person.name === targetName);
// if (rohitVerma) {
//   console.log("Details of Rohit Verma:");
//   console.log(`ID: ${rohitVerma.id}`);
//   console.log(`Name: ${rohitVerma.name}`);
//   console.log(`Age: ${rohitVerma.age}`);
// } else {
//   console.log(`No details found for ${targetName}`);
// }

// const nameToFind="Rohit Verma";
// const rohitVerma=data.find(person=>person.name===nameToFind);
// if(rohitVerma){
//     console.log(rohitVerma.name,rohitVerma.age,rohitVerma.id)
// }
// else{
//     console.log("404 not found");
// }
// const newData=data.filter((dta)=>{return dta.age>17});
// console.log(newData)`

// let newData=data.map((acc)=>{return acc.name[0]==="R"})
// console.log(newData)


// const arr=[1,12,23,54,45];
// console.log(calculateSumOfSquares(arr));
// function calculateSumOfSquares(arr){
//     const sumofnum=arr.reduce((acc,val)=>{
//         const sqr=Math.pow(val,2);
//         return acc+sqr;
//     },0)
//     return sumofnum;
// }

// const data=[
//     {"id": 1, "name": "Amit Kumar", "marks": 25},
//     {"id": 2, "name": "Rahul Dixit", "marks": 80},
//     {"id": 4, "name": "Rohit Verma", "marks": 35},
//     {"id": 5, "name": "Ajay Jain", "marks": 31},
//     ]
// const newData=data.filter((acc)=>{return acc.marks>34});
// console.log(newData);

// const newData=data.filter((acc)=>{
//     if(acc.name[0]==="R"){
//         return acc.name
//     }
// })
// const total=newData.reduce((acc,obj)=>{
//     return(acc+=obj.marks);
// },0);
// console.log(total/newData.length);

// const array=["asdf","asdf","lkjhk","fhjkkl","rdf","vbg","edcvfr"]
// let newarr=array.filter((ele)=>{return ele.length>4})
// console.log(`${newarr}`);

// const array=["as2dr","aszw","opi","juiol","as","hytgner","mnkpd","lpl","mmmm"]
// let newarr=array.filter((ele)=>{return ele.length>4});
// console.log(newarr)

// const prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Brining stuff')
//     },5000)
// })

// const promise=new promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject('error')
//     }, 3000);
// })
// promise.then(onFulfilment)
// promise.catch(onRejection)

// const person={
//     firstName:"eeee",
//     lastName:"dddd",
//     fullName:function(){
//         return this.firstName+""+this.lastName
//     }
// }
// const member={
//     firstName:"cccc",
//     lastName:"vvvv"
// }
// let fullName=person.fullName.bind(member);
// console.log(fullName)

// const val1="2"
// const val2=1
// let sum=val1+val2;
// console.log(sum);

// const person ={
//     name:"Jon",
//     id:"23"
// };
// const {name:personName,id:personId}=person;
// console.log(personName);
// console.log(personId)

// class Reactangle{
//     constructor(height,width){
//         this.height=height;
//         this.width=width;
//     }
//     calculateArea(){
//        return this.height*this.width
//     }
//     setHeight(height){
//         this.height=height;
//     }
//     setWidth(width){
//         this.width=width;
//     }
//     getHeight(){
//      return this.height;
//     }
//     getWidth(){
//         return this.width;
//     }
// }
// const myReactangle=new Reactangle(44,45);
// console.log(myReactangle.width);
// console.log(myReactangle.height);
// console.log(myReactangle.calculateArea());

// function fetchDataFromAPI(endpoint){
//     return new Promise((resolve,reject)=>{
//         fetch(endpoint).then((responce)=>{
//             if(responce.status===200){
//                 responce.json().then((data)=>{
//                     resolve(data);
//                 });
//             }else{
//                 reject('Request failed')
//             }
//         })
//         .catch((error)=>{
//             reject(error.message);

//         })
//     })
// }

// const obj1={
//     name:'Jon',
//     age:30,
//     city:'NewYork'
// };
// const keys=Object.keys(obj1);
// console.log(keys);
// const val=Object.values(obj1);
// console.log(val);

// const obj={
//     a:20,
//     b:30,
//     c:40
// };
// const values=Object.values(obj)
// const sum=values.reduce((accum,curr)=>accum+curr,0);
// console.log(sum);

// const obj1=[{
//     name:"ght",
//     id:"12",
//     city:"Rjy"
// }]
// const obj2=[{
//     sch:"sgss",
//     area:"gpj"
// }]
// const obj3=[{
//     ...obj1,dist:"eg",state:"ap",
// }]
// console.log(obj2);
// add(8);
// sub(8);
// deleted a bug