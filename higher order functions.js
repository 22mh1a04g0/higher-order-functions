let numbers = [10, 25, 30, 45, 50, 65, 70, 85, 90];

let students = [
{ name: "Ravi", marks: 85 },
{ name: "Kiran", marks: 45 },
{ name: "Suresh", marks: 92 },
{ name: "Priya", marks: 35 },
{ name: "Anu", marks: 76 },
{ name: "Rahul", marks: 60 }
];
/* let res=numbers.reduce((a,b)=>a+b)
console.log(res) */
/* let res=students.filter(item=>item.marks>60)
console.log(res) */

/* let res=numbers.sort((a,b)=>b-a)
console.log(res) */

/* let res=numbers.every((n)=>n%5==0)
console.log(res) */

/* let res=numbers.map((element)=>element*element);
console.log(res) */

/* let res=students.find(item=>item.marks>80)
console.log(res) */

/* numbers.forEach((n, index) => {
    console.log(n, index);
});
 */

/* let res=numbers.findIndex(item=>item>60)
console.log(res) */

/* let arr=students.some(item=>item.marks<35)
console.log(arr) */
/* let arr=numbers.reduce((a,b)=>a+b)>100;
console.log(arr) */

/* let res=students.map(item=>item.name)
console.log(res) */

/* let res=numbers.filter(item=> item%2==0)
console.log(res) */

/* let arr=students.reduce((a,b)=>{
    if (a.marks>b.marks){
        return a;
    }
    else {
        return b;
    }
});
console.log(arr) */

//numbers.forEach(element=>{console.log(element*element)});


let res=students.sort((a,b)=>a.marks-b.marks);
console.log(res)



