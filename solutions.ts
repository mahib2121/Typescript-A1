//Problem 1:
function filterEvenNumbers(arr: number[]): number[] {
    const evenNumbers = arr.filter(num => num % 2 === 0);
    return evenNumbers;
}
//Problem 2:
function reverseString(str: string): string {
    const reversed = str.split('').reverse().join('');
    return reversed;
}
//Problem 3:
function checkType(value: any): string {
    const type = typeof value;

    if (type === 'string') {
        return "string";
    } 
    else if (type === 'number') {
        return "number";
    } 
    else {
        return "other";
    }
}

//Problem 4: 
const getProperty=<value>(obj:value,key:keyof value):any=>{
    return obj[key];
}


// Problem 5:

interface Book{
    title:string;
    author:string;
    publishedYear:number;
}

const toggleReadStatus=(book:Book)=>{
    return{...book,isRead:true}
}


// Problem 6:
class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;

    }

}

class Student extends Person{
    grade:string;
    constructor(name:string,age:number,grade:string){
        super(name,age);
        this.grade=grade;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age},Grade: ${this.grade},`
    }
}

//Problem 7:
const getIntersection=(array1:number[],array2:number[])=>{
    let num:number[]=[];

    for(let i=0;i<array1.length;i++){
       if( array2.includes(array1[i])){
        num.push(array1[i])
       }
    }
    return num;
}

const commonValues=getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
console.log(commonValues);

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(reverseString("typescript"));
console.log(checkType("Hello"));

const user = { id: 1, name: "John Doe", age: 21 };
const values=getProperty(user, "name");
console.log(values);


const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
const newObj=toggleReadStatus(myBook);
console.log(newObj);


const student = new Student("Alice", 20, "A");
console.log(student.getDetails())