// BASIC TYPES
let id: number = 5;
let company: string = 'Super Company'
let isPublished: boolean = true;
let x: any = 'Hello';
let age: number

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [false, 1, 'str']

// TUPLE - specify spot type, it must be exactly order
let person: [number, string, boolean] = [1, 'Brad', false];
let employee: [number, string][]
employee = [
    [1, 'Brad'],
    [2, 'Piotr'],
]

// UNION - more than one type possible to do
let userId: string | number = 22


// ENUM - by default they are number
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction1.Up) // return 0

enum Direction2 {
    Up= 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',
}

console.log(Direction2.Down) // 'down'

// OBJECTS
// You can specify types like that
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'John'
}

// or better here

type User = {
    id: number,
    name: string
}

const user2: User = {
    id: 2,
    name: 'Piotr'
}

// Type Assertion
let cid: any = 1 // it is any
// You can do this way
let customerId1 = <number>cid
// or this way can do the same
let customerId2 = cid as number;
customerId1 = 1 // can only be number now

// FUNCTIONS
// You must specify types unless you set 'noImplicitAny'
function addNum(x: number, y: number): number {
    return x + y;
}

function log(message: string | number): void {
    console.log(message)
}

// INTERFACE - similar to class syntax
interface UserInterface {
    readonly id: number, // you can't assign new value
    name: string,
    age?: number, // optional
}

const user3: User = {
    id: 2,
    name: 'Piotr'
}

// Interface fucntion
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
add(2, 3);

// CLASSES with interface
interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad');

// Extend
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name); // initialize parent
        this.position = position;
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')
console.log(emp.name, emp.register());

// GENERICS - generic T is like placeholder for
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

// then you can specify what T is (number, string)
let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'john', 'piotr'])

// numArray.push('hello') - error
numArray.push(9);


