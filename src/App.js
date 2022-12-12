import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CheckBox } from "./components/CheckBox";
import { Storage } from "./components/Storage";
import { Panel } from "./components/Panel";

let webPrice = 0;
let seoPrice = 0;
let adsPrice = 0;

function App() {
  const [checkWeb, setCheckWeb] = useState(false);
  const [checkSeo, setCheckSeo] = useState(false);
  const [checkAds, setCheckAds] = useState(false);
  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);
  const [totalBudget, setTotalBudget] = useState(0);

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
  const [savedData, setSavedData] = useState(false);
  const totalWeb = webPrice + pages * languages * 30;

  const saveData = () => {
    localStorage.setItem("webLocalStorage", totalWeb);
    alert("has guardado el $ del web");
    setSavedData(true);
  };

  useEffect(() => {
    setTotalBudget(
      (checkAds ? adsPrice : 0) +
        (checkSeo ? seoPrice : 0) +
        (checkWeb ? totalWeb : 0)
    );
    console.log("total from use effect", totalBudget);
  }, [totalWeb, totalBudget, checkAds, checkSeo, checkWeb]);

  return (
    <>
      {!!savedData && <Storage />}

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

      <div>{totalBudget}</div>

      <button className="btn btn-primary mt-2" onClick={saveData}>
        Submit
      </button>
    </>
  );
}

export default App;
