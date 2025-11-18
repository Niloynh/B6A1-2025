function formatValue(value: string | number | boolean): string | number | boolean {
  
  if (typeof value === 'string') {

    return value.toUpperCase();
  } else if (typeof value === 'number') {
 
    return value * 10;
  } else if (typeof value === 'boolean') {
 
    return !value;
  } else {

    return value;
  }
}



function getLength(value: string | any[]): number {
  
    if(typeof value === 'string'){
        return value.length;
    }

    if(typeof Array.isArray(value)){
        return value.length;
    }

    return 0;
}
 
class Person {
   name : string; 
   age: number; 

    constructor (name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(){
  
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}



type item = {
    title: string;
    rating: number;
}



function filterByRating(items: item[]): item[]{
  

  return items.filter(item => item.rating >= 4)
    
}


const books: item[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];



type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers(users: User[]): User[]{


   if(!Array.isArray(users)){
    throw new Error("Input must be an array of users")
   }


   return users.filter(user => user.isActive === true)
}


const users: User[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
}


function printBookDetails(book: Book): string {

    const available = book.isAvailable ? "Yes" : "No";

   
        return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`;
}


const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

const result = printBookDetails(myBook)




function getUniqueValues(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
    const result: (number | string)[] = [];
    let resultLength = 0;

    function exists(value: number | string, array: (number | string)[], arrayLength: number): boolean {
        for (let i = 0; i < arrayLength; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    }


    for (let i = 0; i < arr1.length; i++) {
        if (!exists(arr1[i], result, resultLength)) {
            result[resultLength] = arr1[i];
            resultLength++;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!exists(arr2[i], result, resultLength)) {
            result[resultLength] = arr2[i];
            resultLength++;
        }
    }

    return result;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];




type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
};

function calculateTotalPrice(products: Product[]): number {
  return products

    .map(product => {
      const basePrice = product.price * product.quantity;

 
      const discountMultiplier = product.discount !== undefined
        ? (1 - product.discount / 100)
        : 1;


      return basePrice * discountMultiplier;
    })
    .reduce((total, current) => total + current, 0); 
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
