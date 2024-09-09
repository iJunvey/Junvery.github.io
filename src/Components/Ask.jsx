import React, { useState } from 'react';
import question from '../assets/question.gif'
import { Button, Card, Modal } from "flowbite-react";
import { Message } from './message';

const Ask = () => {

const [isClicked,setIsClicked] = useState(false);
const [openModal, setOpenModal] = useState(true);

const ClickNo =()=>{
    setIsClicked(true);
    <Message/>
}




return(
    
<div className='w-1/3 h-1/3 bg-slate-100   relative flex flex-col items-center justify-center'>


<Card  className=' z-10'>
Can you let me adopt your TWICE babies?? 
<img src={question} className='w-24  bottom-0 right-0 absolute z-0' />

</Card>
<div className='flex space-x-2'>
<Button className='bg-green-400 hover:bg-green-500 p-3 rounded-lg'>
    Yes 
</Button>
{!isClicked&& <Button className='bg-red-400 hover:bg-red-500 p-3 rounded-lg' onClick={ClickNo}>
    No
</Button>}
{isClicked && <Button className='bg-green-400 hover:bg-green-500 p-3 rounded-lg'>
    Yes 
</Button>}
</div>
</div>
);
};

export default Ask;
