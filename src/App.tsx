import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
// import About from "./pages/About";

function App() {
  return (
    <>
      <div className="fixed -z-10 size-60 rounded-full top-40 left-20 bg-orange-600 blur-2xl opacity-40 pointer-events-none" />
      <div className="fixed -z-10 size-60 rounded-full bottom-40 right-20 bg-amber-600 blur-2xl opacity-40 pointer-events-none" />
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
}

export default App;
