Your summary is quite accurate! Let me provide some minor refinements and additional details:

## Order of Lifecycle Method Calls in Class Based Components:

1. **Mounting Phase:**
   - `constructor`: Initializes the component's state and binds methods.
   - `render`: Renders the component's UI.
   - `componentDidMount`: Called after the component has been rendered to the DOM. Used for data fetching and setting up subscriptions.

2. **Updating Phase:**
   - `render`: Re-renders the component with updated state or props.
   - `componentDidUpdate`: Called after the component has been updated in the DOM.

3. **Unmounting Phase:**
   - `componentWillUnmount`: Called just before the component is removed from the DOM. Used for cleanup tasks.

4. **Error Handling Phase (React 16 and later):**
   - `static getDerivedStateFromError` and `componentDidCatch`: Used for handling errors in components.

## Why do we use `componentDidMount`?

- `componentDidMount` is used for tasks that need to be performed after the component has been rendered to the DOM. Common use cases include data fetching from APIs, setting up subscriptions, and interacting with the DOM.

## Why do we use `componentWillUnmount`?

- `componentWillUnmount` is used for cleanup tasks before a component is removed from the DOM. It's particularly useful for stopping operations that were initiated during the component's lifecycle. An example might involve clearing intervals or canceling network requests.

  ```jsx
  class MyComponent extends React.Component {
    componentDidMount() {
      this.intervalId = setInterval(() => {
        // Some periodic task
      }, 1000);
    }

    componentWillUnmount() {
      // Cleanup tasks before the component is removed
      clearInterval(this.intervalId);
    }

    render() {
      // Component's rendering logic
    }
  }
  ```

## Why do we use `super(props)` in `constructor`?

- `super(props)` is used to call the constructor of the parent class (`React.Component`) and pass the `props` to it. It ensures that the component inherits the functionality of the base class and correctly sets up its own internal state.

## Why can't we have the callback function of `useEffect` async?

- `useEffect` expects either a synchronous function or a cleanup function that returns synchronously. It doesn't directly support promises or async/await syntax. However, you can use an asynchronous function inside `useEffect` by defining an async function inside and invoking it immediately:

  ```jsx
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await someAsyncFunction();
        // Handle the result
      } catch (error) {
        // Handle errors
      }
    };

    fetchData(); // Immediately invoke the async function
  }, [dependency]);
  ```

  This pattern allows you to work with asynchronous code within the `useEffect`.