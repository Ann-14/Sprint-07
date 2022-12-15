
import { Link, Route, Routes } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Main } from "./Pages/Main";


function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/main'>Main</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />

      </Routes>
    </>

  );
}
export default App;
