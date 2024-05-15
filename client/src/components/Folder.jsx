import React, { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput,setShowInput] = useState({
    visible:false,
    isFolder:null
  })
  const handleNewFolder = (e,isFolder)=>{
    e.stopPropagation();
    setExpand(true)
    setShowInput({
      visible:true,
      isFolder
    })
  }
  return (
    <>
      {explorer.isFolder ? (
        <div style={{ marginTop: 5 }}>
          <div
            className="folder"
            style={{ cursor: "pointer", userSelect: "none" }}
            onClick={() => setExpand(!expand)}
          >
            <span>📁{explorer.name}</span>
            <div>
              <button onClick={(e)=>handleNewFolder(e, true)}>Folder +</button>
              <button onClick={(e)=>handleNewFolder(e, false)}>File +</button>
            </div>
          </div>
          <div style={{ display: expand ? "block" : "none",paddingLeft:25 }}>
            {
              showInput.visible && <div className="inputContainer">
                <span>{showInput.isFolder?'📁':'📄'}</span>
                <input type="text" className="inputContainer" autoFocus onBlur={()=>{
                  setShowInput({...showInput,visible:false})
                }}/>
              </div>
            }
            {explorer.items.map((exp, i) => {
              return <Folder key={i} explorer={exp}/>;
            })}
          </div>
        </div>
      ) : (
        <div className="file">📄{explorer.name}</div>
      )}
    </>
  );
}

export default Folder;
