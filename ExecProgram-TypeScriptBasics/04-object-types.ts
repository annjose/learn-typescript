type MyString = string;

const s: MyString = "hello world";
console.log(s);

// const t: MyString = 10; // error TS2322: Type 'number' is not assignable to type 'string'.

type User = {
    email: string,
    isAdmin: boolean
}
const joe: User = {
    email: "joe@abc.com",
    isAdmin: false
}
console.log(joe);   // {email: 'joe@abc.com', isAdmin: false}

// const abby: User = {
//     email: "abby@abc.com"
// }
// error TS2741: Property 'isAdmin' is missing in type '{ email: string; }' but required in type 'User'.

// const cathy: User = {
//     email: "cathy@abc.com",
//     isAdmin: "true"
// }
// error TS2322: Type 'string' is not assignable to type 'boolean'.

type Pants<T> = {
    left: T,
    right: T
}
const pant: Pants<string> = { left: "keys", right: "phone" }
console.log(pant);    // {left: 'keys', right: 'phone'}

// const wrong_pant: Pants<string> = { left: 10, right: "phone" };   // error TS2322: Type 'number' is not assignable to type 'string'.

type HeteroPants<T1, T2> = {
    left: T1,
    right: T2
}
const hetero_pant: HeteroPants<string, number> = {
    left: "phone",
    right: 22
}
console.log(hetero_pant);   // {left: 'phone', right: 22}

// Object literals inside functions
function extractEmail(user: { email: string }): string {
    return user.email;
}
const email = extractEmail({ email: "abc@example.com" });
console.log(`email: ${email}`);     // abc@example.com

// use object destructuring
// Destructuring ({email} happens on the left of the :, the type definition {email: string} is on the right side of :
function extractEmail_2({email}: { email: string }): string {
    return email;
}
const email_2 = extractEmail_2({ email: "abc@example.com" });
console.log(`email: ${email_2}`);     // abc@example.com
