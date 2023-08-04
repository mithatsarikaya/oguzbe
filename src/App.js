import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProfanitiesList from "./components/ProfanitiesList";

function App() {
  return (
    <section className="section">
      <NavBar />
      <ProfanitiesList />
      <Footer />
    </section>
  );
}

export default App;
