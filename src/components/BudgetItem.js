
import "../styles/styles.css";
export const BudgetItem = ({budgetItem, index}) => {
  return (
    <div className='flex flex-col md:flex-row '>
              
            <div className="flex flex-col md:flex-row border gap-4 mx-8 ">


              <div className=''>{budgetItem.budgetName}</div>
              <div>{budgetItem.clientName}</div>
              <div>{budgetItem.budgetDate}</div>
              <div>Web {budgetItem.web ? "✔" : "❌"}</div>
              <div>{budgetItem.web ? `languages: ${budgetItem.languages}` : ""}</div>
              <div>{budgetItem.web ? `pages: ${budgetItem.pages}` : ""}</div>
              <div>Seo{budgetItem.seo ? "✔" : "❌"}</div>
              <div>Google Ads{budgetItem.ads ? "✔" : "❌"}</div>
              <div>{budgetItem.totalPrice} € </div>
              </div>
            </div>
            
  )
}
