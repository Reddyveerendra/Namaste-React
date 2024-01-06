# What is Emmet?

Emmet is a toolkit for web developers that expands abbreviations into HTML or other markup languages. It's not exclusive to Visual Studio Code (vscode), although it is commonly used as a plugin in editors like vscode to enhance the speed of writing HTML and CSS.

# Difference between a Library and Framework?

Libraries and frameworks both provide reusable code, but the main difference lies in the inversion of control. In a library, you call the code, while in a framework, the control flow is inverted – the framework calls your code.

# What is CDN? Why do we use it?

A CDN is a system of distributed servers that deliver web content, like images, stylesheets, and scripts, to users based on their geographic locations. CDNs help improve website performance by reducing latency and increasing loading speeds.

# Why is React known as React?

React is named for its reactive approach to building user interfaces. It efficiently updates and renders components in response to changing data, providing a more responsive and dynamic user experience.

# What is crossorigin in script tag?

The crossorigin attribute is used in the script tag when loading scripts from a different domain. It helps ensure that the browser handles cross-origin requests appropriately for security reasons.

# What is difference between React and ReactDOM

React is the core library for building user interfaces, including web and mobile applications. ReactDOM is a specific package within React that is used for web-specific rendering. ReactDOM provides the bridge between React's virtual DOM and the actual DOM.

# what is difference between react.development.js and react.production.js files via CDN?

react.development.js is intended for development purposes and includes extra warnings and debugging information. react.production.js is a minimized version suitable for production, with these extra warnings removed and optimizations applied.

# What is async and defer?

Both async and defer are attributes used with the <script> tag.

async: The script is executed asynchronously, and it doesn't block the rendering of the page. It is usually used for non-blocking scripts.
defer: The script is executed after the HTML is parsed, but before the DOMContentLoaded event. It ensures scripts are executed in order and are deferred until the document is parsed.
