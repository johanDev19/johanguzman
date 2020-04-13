---
title: Node.js - REPL (Read Eval Print Loop)
date: '2020-04-07T20:07:29.447Z'
excerpt: >-
  Before start with this post, I would like to explain what is node.js.  Node.js
  is not entirely true a...
thumb_img_path: null
comments_count: 1
positive_reactions_count: 1
tags:
  - javascript
  - node
  - testing
canonical_url: 'https://dev.to/johandev19/node-js-repl-read-eval-print-loop-4597'
template: post
---
Before start with this post, I would like to explain what is **node.js.**

Node.js is not entirely true a JavaScript that runs on the backend, it is a **wrapper** of a **VM** who is running the **JavaScript V8 engine**,
knowing that, node.js come with a lot API that we can use in conjunction with JavaScript but I will leave that topic for another post.

Now let talk about **REPL**.

**REPL** it is a node API that let us to write or test script in the terminal.
To enter in to the REPL mode we need to type 
`node`
 in the terminal.


```terminal
> node
>
```


After that are going to see an empty 
`>`
 its mean that we are into the **REPL** mode, now we can have fun and write some code.


```terminal
> console.log('hello REPL') // => hello REPL
```


REPL let us write an inline code by default, if we want to write a multiple line of code

```terminal
> function printHelloAliens() {
```


then left 
`{`
 open and press 
`enter`
 you will see the next line with 
`...`



```terminal
> function printHelloAliens() {
> ...
```


it means that we are ready to continue with the function content, add a 
`console.log('hello aliens')`
 and press 
`enter`
 and you will see the next line with 
`...`



```terminal
> function printHelloAliens() {
> ...console.log('hello aliens');
> ...
```


to finish with the function content with need to add 
`}`



```terminal
> function printHelloAliens() {
> ...console.log('hello aliens');
> ...}
> undefined
```


after press 
`enter`
 the terminal will print 
`undefined`
;
if you want to test your function just invoke the function, in my case is 
`printHelloAliens()`



```terminal
> function printHelloAliens() {
> ...console.log('hello aliens');
> ...}
> undefined
> printHelloAliens() // => hello aliens
```


they are a lot of options, if you want to know it just type 
`.help`



```terminal
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the repl
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file
```


for this tutorial we're only going to see the 
`.editor`
 command.
The 
`.editor`
 command allow you to write a multiple line of code more easy.


```terminal
> .editor
// Entering editor mode (^D to finish, ^C to cancel)
```


Now with can write a multiple line of code with just pressing 
`enter`



```terminal
// Entering editor mode (^D to finish, ^C to cancel)
function printMyName() {
 console.log('Johan Guzman')
}
> undefined
```


For close the editor mode type 
`CTRL + d`
 and the terminal will print 
`undefined`
;

if you want to test your function just invoke the function, in my case is 

`printMyName()`



```terminal
// Entering editor mode (^D to finish, ^C to cancel)
function printMyName() {
 console.log('Johan Guzman')
}
> undefined
> printMyName() // => Johan Guzman
```


The **REPL** is very helpful to test a node or JavaScript code without open the editor or write a little program.


*[This post is also available on DEV.](https://dev.to/johandev19/node-js-repl-read-eval-print-loop-4597)*


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
