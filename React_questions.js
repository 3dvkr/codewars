// Questions

// What is React.js
// React is an open source library used for front-end development.

// Why would you use React.js
// React is good for reducing redundancy, because you can define a component once, and re-use it with minor differences using props.

// What are components
// Components are packets of HTML written as JSX. Once declared, we can use their name and write them into our code using a self-closing HTML tag syntax. React will render them into the DOM as distinct elements.

// What is JSX *
// JSX is code that looks similar to HTML, but is actually compiled into HTML using JavaScript.

// What are props
// A component's props are like an HTML element's attributes syntactically. Conceptually, a component's props are an object-type, and we can provide instructions on how the component is rendered. For example, if there is a property in props for the text content, we can pass in unique text content for each time we use that component. If there is a property for color, we can provide unique CSS styling. Props is an immutable object, meaning whatever is passed into the component via props cannot be changed.

// What is state
// A component's state is information that, unlike props, can be changed. This allows us to make those changes in response to user interaction.

// What are the differences btw/ functional and class based components
// functional components are declared using the function keyword, and cannot have state without hooks. Class-based components are declared using the class keyword, and extend the React.Component class.

// Give an example of a functional and class based component
function MyComponent() {
  return (
    <div>
      <p>This is my functional component.</p>
    </div>
  );
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.property = props.property;
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>This is my class-based component.</p>
      </div>
    );
  }
}

// What are React Hooks
// Hooks are functions that allow functional components to have state and lifecycle methods. They don't work in class-based components.

// How does useState work
// useState is a hook. By calling it, we can declare a state variable. This lets you preserve any variables you declare inside the functional component.

// Give an example of useState ********* re-read/review
function App() {
  //setting state within a functional component making use of the useState() hook. todos is the prop of state and we use setTodos to update it. the array passed into useState here will be the default state.
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);
  const addTodo = (todo) => {
    const id = Math.ceil(Math.random() * 100000);
    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <Header title="Todo List" />
      {/* the onAdd prop is defined in the AddTodo component*/}
      <AddTodo onAdd={addTodo} />
      {/* passing the todos state to the List prop of todos (List will map through each element and render it)*/}
      <List todos={todos} />
    </div>
  );
}
