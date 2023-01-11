import React from 'react'
import "../styles/styles.css";
import { BudgetItem } from './BudgetItem';

export const BudgetsList = ({budgetsList}) => {
  return (
    <div className=''>
    {
          budgetsList.map((budgetItem, index)=>(
            <BudgetItem key={index} budgetItem={budgetItem} index={index} ></BudgetItem>
          ))
        }
        
      
   </div>
  )
}
  
