// helloWorld function 
function helloWorld() {
    return"Hello, World!";
}
//changing function name prevents it from being called, and causes all tests to fail, as it cannot pass the first test which is looking for helloWorld itself to be the defined function
//if we changed the function name back to helloWorld the tests will pass, or if you changed the name of the function in the tests themselves, though this is not preferable.
//changing the return to "Hello" causes the test of the return string to fail as it doesn't match. The other tests still pass, in that it is still a defined function, it does not return undefined, and it is returning a string.
//changing to a console.log still defines the function but it no longer passes the string check, nor the name of the string, and the returns undefined check. (4)

function isSeven(input) {
    return input == 7;
    }

function sayHello() {

}

