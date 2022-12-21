
import "../styles/styles.css";
export const BudgetItem = ({budgetItem, index}) => {
  return (
    <div className='card-body'>
              <div className='card-wrapper'>
              {/* <div>{index + 1}</div> */}
              <div className='card-title'>{budgetItem.budgetName}</div>
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
