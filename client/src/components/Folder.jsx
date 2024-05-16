import React, { useState } from "react";

function Folder({ handleInsertNode, explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };
  const onAddNewFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };
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
              <button onClick={(e) => handleNewFolder(e, true)}>
                Folder +
              </button>
              <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            </div>
          </div>
          <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
            {showInput.visible && (
              <div className="inputContainer">
                <span>{showInput.isFolder ? "📁" : "📄"}</span>
                <input
                  type="text"
                  className="inputContainer"
                  autoFocus
                  onKeyDown={(e) => {
                    onAddNewFolder(e);
                  }}
                  onBlur={() => {
                    setShowInput({ ...showInput, visible: false });
                  }}
                />
              </div>
            )}
            {explorer.items.map((exp, i) => {
              return <Folder handleInsertNode={handleInsertNode} key={i} explorer={exp} />;
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
