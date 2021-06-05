import "./styles.css";
import Header from "./Components/header"
import Footer from "./Components/footer"
import Note from "./Components/note"

export default function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}
