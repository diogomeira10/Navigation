import Table from './Table';
import {GoArrowSmallUp, GoArrowSmallDown} from 'react-icons/go'
import useSort from '../hooks/use-sort'; //sorting hook

function SortableTable (props) { //taking the entire props object... no need for curly braces {}. this is all the props reference 

    
    const {config, data} = props //pulling out config and data from props

    const {sortOrder, 
        sortBy, 
        sortedData, 
        setSortColumn
    } = useSort(data, config); //destrucurize all the elements we need.

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column; //so if this column is not suposed to be sortable, just return it ;
        }

        return {
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
                    <div className="flex items-center">
                {getIcons(column.label, sortBy, sortOrder)}
                {column.label}
                    </div>
                </th>
                ),
        }
    })


    //Only sort data if sortOrder && sortBy are not null
    // Make a copy of the 'data' prop 
    // We should never modify directly an array if that array is part of the state system or prop system
    //So we are going to create a new array and we're going to copy all the items from the data prop array into our brand new array, than we can safely sort our new array because we're not modifying a prop.
    // Find the correct sortValue funciton and use it for sorting

    return <Table {...props} data={sortedData} config={updatedConfig}/> //passing all props through table... We are overwriting the previous config object present in {...props} by adding in config right there after dot dot props.
}


function getIcons (label, sortBy, sortOrder) {

    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp/>
            <GoArrowSmallDown/>
        </div> ;
    }

    if (sortOrder === null) {
        return <div>
        <GoArrowSmallUp/>
        <GoArrowSmallDown/>
    </div> 
    } else if (sortOrder === 'asc') {
        return <div>
            <GoArrowSmallUp/>
        </div>
    } else if (sortOrder === 'desc') {
        return <div>
             <GoArrowSmallDown/>
        </div>
    }
}

export default SortableTable;


/* But if it does have a stored value property, then I want to return a brand new object that has all

the same properties, all the same keys and values as this column object, but it's also going to have

a header function, a header function to customize the header that gets displayed. */