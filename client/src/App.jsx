import React, { useState } from "react"
import Folder from "./components/Folder"
import Data from "./Data/FolderData"
function App() {
  const [fData,setfData] = useState(Data)
  

  return (
    <div className="App">
        <Folder explorer={fData}/>
    </div>
  )
}

export default App
