# 0x12. JavaScript - Warm up

So this is the first JavaScript project for the Advanced Web Programming course . Coming from Python, some things feel familiarr and some things are just weird. This project is basicallyscripting with JS — no DOM stuff yet, just getting comfortable with thelanguage.

## What this is about

Gettting the basics down: variables, loopss, functions, how arguments worrk in Node, that kind of thing. Also figuring out when to use `const` vs `let` (and why `var` is apparentlysomething we're not supposed to touch).

## Setup

Youneed Node 14 and semistandard. Here's how to get them:

```bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install semistandard --global
```

All scripts are run directly like `./0-javascript_is_amazing.js` — make sure they're executable (`chmod +x filename.js`).

Also the first line of every file has to be:
```
#!/usr/bin/node
```

## Files

| File | What it does |
|------|-------------|
| `0-javascript_is_amazing.js` | Prints "JavaScript is amazing" — uses a constant, no `var` allowed |
| `1-multi_languages.js` | Prints three lines about C, Python and JS |
| `2-arguments.js` | Checks how many arguments were passed and prints a message accordingly |
| `3-value_argument.js` | Prints the first argument, or "No argument" if none was given |
| `4-concat.js` | Takes two args and prints them as `<arg1> is <arg2>` |
| `5-to_integer.js` | Converts the first argument to an integer if possible, otherwise says "Not a number" |
| `6-multi_languages_loop.js` | Same as task 1 but using an array and a loop instead of hardcoding the prints |
| `7-multi_c.js` | Prints "C is fun" x times using a loop |
| `8-square.js` | Prints a square made of X characters — size comes from the first argument |
| `9-add.js` | Adds two integers using a function called `add(a, b)` |
| `10-factorial.js` | Recursive factorial — factorial of NaN is 1 |
| `11-second_biggest.js` | Finds the second largest number from the arguments passed |
| `12-object.js` | Updates an object's value from 12 to 89 without using `var` |
| `13-add.js` | Same add function but exported so other files can use it |
| `100-let_me_const.js` | Modifies `myVar` to 333 — hint is "scope", this one is a bit tricky |
| `101-call_me_moby.js` | Runs a given function x times |
| `102-add_me_maybe.js` | Increments a number and passes it to a callback |
| `103-object_fct.js` | Adds an `incr` method to an existing object that bumps up its value |

## Notes

- `var` is not allowed anywhere in this project
- `console.log` is the only way to print output
- Some tasks have restrictions like no `length`, no `try/catch`, no `if/else` — read each task carefully
- Task 14 (`100-let_me_const.js`) doesn't pass semistandard and that's fine, the task says so


# 0x13. JavaScript - Objects, Scopes and Closures

For the Second JavaScript project. This one getsinto OOP — classes, inheritance, prototypes, and closuress. Honestly closures were the most confussing part at first but theystart to make sense onc you see them inaction (check `9-logme.js` and `10-converter.js`).

## What this covers

Classes with ES6 syntax, `extends` and `super` for inheritance, how `this` behaves inside methods, what closures actually are, and some array methods like `map` and `filter`. Also a bit of file I/O at the end with the `fs` module.

## Setup

Same as the previous project — Node 14 and semistandard:

```bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install semistandard --global
```

Files neeed to be executable and startwith `#!/usr/bin/node`. No `var` anywhere.

## Files

| File | What it does |
|------|-------------|
| `0-rectangle.js` | Empty `Rectangle` class, just to get the syntax down |
| `1-rectangle.js` | `Rectangle` with a constructor that sets `width` and `height` |
| `2-rectangle.js` | Same but returns an empty object if `w` or `h` is 0 ornegative |
| `3-rectangle.js` | Adds a `print()` method that draws the rectaangle with X characters |
| `4-rectangle.js` | Adds `rotate()` and `double()` methods on top of `print()` |
| `5-square.js` | `Square` class that extends `4-rectangle.js` — constructor just takes `size` |
| `6-square.js` | Extends `5-square.js` and adds `charPrint(c)` to print with any character |
| `7-occurrences.js` | Returns how many times anelement appears in a list |
| `8-esrever.js` | Reversess a list without usiing the built-in `reverse` method |
| `9-logme.js` | Prints a running count of how many times it's been callled alongside the current value |
| `10-converter.js` | Returns a function that converts a base-10 number to a given base — good closure example |
| `100-map.js` | Uses `map` to multiply each value in a lisst by its index |
| `101-sorted.js` | Flips a user-id-to-occurrence dict into an occurrence-to-user-ids dict |
| `102-concat.js` | Reads two files and writes their combined contentinto a third file |

## The closure thing

It clicked for me with task 10. `converter(base)` returns a new function that still has access to `base` even after `converter` has finished running. That's a closure — the inner function "closes over" the variable from its outer scope.

```js
const myConverter = converter(16);
myConverter(89); // returns "59" — base 16 is still remembered
```


 

## Author
Submitted by Ngufor Princeley Enock from HITBAMAS — 
Advanced Web Programming  
Lecturer: Engr. Abang Tanyi Alain
