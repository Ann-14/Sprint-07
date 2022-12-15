import { useState, useEffect } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { CheckBox } from "../components/CheckBox";
import { WebConfiguration } from "../components/WebConfiguration";
import { ButtonSubmit, WrapperBody } from "../styles/StyledComponents";
import "../styles/styles.css";


let currentBudget;

export const Main = () => {
    const [checkWeb, setCheckWeb] = useState(false);
    const [checkSeo, setCheckSeo] = useState(false);
    const [checkAds, setCheckAds] = useState(false);
    const [pages, setPages] = useState(0);
    const [languages, setLanguages] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [budgetData, setBudgetData] = useState([]);
  
    const webCheckHandler = (e) => {
      setCheckWeb(!checkWeb);
      
    };
    const seoCheckHandler = (e) => {
      setCheckSeo(!checkSeo);
      
    };
    const adsCheckHandler = (e) => {
      setCheckAds(!checkAds);
      
    };
  
    if (checkWeb === false) {
      
    }
    if (checkSeo === false) {
     
    }
    if (checkAds === false) {
      
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
            <WebConfiguration
              setLanguages={setLanguages}
              setPages={setPages}
              pages={pages}
              languages={languages}
            ></WebConfiguration>
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

