# TypeScript-এ keyof keyword এর ব্যবহার

TypeScript এ keyof হচ্ছে একটি খুবই শক্তিশালী keyword। এটি কোনো object type এর সকল key কে union type হিসেবে বের করতে সাহায্য করে। মানে জানতে পারা যে কন কন প্রপার্টি একটি object এ থাকতে পারে।

উদাহরণঃ

type User = {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User;

এখানে UserKeys হচ্ছে একটি union type আর id | name | email |
এটি ব্যবহার করা যায় generic ফাংশন বা type safety এর জন্য।

funtion এ ব্যবহার করাঃ

function getValue(obj: user, key: keyof User) {
  return obj[key];
}

const user: user = {id: 111, name: "Niloy", email: "niloy@12.com" };

console.log(getValue(user, "name")); 

এখানে typescript  নিশ্চিত করছে যে তুমি ইউজার এর বৈধ key (id,name,email) ব্যবহার করতে পারবে। অন্য key দিলে compile error দেখাবে।

## সুবিধা: 
 * keyof দিয়ে আমরা একটি অবজেক্টের সমস্ত key বের করতে পারি।
 * এটি টাইপ সেফটি নিশ্চিত করে, অর্থাৎ ভুল key ব্যবহার করলে error দেয়।
 * অনেক সময় generic type এর সাথে মিলিয়ে কাজ করতে খুব কাজে লাগে।

 

** TypeScript এ Enums কী?

Enums হল একটি বিশেষ ধরনের ডেটা টাইপ, যা আমাদের একসাথে সংখ্যা বা স্ট্রিং ভ্যালু নিয়ে একটি নামকৃত সেট তৈরি করতে সাহায্য করে।

 আর এর মূল উদ্দেশ্য হলো কোডকে আরও রিডেবল করা মেইনটেইনেবল করা।

 enum এর ব্যাবহার 
  ১। যেমনঃ Numeric enum > ডিফল্টভাবে TypeScript এ enum মানগুলো 0 থেকে শুরু হওয়া সংখ্যার ক্রম হিসেবে নিয়োগ করে।

  ২। যেমনঃ String enum > এখানে প্রতিটি enum এর value string হিসেবে স্পষ্টভাবে নিয়োগ করা হয়।

  ## Numeric Enum Example
  enum Direction {
    Up,       // ০
    Down,     // ১
    Left,     // ২
    Right     // ৩
}

let move: Direction = Direction.Up;
console.log(move);

এখানে Direction.Up মানে 0, Direction.Down মানে 1 ইত্যাদি।

## String Enum Example
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

let userRole: Role = Role.Admin;
console.log(userRole); 

এখানে প্রতিটি value স্পষ্টভাবে string হিসেবে নিয়োগ করা হয়েছে।

কোড পড়তে সহজ হয় এবং bug কম হয় কারণ string name ব্যবহার করা হয়েছে।

## সুবিধা:
* কোডে নামকৃত মান ব্যবহার করা যায়।
* টাইপ সেফটি বাড়ায়।
* হিউম্যান-রিডেবল এবং মেইনটেইনেবল কোড।
* Numeric বা String ভ্যালু যেকোনো ব্যবহার করা যায় প্রয়োজন অনুযায়ী।