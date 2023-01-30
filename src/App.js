import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./Pages/Home";
import { Main } from "./Pages/Main";

function App() {
  return (
    <>
      <div className="min-h-screen ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
export default App;
