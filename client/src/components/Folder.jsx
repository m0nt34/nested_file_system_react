import React, { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
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
          </div>
          <div style={{ display: expand ? "block" : "none",paddingLeft:25 }}>
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
