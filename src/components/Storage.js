// import { useState, useEffect } from "react";


// export const Storage = (props) => {

//   // console.log(props.budgetData[0].checkWeb)

//   const [budget, setBudget] = useState(0);

//   const getData = () => {
    
//     return JSON.parse(localStorage.getItem("budgetLocalStorage"));
//   };

//   useEffect(() => {
//     setBudget(getData());

//   }, []);

//   return (
//     <>
//       <h3>Local Storage</h3>
//       <div>El precio del budget es: {budget}</div>
//     </>
//   )
// };
