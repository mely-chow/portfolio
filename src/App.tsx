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
      <div className="fixed -z-10 size-72 rounded-full top-32 left-16 bg-blue-500 blur-3xl opacity-25 pointer-events-none" />
      <div className="fixed -z-10 size-64 rounded-full bottom-36 right-12 bg-amber-400 blur-3xl opacity-20 pointer-events-none" />
      <div className="fixed -z-10 size-56 rounded-full top-1/2 right-1/4 bg-orange-400/80 blur-3xl opacity-15 pointer-events-none" />
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Contacts />
    </>
  );
}

export default App;
