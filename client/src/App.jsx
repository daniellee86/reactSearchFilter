import './App.css';
import { useState } from 'react';
// import axios from "axios"
import { Users } from "./users";
import Table from "./Table"


  function App() {
    const [query, setQuery] = useState("");

    const keys = ["first_name", "last_name", "email"]

    const search = (data) => {
      return data.filter((item) => 
       keys.some((key) => item[key].toLowerCase().includes(query))
  
      // INEFFICIENT WAY, USING SOME() METHOD IS BETTER
      // item.first_name.toLowerCase().includes(query) ||
      // item.last_name.toLowerCase().includes(query) ||
      // item.email.toLowerCase().includes(query)
      );
    };
  
    return (
      <div className="App">
      <input type="text" placeholder='Search...' 
      className="search" 
      onChange={ e => setQuery(e.target.value)}
      />
      <Table data={search(Users)}/>
     </div>
    );
  }


export default App;


// BASIC SEARCH FUNCTIONALITY; 1 PARAMETER

// function App() {
//   const [query, setQuery] = useState("");
//   console.log(query)


//   return (
//     <div className="App">
//     <input type="text" placeholder='Search...' 
//     className="search" 
//     onChange={ e => setQuery(e.target.value) 
//     }/>
//     <ul className="list">

//     {/* Users array is filtered to ensure firstname includes our query state 
//     The map function is executed on the filtered array.  */}

//      {Users.filter((user) => 
//      user.first_name.toLowerCase().includes(query)
//      ).map((user) => (
//         <li className="listItem" key={user.id}>{user.first_name}</li>
//      ))}

//     </ul>
//    </div>
//   );
// }



  

  //Searches multiple params using API and url query to fetch filtered data from database (localhost:5000)
  //results limited to 10 in index.js > API.  
  // function App() {
  //   const [query, setQuery] = useState("");
  //   const [data, setData] = useState([])
    
  //   useEffect(()=>{
  //     const fetchUsers = async () => {
  //       const res = await axios.get(`http://localhost:5000?q=${query}`)
  //       setData(res.data)
  //     };
  //     if (query.length === 0 || query.length > 2) fetchUsers();
  //   }, [query])
  
  
  //   return (
  //     <div className="App">
  //     <input type="text" placeholder='Search...' 
  //     className="search" 
  //     onChange={ e => setQuery(e.target.value)}
  //     />
  //     <Table data={data}/>
  //    </div>
  //   );
  // }