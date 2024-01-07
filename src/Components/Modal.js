import ReactDOM from 'react-dom';
import {useEffect} from 'react';

function Modal({ onClose, children, actionBar }) {

    useEffect(() => {
        document.body.classList.add('overflow-hidden') //Right here we are going to take a look at document body. I'm going to access the class list property and add a class of overflow dash hidden.

        return () => { // this is going to be the cleanup function, used to remove the added class whenever our modal is about to be removed.
            document.body.classList.remove('overflow-hidden');
        }
        
    },[]); // This is basic Javascript.In order to add a class to an element we can call the element classList.add



  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
