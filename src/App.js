import { useState } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";

function App() {
  const [showPost, setShowPost] = useState(false);
  function showPostFunc(){
    setShowPost(!showPost);
  }
  return (
    <>
      <Header showPostFunc={showPostFunc}/>
      <MainBody showPost={showPost}/>
    </>
  );
}


export default App;
