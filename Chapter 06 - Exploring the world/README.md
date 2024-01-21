# What is a Microservice?

A microservice is a small, independent component of a software application that performs a specific function. These services can be developed, deployed, and scaled independently, contributing to flexibility and resilience in the overall system.

# What is Monolith architecture?

Monolithic architecture is a traditional software design where all components of an application are tightly integrated into a single codebase and executed as a single, indivisible unit

# What is the difference between Monolith and Microservice?

**Monolith:**

- _Single Block:_ Everything is built as one big, connected unit.
- _Scaling:_ If you need more power, you have to replicate the entire thing.

**Microservices:**

- _Building Blocks:_ Application is made of many small, independent pieces.
- _Scaling:_ You can grow specific parts without affecting the whole system.

In short, monolith is like a big combined piece, while microservices are like separate building blocks that work together.

# Why do we need a useEffect Hook?

The `useEffect` hook in React is like a Swiss Army knife for managing various tasks:

- **Fetching Data:** Get data when the component loads.
- **Subscriptions:** Subscribe and unsubscribe to events.
- **DOM Manipulation:** Interact with the webpage directly.
- **Timers/Intervals:** Set up and clean up timers.

It's handy for keeping your component in sync with the outside world. If you want to do something when a specific variable (like an object) changes, toss that variable into the `useEffect` dependency array.

# What is Optional Chaining?

Optional Chaining is a feature in JavaScript (introduced in ECMAScript 2020) that simplifies the process of accessing properties or calling methods on nested objects when there's a possibility of encountering null or undefined. It helps to avoid errors like "Cannot read property 'someProperty' of null" or "Cannot read property 'someMethod' of undefined."

# What is Shimmer UI?

Shimmer UI is a user interface (UI) design technique that involves the use of placeholder or loading animations to indicate that content is being loaded or is in the process of loading. It's particularly common in situations where there might be a slight delay in fetching and displaying data from a server, and designers want to provide users with a visual cue that something is happening in the background.

# What is the difference between JS expression and JS statement?

In JavaScript, expressions and statements are two fundamental building blocks, but they serve different purposes.

Expression:

An expression is a piece of code that produces a value.
It can be a simple value like a number or string, a more complex structure like an object, or the result of an operation.
Expressions can include variables, operators, and function calls.
Examples of expressions:

Statement:

A statement is a larger piece of code that performs an action.
It doesn't necessarily produce a value, or its main purpose is to cause some change in the program's state.
Statements often include control flow structures like loops (for, while) and conditionals (if, switch).
Examples of statements:

# What is Conditional Rendering, explain with a code example

Conditional rendering in programming refers to the practice of displaying different UI elements or content based on certain conditions or criteria. In JavaScript and React, conditional rendering often involves using conditional statements to determine what should be rendered in the user interface.

# What is CORS?

Cross-Origin Resource Sharing (CORS) is a mechanism that allows a web page to make requests to a different domain than the one that served the original page.

# What is async and await?

async and await are features in JavaScript used to work with asynchronous code, making it easier to write and understand asynchronous operations. They are often used with Promises to handle asynchronous tasks in a more synchronous-like manner.