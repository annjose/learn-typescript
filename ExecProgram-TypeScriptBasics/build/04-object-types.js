var s = "hello world";
console.log(s);
var joe = {
    email: "joe@abc.com",
    isAdmin: false
};
console.log(joe); // {email: 'joe@abc.com', isAdmin: false}
var pant = { left: "keys", right: "phone" };
console.log(pant); // {left: 'keys', right: 'phone'}
var hetero_pant = {
    left: "phone",
    right: 22
};
console.log(hetero_pant); // {left: 'phone', right: 22}
// Object literals inside functions
function extractEmail(user) {
    return user.email;
}
var email = extractEmail({ email: "abc@example.com" });
console.log("email: ".concat(email)); // abc@example.com
// use object destructuring
// Destructuring ({email} happens on the left of the :, the type definition {email: string} is on the right side of :
function extractEmail_2(_a) {
    var email = _a.email;
    return email;
}
var email_2 = extractEmail({ email: "abc@example.com" });
console.log("email: ".concat(email_2)); // abc@example.com
//# sourceMappingURL=04-object-types.js.map