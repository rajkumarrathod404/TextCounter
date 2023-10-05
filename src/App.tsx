import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [msg, setmsg] = useState("hi");
  let len = msg.split(" ").join("").length;
  let words =msg.split(" ").length;
  console.log(len);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div>
          
          <input
            type="text"
            value={msg}
            onChange={(e) => setmsg(e.target.value)}
            style={{ height: "250px", width: "800px" }}
          />
        </div>
        <div>
          <div style={{
            display:"flex",
            
            gap:"10px"
          }}>

        <button > count : {len} </button>
          <button > words : {words}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
