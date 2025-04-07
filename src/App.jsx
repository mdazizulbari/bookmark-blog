import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-9/12">
          <Blogs></Blogs>
        </div>
        <div className="right-container w-3/12">
          <h2>Reading Time: 0</h2>
          <h2>Bookmark Count: 0</h2>
        </div>
      </div>
    </>
  );
}

export default App;
