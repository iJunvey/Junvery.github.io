import { Dialog, DialogPanel, DialogTitle, } from '@headlessui/react';
import { useState } from 'react';
import {  Button } from 'flowbite-react';
import { YesResult } from './acceptResult';
import sad from '../assets/momo-sad.gif'
export function Final({ openModal, closeModal }) {
    const [isClicked, setIsClickedFinal] = useState(false);
    const [openModalFinal, setOpenModal] = useState(false);
    
    const ClickNo = () => {
        setIsClickedFinal(true);
        setMessage(true);
      };
      const acceptResult = () => {
        setOpenModal(true);
      };
    
      const closeModalFinal = () => {
        setIsClickedFinal(false)
        setOpenModal(false);
        closeModal();
      };
    
  return (
    <>
      <Dialog open={openModal} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="max-w-lg w-full space-y-4 border bg-white p-12 rounded-md shadow-lg">
            <DialogTitle className="font-bold text-lg">Confirmation</DialogTitle>
            <YesResult openModal={openModalFinal} closeModal={closeModalFinal} />
            <div className='flex justify-center flex-col items-center space-y-2'>
            <p>Are you sure?</p>

            <p className=''>Look oh im sad</p>
            <div className="relative   space-x-4">
             
             <img src={sad} className='  w-56'/>
             </div>
          <div className='flex space-x-2'>
            <Button className="bg-green-400 hover:bg-green-500 p-3 w-20  rounded-lg" onClick={acceptResult}>
              Yes
            </Button>
            {!isClicked && (
              <Button className="bg-red-400 hover:bg-red-500  w-20  p-3 rounded-lg" onClick={ClickNo}>
                No
              </Button>
            )}
            {isClicked && (
              <Button className="bg-green-400 hover:bg-green-500 w-20  p-3 rounded-lg" onClick={acceptResult}>
                Yes
              </Button>
            )}
            </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
