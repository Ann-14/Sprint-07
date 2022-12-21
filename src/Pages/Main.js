import { useState, useEffect } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BudgetsList } from "../components/BudgetsList";
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
  const [budgets, setBudgets] = useState([]);
  const [budgetName, setBudgetName] = useState("");
  const [clientName, setClientName] = useState("");

  //calculo total presupuesto
  useEffect(() => {
    setTotalPrice(
      (checkAds ? 200 : 0) +
      (checkSeo ? 300 : 0) +
      (checkWeb ? 500 + pages * languages * 30 : 0)
    );
  }, [totalPrice, checkAds, checkSeo, checkWeb, languages, pages]);
  //Ex 4 (LOCAL STORAGE)

  useEffect(() => {

    if (budgets.length !== 0) {
      localStorage.setItem("budgetLocalStorage", JSON.stringify(budgets));
    }
  }, [budgets]);

  useEffect(() => {
    currentBudget = JSON.parse(localStorage.getItem("budgetLocalStorage"));
    if (currentBudget) {
      setBudgets(currentBudget);
    }
  }, []);

  //Ex 7 Adding budgets

  const submitData = () => {
    let newBudget =
    {
      budgetName: budgetName,
      clientName: clientName,
      budgetDate: new Date().toLocaleDateString(),
      web: checkWeb,
      pages: pages,
      languages: languages,
      seo: checkSeo,
      ads: checkAds,
      totalPrice: totalPrice
    }

    //we add the new budget into the budgets array
    setBudgets([...budgets, newBudget])
    clearChecks()
  }
  const clearChecks = () => {

    setBudgetName("")
    setClientName("")
    setCheckWeb(false)
    setCheckSeo(false)
    setCheckAds(false)
    setPages(0)
    setLanguages(0)
    setTotalPrice(0)

  }

  //we need to copy the budgets array, otherwise we mutate the original one
  const [budgetsList, setBudgetsList] = useState([])

  useEffect(() => {
    setBudgetsList([...budgets]);
  }, [budgets])

  //Ex 8 Adding 3 buttons to control budgetsList
  const handleReset = () => {
    setBudgetsList([...budgets])
  }

  const handleSort = () => {
    setBudgetsList(
      budgetsList.sort(function (a, b) {
        if (a.budgetName < b.budgetName) { return -1 }
        if (a.budgetName > b.budgetName) { return 1 }
        return 0
      })
    )
    setBudgetsList([...budgetsList])
    return budgetsList
  }



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <WrapperBody>
              <h2>Escoge los productos que desees adquirir: </h2>
              <hr />
              <div>
                <CheckBox
                  label={"Página Web (500€)"}
                  value={500}
                  name="web"
                  id="web"
                  checked={checkWeb}
                  onChange={(e) => setCheckWeb(!checkWeb)}
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
                  name="seo"
                  id="seo"
                  checked={checkSeo}
                  onChange={(e) => setCheckSeo(!checkSeo)}
                />
              </div>
              <div>
                <CheckBox
                  label={"Campaña Google Ads(200€)"}
                  value={200}
                  name="ads"
                  id="ads"
                  checked={checkAds}
                  onChange={(e) => setCheckAds(!checkAds)}
                />
              </div>

              <div>Total: {totalPrice} €</div>

              <h3>Cliente</h3>
              <div >
                <label htmlFor="clientName" className="d-block">Nombre:</label>
                <input
                  placeholder="Nombre cliente"
                  type="text"
                  name="clientName"
                  value={clientName}
                  minLength="3"
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="budgetName" className="d-block">Nombre del presupuesto:</label>
                <input
                  placeholder="Nombre presupuesto"
                  type="text"
                  name="budgetName"
                  value={budgetName}
                  minLength="3"
                  onChange={(e) => setBudgetName(e.target.value)}
                />
              </div>

              <ButtonSubmit onClick={submitData}>Submit</ButtonSubmit>
            </WrapperBody>
          </div>
          <div className="col-7">
            <button className="me-5" onClick={handleReset}>Reset</button>
            <button onClick={handleSort}>Order</button>
            <BudgetsList budgetsList={budgetsList}

            />
          </div>
        </div>
      </div>
    </>
  );
}