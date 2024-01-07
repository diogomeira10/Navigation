import Route from "./Components/Route";
import SideBar from "./Components/SideBar";
import AccordionPage from './Pages/AccordionPage';
import DropdownPage from './Pages/DropdownPage'
import ButtonPage from './Pages/ButtonPage';
import ModalPage from './Pages/ModalPage'
import TablePage from './Pages/TablePage'
import CounterPage from './Pages/CounterPage';

function App () {

 return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <SideBar />
        <div className="col-span-5">
            <Route path="/accordion">
                <AccordionPage/>
            </Route>
            <Route path='/'>
                <DropdownPage/>
            </Route>
            <Route path="/buttons">
                <ButtonPage/>
            </Route>
            <Route path="/modal">
                <ModalPage/>
            </Route>
            <Route path='/table'>
                <TablePage/>
            </Route>
            <Route path='/demo'>
                <CounterPage initialCount={10} />
            </Route>

        </div>
    </div>
    
 )
        

};

export default App;