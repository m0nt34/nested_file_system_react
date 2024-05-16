import React, { useState } from "react";
import Folder from "./components/Folder";
import Data from "./Data/FolderData";
import useTraverseTree from "./hooks/useTraverseTree";
function App() {
  const [fData, setfData] = useState(Data);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(fData, folderId, item, isFolder);
    setfData(finalTree);
  };
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={fData} />
    </div>
  );
}

export default App;
