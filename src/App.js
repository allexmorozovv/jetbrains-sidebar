import React, { useEffect, useState } from "react";
import { fetchData } from "./fetchData";
import Sidebar from "./components/Sidebar";
import Loading from "./components/Loading";
// import axios from "axios";

import data from "./data.json";



function App() { 

  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState(null);

    //  useEffect(()=> {
    //   fetchData().then(data => {
    //     // console.log(data)
    //     setData(data)
    //     setLoading(false)
    //   })
    // }, [])
      
  
  return (
    <div className="main">
      {/* <div className="header">
        header
      </div> */}
      
      <div className="sidebar">
       {loading ? <Loading/> : <Sidebar data={data}/>} 
        
      </div>
      <div className="content">
          content
      </div>
    </div>
  );




    


  

}

export default App;
