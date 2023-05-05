import React from 'react';
import Header from '../Header/Header';

const Blog = () => {
    return (
        <>
            <a href='blog.pdf' className='text-right'
                download='blog.pdf' >
                <button className='btn btn-primary'>Download PDF</button></a>
            <div className='my-20'>
                <div className='text-center'>
                    <h1 className='h3 font-bold'>Difference between uncontrolled and controlled components?</h1>
                    <article className='my-2'>
                    In the context of a software system, uncontrolled components refer to those components that run outside of the system's control, meaning that the system cannot dictate their behavior. In contrast, controlled components are those components that are under the direct control of the system and can be manipulated by it.

For example, consider a web application that relies on a third-party authentication service for user logins. The authentication service would be an uncontrolled component, as the web application cannot dictate its behavior or directly modify it. On the other hand, the database used by the web application to store user information would be a controlled component, as the web application can interact with it directly and dictate its behavior.

Uncontrolled components can introduce additional complexity and risk into a system, as their behavior cannot be guaranteed or directly controlled by the system. However, they can also provide valuable functionality that would be difficult or impractical to implement within the system itself. Controlled components, while offering more predictability and control, can also introduce additional maintenance and development overhead, as the system is responsible for their implementation and upkeep.
                    </article>
                </div>
                <div className='text-center my-5'>
                    <h1 className='h3 font-bold'>How to validate react props propTypes?</h1>
                    <article className='my-2'>
                        PropTypes.any : The prop can be of any data type. <br />
                        PropTypes.bool : The prop should be a Boolean. <br />
                        PropTypes.number : The prop should be a number. <br />
                        PropTypes.string : The prop should be a string. <br />
                        PropTypes.func : The prop should be a function. <br />
                    </article>
                </div>
                <div className='text-center my-5'>
                    <h1 className='h3 font-bold'>Difference between nodeJs and expressJs?</h1>
                    <article className='my-2'>
                    Node.js is a server-side JavaScript runtime environment that allows developers to run JavaScript code on the server-side. It provides an event-driven, non-blocking I/O model that makes it well-suited for building scalable and high-performance network applications.

Express.js, on the other hand, is a web application framework for Node.js. It provides a set of features and tools for building web applications, such as routing, middleware, templating, and error handling. It is built on top of Node.js and provides a simple and flexible API that allows developers to build web applications quickly and easily.

In summary, Node.js is a runtime environment that allows developers to run JavaScript on the server-side, while Express.js is a web application framework built on top of Node.js that provides a set of tools and features for building web applications. Developers can use both Node.js and Express.js together to build fast, scalable, and robust web applications.
                    </article>
                </div>
                <div className='text-center my-5'>
                    <h1 className='h3 font-bold'>What is custom hook and why will you create a custom hook?</h1>
                    <article className='my-2'>
                    In React, a custom hook is a JavaScript function that starts with the word "use" and follows the standard rules of hooks. Custom hooks allow you to extract reusable logic from a component and share it between multiple components. They are a powerful way to abstract complex logic and simplify the code of your React components.

There are several reasons why you might want to create a custom hook:
<br/>
1) Reusability: Custom hooks allow you to reuse logic across different components without repeating yourself. This can help you write cleaner and more maintainable code.
<br/>
2) Abstraction: Custom hooks allow you to abstract complex logic and provide a simple API that other components can use. This can help you write more expressive and understandable code.
<br/>
3) Encapsulation: Custom hooks allow you to encapsulate state and logic within a single hook. This can help you keep your code organized and prevent unintended side-effects.
<br/>
4) Testing: Custom hooks can make it easier to test your components by separating out the logic that you want to test into a standalone function.
<br/>
Overall, custom hooks are a powerful way to simplify your React components and make them more reusable and maintainable.
                    </article>
                </div>
            </div>
        </>
    );
};

export default Blog;