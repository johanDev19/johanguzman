---
title: 'JavaScript - Global variable '
date: '2020-04-04T03:31:31.153Z'
excerpt: >-
  Hi, in this episode I will talk about Global variable in JavaScript.  Let's
  write the next code:   fu...
thumb_img_path: null
comments_count: 1
positive_reactions_count: 9
tags:
  - javascript
canonical_url: 'https://dev.to/johandev19/javascript-global-variable-53ah'
template: post
---
Hi, in this episode I will talk about Global variable in JavaScript.

Let's write the next code:

```javascript
function print(text) {
 var helloWorld = text;
 console.log(helloWorld);
}

print('hello my aliens') // => hello my aliens
console.log(helloWorld) // => error: Uncaught ReferenceError: helloWorld is not defined
```

The program is going to print the variable **helloWorld** inside the function but outside the function it will break the code

If we want to have access to the variable **hellowWorld** outside the function **print** we need to remove the reserved word **var** and our code will look like this:

```javascript
function print(text) {
 helloWorld = text;
 console.log(helloWorld);
}

print('hello my aliens') // => hello my aliens
console.log(helloWorld) // => hello my aliens
```


And we will see two identical messages.

**But the big question is, WHY THIS HAPPENS?**
When JavaScript are compiling, and he found the word **helloWorld** without the reserved word **var**, it will put the variable **helloWorld** on top of the file because it thinks that you are going to use it below.

Your compiled code will look like this:

```javascript
var helloWorld;

function print(text) {
 helloWorld = text;
 console.log(helloWorld);
}

print('hello my aliens') // => hello my aliens
console.log(helloWorld) // => hello my aliens
```


This method of using the global variable will work but is not recommended. There are multiple ways to have a global variable, but the complexity of the code will determine which one is the correct one. Some example of these are 
`use a session store`
, 
`create a function that return the value`
, 
`enums`
, or use 
`a dictionary`


*[This post is also available on DEV.](https://dev.to/johandev19/javascript-global-variable-53ah)*


<script>
const parent = document.getElementsByTagName('head')[0];
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.1.1/iframeResizer.min.js';
script.charset = 'utf-8';
script.onload = function() {
    window.iFrameResize({}, '.liquidTag');
};
parent.appendChild(script);
</script>    
