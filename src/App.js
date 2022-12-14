import { useState, useEffect } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { CheckBox } from "./components/CheckBox";
import { Navbar } from "./components/Navbar";
import { Panel } from "./components/Panel";
import { Welcome } from "./components/Welcome";
import { ButtonSubmit, WrapperBody } from "./styles/PanelStyled";
import "./styles/styles.css";


let webPrice = 0;
let seoPrice = 0;
let adsPrice = 0;
let currentBudget;

function App() {
  const [checkWeb, setCheckWeb] = useState(false);
  const [checkSeo, setCheckSeo] = useState(false);
  const [checkAds, setCheckAds] = useState(false);
  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [budgetData, setBudgetData] = useState([]);

  const webCheckHandler = (e) => {
    setCheckWeb(!checkWeb);
    webPrice = +e.target.value;
  };
  const seoCheckHandler = (e) => {
    setCheckSeo(!checkSeo);
    seoPrice = +e.target.value;
  };
  const adsCheckHandler = (e) => {
    setCheckAds(!checkAds);
    adsPrice = +e.target.value;
  };

  if (checkWeb === false) {
    webPrice = 0;
  }
  if (checkSeo === false) {
    seoPrice = 0;
  }
  if (checkAds === false) {
    adsPrice = 0;
  }

  //Ex 4 (LOCAL STORAGE)

  useEffect(() => {
    //we need to check if there's data storaged in localStorage
    if (budgetData.length !== 0) {
      localStorage.setItem("budgetLocalStorage", JSON.stringify(budgetData));
    }
  }, [budgetData]);

  useEffect(() => {
    currentBudget = JSON.parse(localStorage.getItem("budgetLocalStorage"));
    if (currentBudget) {
      loadData(currentBudget);
    }
  }, []);

  const loadData = (currentBudget) => {
    setCheckWeb(currentBudget[0].checkWeb);
    setCheckSeo(currentBudget[0].checkSeo);
    setCheckAds(currentBudget[0].checkAds);
    setPages(currentBudget[0].pages);
    setLanguages(currentBudget[0].languages);
    setTotalPrice(currentBudget[0].totalPrice);
  };

  const submitData = () => {
    alert("Budget Saved ✔");
    setBudgetData([
      { checkWeb, checkAds, checkSeo, pages, languages, totalPrice },
    ]);
  };

  //calculo total presupuesto
  useEffect(() => {
    setTotalPrice(
      (checkAds ? 200 : 0) +
        (checkSeo ? 300 : 0) +
        (checkWeb ? 500 + pages * languages * 30 : 0)
    );
  }, [totalPrice, checkAds, checkSeo, checkWeb, languages, pages]);
//Ex 5 Welcome Message
const [welcomeMessage, setWelcomeMessage] = useState(true);

const changeWelcomeState = (dataFromChild) =>{
  setWelcomeMessage(dataFromChild)
}

if (welcomeMessage === true) {
  return (
    <>
    
      <Welcome handleStart={changeWelcomeState}></Welcome>
    </>
  );
} else {


  return (
    <>
    <h1>Home</h1>
   <Navbar welcomePage={Welcome} app={App} Link={Link}/>
    <hr />

    <Routes>
<Route path="app" element={<App />} />
<Route path="welcome" element={<Welcome />} />

<Route path="/*" element={<Navigate to='/app' />} />

    </Routes>

      <WrapperBody>
        {/* {!!savedData && <Storage />} */}
        <h2>Escoge los productos que desees adquirir: </h2>
        <hr />
        <div>
          <CheckBox
            label={"Página Web (500€)"}
            value={500}
            name="Web"
            id="checkbox1"
            checked={checkWeb}
            onChange={(e) => webCheckHandler(e)}
          />
        </div>
        {checkWeb && (
          <>
            <Panel
              setLanguages={setLanguages}
              setPages={setPages}
              pages={pages}
              languages={languages}
            ></Panel>
          </>
        )}
        <div className="flex items-center pl-3">
          <CheckBox
            label={"Consultoría Seo (300€)"}
            value={300}
            name="Seo"
            id="checkbox2"
            checked={checkSeo}
            onChange={(e) => seoCheckHandler(e)}
          />
        </div>
        <div>
          <CheckBox
            label={"Campaña Google Ads(200€)"}
            value={200}
            name="Ads"
            id="checkbox3"
            checked={checkAds}
            onChange={(e) => adsCheckHandler(e)}
          />
        </div>

        <div>Total: {totalPrice} €</div>

        <ButtonSubmit onClick={submitData}>Submit</ButtonSubmit>
      
      </WrapperBody>
    </>
  );
}
}
export default App;
