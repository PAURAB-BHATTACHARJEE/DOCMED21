import React from 'react';
import { Home} from "./pages";

const App = ()=>(
  <Home />
)
// import React, { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/data') // replace with your server's address and route
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="App">
//       {data && <p>{data.message}</p>}
//     </div>
//   );
// }

export default App;