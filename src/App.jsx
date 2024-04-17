import List from "./components/List.jsx";
import Navbar from "./components/Navbar.jsx";
// import Card from "./components/Card.jsx";
import "./App.css"

function App() {



  return (
    <>
      <Navbar />
      <h1>People</h1>
      <section className="all-cards">
        {/* <Card /> */}
        <List />
      </section>

    </>
  )
}

export default App
