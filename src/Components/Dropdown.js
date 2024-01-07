import {useState, useEffect, useRef} from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from './Panel';


function Dropdown ({options, value, onChange}) {

    const [isOpen,setIsOpen] = useState(false);
    const divEl = useRef(); // Getting a reference to a DOM element that it creates 

    useEffect(() => { 
        const handler = (event) => { //This is a click event handler that we are going to run whenever the user clicks anywhere in the document
            if (!divEl.current) { // In some cases the ref is going to be null, in that case, if we dont have any reference to any div, we just return early from the handler.
                return;
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            } 
        }
        document.addEventListener('click', handler, true); //Here we specifie where we want to run our event handler

        return () => {
            document.removeEventListener('click', handler); //This is a cleanup function. This is how we turn off an event handler. we need to make sure that when our dropdown component is about to be removed from the screen, we don't want to listen for this click event anymore because we don't need to worry about the dropdown.
        }
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen) //or , the functional way, wich is the most correct way: setIsOpen((currentIsOpen) => !currentIsOpen)
    }

    const handleOptionclick = (option) => {
        setIsOpen(false);
        onChange(option);

    };

    const renderedOptions = options.map((option) => {
        return <div className='hover:bg-sky-100 rounded cursor-pointer p-1 ' onClick={() => handleOptionclick(option)} key={option.value}>
            {option.label}
            </div>
    })

    // We could write the following code, but it turns out we can write this all out much more concisely if we use a fancy little bit of JavaScript syntax.
    /* let content = 'Select...';
    if (selection) {
        content = selection.label;
    } */


    //We can use a fancy little bit of syntax to check to see if a variable is null or undefined, and if it is, then we'll get back some kind of default value instead.So here it is: {selection?.label || 'Select...'} 

    // The  Ref prop is extremely special.

/* If we pass in some variable that came from commonly use ref React is going to take that reference right 
there and it's going to give us a pointer or essentially allow us to refer to the actual HTML element
that is created in the browser by that JSX tag. */

    return ( 
        <div ref={divEl} className='w-48 relative'> 
            <Panel className='flex justify-between items-center cursor-pointer' onClick={handleClick}> 
                {value?.label || 'Select...'} 
                <span className='text-lg'>{isOpen ? <GoChevronLeft /> : <GoChevronDown/> }</span>
                </Panel>
            {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
        </div>
    
    )

};

export default Dropdown;