import React, { useState, useEffect } from "react";

/**
 * 调试useState
 */
export default function App() {
  const [count, setCount] = useState(0);
  // const  [count2,setCount2] = useState(10)
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return (
    <div
      onClick={() => {
        setCount(count + 1);
        // setCount2(count2 + 1)
      }}
    >
      {count}
      {/* {count2} */}
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { count: 0 }
//   }
//   render() {
//     return (
//       <div
//         onClick={() => {
//           // this.setState((pre) => ({ count: ++pre.count }));
//           this.setState({count: ++this.state.count})
//         }}
//       >
//         {this.state.count}
//       </div>
//     );
//   }
// }

// export default App
