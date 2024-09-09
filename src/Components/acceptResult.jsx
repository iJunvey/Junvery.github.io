import { Dialog, DialogPanel, DialogTitle, } from '@headlessui/react';
import {  Button } from 'flowbite-react';
import heart from '../assets/sanrioLove.gif'
export function YesResult({ openModal, closeModal }) {
  return (
    <>
      <Dialog open={openModal} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="max-w-lg w-full space-y-4 border bg-white p-12 rounded-md shadow-lg">
            <DialogTitle className="font-bold text-lg">Thank Youu!</DialogTitle>
        
            <p>Yayyy!! TENCHUUUU ❤ :3</p>
            <div className="flex justify-end space-x-4">
             
            <img src={heart} className='w-32'/>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
