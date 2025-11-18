//Problem 1:
function formatValue(value: string | number | boolean): string | number | boolean {
  
  if (typeof value === 'string') {
    // string hole upperCase return kore
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    // number hole 10 diye multiply kore
    return value * 10;
  } else if (typeof value === 'boolean') {
    // boolean hole ulta kore return korbe
    return !value;
  } else {
    // jodi baki kono type na thake tahole return korbe aki value
    return value;
  }
}



// Problem 2:
function getLength(value: string | any[]): number {
  // jodi value string hoy tahole length return korbe  
    if(typeof value === 'string'){
        return value.length;
    }
// jodi array hoy tahole array index length korbe 
    if(typeof Array.isArray(value)){
        return value.length;
    }
    // ar onno like baki khetre 0 return korbe 
    return 0;
}
 

// Problem 3:
class Person {
   name : string; // akhane name save korte
   age: number; // ar akhane boyos save korte

   // object create korar shomoy data ta set kora
    constructor (name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(){
      // name ar age string a return koree
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}


// Problem 4:

// item type dfine title ar rating
type item = {
    title: string;
    rating: number;
}



function filterByRating(items: item[]): item[]{
  
// rating  >=4 book gulo filter kore return kora hocche 

  return items.filter(item => item.rating >= 4)
    
}

// test data for testing
const books: item[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];



// Problem 5:
type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers(users: User[]): User[]{

  // input check kora hocche je array ki na
   if(!Array.isArray(users)){
    throw new Error("Input must be an array of users")
   }

   // shudhu isactive jegulo user taderke return kora hocche
   return users.filter(user => user.isActive === true)
}

// sample data for testing
const users: User[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];



// Problem 6:

// book type interface a dhorsi
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
}

// ai function ta book er details gulo print kore
function printBookDetails(book: Book): string {
    // availability check kora hocche ternary niye jodi thake yes na thakle no 
    const available = book.isAvailable ? "Yes" : "No";

      // string a details gulo return kora holo
        return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`;
}

// book er akta object 
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

// function take call kora hocche result paoar jonno
const result = printBookDetails(myBook)




// Problem 7:
function getUniqueValues(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
    const result: (number | string)[] = [];
    let resultLength = 0;

    // Helper function ja check korbe array te value exists kina
    function exists(value: number | string, array: (number | string)[], arrayLength: number): boolean {
        for (let i = 0; i < arrayLength; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    }

    // Add unique values arr1
    for (let i = 0; i < arr1.length; i++) {
        if (!exists(arr1[i], result, resultLength)) {
            result[resultLength] = arr1[i];
            resultLength++;
        }
    }

    // Add unique values arr2
    for (let i = 0; i < arr2.length; i++) {
        if (!exists(arr2[i], result, resultLength)) {
            result[resultLength] = arr2[i];
            resultLength++;
        }
    }

    return result;
}


// Sample Input
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];




//Problem 8:
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; // ? ata thakle optional mane thakleo chole na thakleo chole
};

function calculateTotalPrice(products: Product[]): number {
  return products

  // basic price er shathe = price ar quantity * multiply
    .map(product => {
      const basePrice = product.price * product.quantity;

      // jodi thake discount apply kora ar na thakle 1 ternary diye 
      const discountMultiplier = product.discount !== undefined
        ? (1 - product.discount / 100)
        : 1;


      return basePrice * discountMultiplier; // final price return hobe
    })
    .reduce((total, current) => total + current, 0); // shob product add kore total ber kora hoocche
}

// Sample Input
const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
