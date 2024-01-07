import { useState } from 'react';

function useSort (data, config) {

    const [sortOrder,setSortOrder] = useState(null); //This piece of state is keep tracking of sort order
    const [sortBy,setSortBy] = useState(null) //This piece of state is keep tracking of wich column we are sorting by

    const setSortColumn = (label) => {
        if (sortBy && label !== sortBy) {
          setSortOrder('asc');
          setSortBy(label);
          return;
        }
    
        if (sortOrder === null) {
          setSortOrder('asc');
          setSortBy(label);
        } else if (sortOrder === 'asc') {
          setSortOrder('desc');
          setSortBy(label);
        } else if (sortOrder === 'desc') {
          setSortOrder(null);
          setSortBy(null);
        }
      };

      let sortedData = data
      if (sortOrder && sortBy) {
         const {sortValue} = config.find(column => column.label === sortBy ); // Right here we found the sort value function and that is the function doing the sorting operation
         sortedData = [...data].sort((a,b) =>{ //So that's going to make a new array and copy all the elements from data into it. So now we can freely modify this array as much as we want, and we are not modifying a prop.
          const valueA = sortValue(a);
          const valueB = sortValue(b);
  
          const reverseOrder = sortOrder === 'asc' ? 1 : -1; 
  
          if(typeof valueA === 'string') {
              return valueA.localeCompare(valueB) * reverseOrder
          } else {
              return (valueA - valueB) * reverseOrder
          }
  
  
         } ) 
      }

      return {
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn

      };

}

export default useSort;