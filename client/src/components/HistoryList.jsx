import React, { useContext } from 'react'
import { HistoryContext } from '../context/HistoryContext';

const HistoryList = () => {
 const { history } = useContext(HistoryContext);

 return (
    <div>
        <p className="text-gray-700 text-lg font-semibold py-2 text-center">Recent Search</p>
        <ul >
            {
                history?.map((history, index) => (
                    <li
                        key={history+index}
                        className={`w-full py-4 ${ (index+1) === history.length ? null : "border-b-2 border-neutral-100 border-opacity-100  dark:border-opacity-50" }`}>
                        { history }
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default HistoryList;
