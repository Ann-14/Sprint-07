import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { CheckBox } from "./components/CheckBox";
import { Storage } from "./components/Storage";
import { Panel } from "./components/Panel";

import { ButtonSubmit, WrapperBody } from "./styles/PanelStyled";
import './styles/styles.css'

let webPrice = 0;
let seoPrice = 0;
let adsPrice = 0;

function App() {
  const [checkWeb, setCheckWeb] = useState(false);
  const [checkSeo, setCheckSeo] = useState(false);
  const [checkAds, setCheckAds] = useState(false);
  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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
  const totalWeb = webPrice + pages * languages * 30;

  //Ex 4 (LOCAL STORAGE)
  const [savedData, setSavedData] = useState(false);


  const saveData = () => {
    localStorage.setItem("budgetLocalStorage", totalPrice);
    alert("has guardado el $ del presupuesto");
    setSavedData(true);
  };

  useEffect(() => {
    setTotalPrice(
      (checkAds ? adsPrice : 0) +
      (checkSeo ? seoPrice : 0) +
      (checkWeb ? totalWeb : 0)
    );
    console.log("total from use effect", totalPrice)

  }, [totalWeb, totalPrice, checkAds, checkSeo, checkWeb]);

  return (
    <>
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

        <ButtonSubmit  onClick={saveData}>
          Submit
        </ButtonSubmit>
        <Storage />
      </WrapperBody>
    </>
  );
}

export default App;
