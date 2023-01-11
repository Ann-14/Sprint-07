import { useState, useEffect } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BudgetsList } from "../components/BudgetsList";
import { CheckBox } from "../components/CheckBox";
import { WebConfiguration } from "../components/WebConfiguration";
import { ButtonSubmit, WrapperBody } from "../styles/StyledComponents";
import "../styles/styles.css";

import fotoWeb from '../img/pexels-picjumbocom-196644.jpg'
import fotoSeo from '../img/pexels-george-morina-4960464.jpg'
import fotoAds from '../img/pexels-firmbeecom-6963740.jpg'

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
  //Order by Name
  const handleSortName = () => {
    setBudgetsList(
      budgetsList.sort(function (a, b) {
        if (a.budgetName.toLowerCase() < b.budgetName.toLowerCase()) return -1
        if (a.budgetName.toLowerCase() > b.budgetName.toLowerCase()) return 1
        return 0
      })
    )
    setBudgetsList([...budgetsList])

  }
  //Order by Date
  const handleSortDate = () => {
    setBudgetsList(
      budgetsList.sort(function (a, b) {
        if (a.budgetDate < b.budgetDate) return -1
        if (a.budgetDate > b.budgetDate) return 1
        return 0
      })
    )
    setBudgetsList([...budgetsList])
    return budgetsList
  }
  //Searching a budget by using an input text
  const handleChange = (event) => {
    const foundBudgets = budgetsList.filter(elem =>
      elem.budgetName === event.target.value)
    foundBudgets.length > 0 ? setBudgetsList(foundBudgets) : setBudgetsList(budgets)
  }

  return (
    <>
      <div className="flex flex-col text-pink-100 text-center">
        {/* Grid for checkbox */}
        <div className="  flex flex-col text-center p-2">
          <h1>Our services</h1>
        </div>
        <div className="flex  flex-col  p-4  md:flex-row md:gap-4 justify-center">

          <div className="flex text-center flex-col   ">
            <img src={fotoWeb} alt='web'className="rounded md:w-80" />
            <CheckBox
              label={"Web Page $500"}
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

          <div className="flex text-center flex-col ">
            <img src={fotoSeo} alt='Seo services' className="rounded  md:w-80" />
            <CheckBox
              label={"Seo Consulting $300"}
              value={300}
              name="seo"
              id="seo"
              checked={checkSeo}
              onChange={(e) => setCheckSeo(!checkSeo)}
            />
          </div>


          <div className="flex text-center flex-col">
            <img src={fotoAds} alt='google computer'  className="rounded  md:w-80"/>
            <CheckBox
              label={"Google Ads Campaign $200"}
              value={200}
              name="ads"
              id="ads"
              checked={checkAds}
              onChange={(e) => setCheckAds(!checkAds)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-pink-100 text-center">
        <h5>Total Price: {totalPrice}</h5>
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
                <div>
              <button onClick={submitData} className=" mt-3 justify-center inline-block rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-center font-medium text-white  hover:bg-indigo-700 ">Submit</button>  
              </div>  
              </div>
      </div>
      <div className="flex flex-col text-pink-100 text-center">
    <div className="mt-14">
    <label htmlFor="findBudgetName" className="d-block mt-4">Find your budget:</label>
            <input 
            name="findBudgetName"
            type='text'
              onChange={handleChange}
            ></input>
      <div className="flex gap-2 justify-center mt-4 mb-4">
      <button onClick={handleReset} className='flex rounded-md border border-transparent bg-indigo-600 py-1 px-4 text-center text-white  hover:bg-indigo-700'>Reset</button>
            <button onClick={handleSortName} className='flex rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-center text-white  hover:bg-indigo-700'>Order by name</button>
            <button onClick={handleSortDate} className='flex rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-center text-white  hover:bg-indigo-700'>Order by date</button>

            </div>
           
            </div>
            <BudgetsList budgetsList={budgetsList}

            />
      </div>
    </>
  );
}