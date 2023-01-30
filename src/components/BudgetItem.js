
import "../styles/styles.css";
export const BudgetItem = ({ budgetItem, index }) => {
  return (
    <>
      <section >
        <div className="  flex flex-col mx-14  ">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 ">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
              <div className="overflow-hidden">
                <table className="min-w-full   ">
                  <thead className="dark:bg-gray-700 dark:border-gray-600 dark:text-pink-100 border ">
                    <tr >
                      <th scope="col" className="text-sm font-medium dark:text-pink-100 px-6 py-4 text-left ">
                        #
                      </th>
                      <th scope="col" className="text-sm font-medium dark:text-pink-100 px-6 py-4 text-left ">
                        Client name
                      </th>
                      <th scope="col" className="text-sm font-medium dark:text-pink-100 px-6 py-4 text-left">
                        Budget name
                      </th>
                      <th scope="col" className="text-sm font-medium dark:text-pink-100 px-6 py-4 text-left">
                        Date
                      </th>
                      <th scope="col" className="text-sm font-medium dark:text-pink-100  px-6 py-4 text-left">
                        Web
                      </th>
                      <th scope="col" className="text-sm font-medium dark:text-pink-100  px-6 py-4 text-left">
                        Web languages
                      </th>
                      <th scope="col" className="text-sm font-medium dark:text-pink-100  px-6 py-4 text-left">
                        Web languages
                      </th>
                      <th scope="col" className="text-sm font-medium dark:text-pink-100  px-6 py-4 text-left">
                        SEO
                      </th>
                      <th scope="col" className="text-sm font-medium dark:text-pink-100  px-6 py-4 text-left">
                        Google Ads
                      </th>
                      <th scope="col" className="text-sm font-medium dark:text-pink-100  px-6 py-4 text-left">
                        Total Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100  ">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">{index}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {budgetItem.budgetName}
                      </td>
                      <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                        {budgetItem.clientName}
                      </td>
                      <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                        {budgetItem.budgetDate}
                      </td>
                      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                        {budgetItem.web ? "✔" : "❌"}
                      </td>
                      <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                        {budgetItem.web ? `languages: ${budgetItem.languages}` : "-"}
                      </td>
                      <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                        {budgetItem.web ? `pages: ${budgetItem.pages}` : "-"}
                      </td>
                      <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                        {budgetItem.seo ? "✔" : "❌"}
                      </td>
                      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                        {budgetItem.ads ? "✔" : "❌"}
                      </td>
                      <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                        {budgetItem.totalPrice} €
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>






    </>
  )
}
