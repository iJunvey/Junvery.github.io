import { useState, useEffect, useRef } from 'react';
import sanrioHi from './assets/sanrioHi.gif';
import { Alert, Popover } from "flowbite-react";
import './App.css';
import question from './assets/question.gif';
import cloud1 from './assets/cloud 1.png'; // Fixed file path name
import cloud2 from './assets/cloud3.png';
import sanrioBalloon from './assets/sanrioBallon.gif';
import { Card, Button } from 'flowbite-react';
import FlipCard from './Components/flipCard';
import BackgroundMusic from './Components/music';
import Ask from './Components/Ask';
import twice1 from './assets/twice-momo2.gif';
import twice2 from './assets/twice2.gif';
import twice3 from './assets/momo3.gif';
import twice4 from './assets/twice4.gif';
import twice5 from './assets/twice5.gif';
import flying from './assets/flying.gif';
import momo1 from './assets/momo1.gif'
import momo2 from './assets/momo2.gif'
import { Final } from './Components/Final';
import { YesResult } from './Components/acceptResult';


function App() {
  // const [flipped, setFlipped] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);
  let [openModal, setOpenModal] = useState(false);
  let [Confirmation, setConfirmation] = useState(false);
  const [message, setMessage] = useState(false)
  const carouselRef = useRef(null);
  const ClickNo = () => {
    // setIsClicked(true);
    setMessage(true);
  };

  const acceptResult = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  
  };

  const ConfirmationOpen = () => {
    setConfirmation(true);
  };

  const ConfirmationClose = () => {
    setConfirmation(false);
 
  };





  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust cloud positions based on scroll position
      const clouds = document.querySelectorAll('.cloud');
      clouds.forEach((cloud, index) => {
        const speed = (index + 1) * 0.2; // Different speed for each cloud
        cloud.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="flex flex-col items-center justify-start  space-y-8  scroll-smooth relative">
      {/*  Background Music Component */}
      <BackgroundMusic />

      {/* Modal Component */}
      <Final openModal={openModal} closeModal={closeModal} />
      <YesResult openModal={Confirmation} closeModal={ConfirmationClose} />

      {/* Header Section */}
      <div className="flex justify-center items-center relative mb-8">
  <Card className="flex flex-col items-center justify-center relative h-96 w-full shadow-none bg-transparent text-center">
    <img src={sanrioHi} className="w-36 animate-fade-left absolute top-10 right-10 duration-1000" alt="Sanrio" />
    <h1 className="animate-fade-left duration-700 text-7xl font-CandyBeans text-gray-600 select-none">
      Hello Iska!
    </h1>
    <h2 className="animate-fade-left duration-1000 z-10 animate-delay-700 text-4xl font-bold text-gray-600 select-none ">
      I hope you're doing well
    </h2>
  </Card>
</div>


      {/* Cloud Images */}
      {/*home cloud */}
      <div className="absolute top-0 left-10 z-0 animate-fade-left duration-1000 animate-delay-200 hover:animate-[propel_5s_infinite] ">
        <img src={cloud1} alt="Cloud 1" className="w-60 opacity-70" />
      </div>
      <div className="absolute top-52 left-96 z-0 animate-fade-left animate-delay-300 duration-1000 hover:animate-[propel_5s_infinite]">
        <img src={cloud1} alt="Cloud 1" className="w-96 opacity-70" />
      </div>
      <div className="absolute top-0 right-0 z-0 animate-fade-left  animate-delay-600 duration-1000 hover:animate-[propel_5s_infinite]">
        <img src={cloud2} alt="Cloud 2" className="w-60 opacity-70" />
      </div>
      <div className="absolute top-20 right-80 z-0 animate-fade-left animate-delay-400 duration-1000 hover:animate-[propel_5s_infinite]">
        <img src={cloud1} alt="Cloud 2" className="w-60 opacity-70" />
      </div>
      {/* mid cloud  */}
      <div className="absolute top-1/3 right-96 z-0 animate-fade-left animate-delay-400 duration-1000 hover:animate-[propel_5s_infinite]">
        <img src={cloud1} alt="Cloud 2" className="w-60 opacity-70" />
      </div>
      <div className="absolute inset-y-1/4  left-32 z-0 animate-fade-left animate-delay-400 duration-1000 hover:animate-[propel_5s_infinite]">
        <img src={cloud1} alt="Cloud 2" className="w-40 opacity-70" />
      </div>
     
      <div className="absolute bottom-2/4 left-32 z-0 animate-fade-left animate-delay-400 duration-1000 hover:animate-[propel_5s_infinite]">
        <img src={cloud1} alt="Cloud 2" className="w-80 opacity-70" />
      </div>
      {/* bottom cloud */}
      <div className="absolute top-2/3 left-32 z-0 animate-fade-left animate-delay-400 duration-1000 hover:animate-[propel_5s_infinite]">
        <img src={cloud1} alt="Cloud 2" className="w-80 opacity-70" />
      </div>
      <div className="absolute bottom-36 right-96  animate-fade-left animate-delay-400 duration-1000 hover:animate-[propel_5s_infinite] z-0">
        <img src={cloud1} alt="Cloud 2" className="w-60 opacity-70" />
      </div>
      <div className="absolute bottom-10 left-80  animate-fade-left animate-delay-400 duration-1000 hover:animate-[propel_5s_infinite] z-10">
        <img src={cloud2} alt="Cloud 2" className="w-60 opacity-70" />
      </div>
      <div className="absolute bottom-10 right-52 z-10 animate-fade-left animate-delay-400 duration-1000 hover:animate-[propel_5s_infinite]">
        <img src={cloud2} alt="Cloud 2" className="w-36 opacity-70" />
      </div>
      {/* Sanrio flying  */}
      <img src={flying} alt="sanrio Flying" className="w-36 opacity-70 hover:animate-[propel_5s_infinite] absolute bottom-40 left-36 z-10" />
      {/* Flip Card Section */}
      <div className="flex justify-center relative items-center animate-fade-left animate-delay-1000 mb-20 ">
        <FlipCard />
      </div>

      {/* Carousel Section */}
      <div className="carousel-container overflow-hidden flex bg-secondBackground transparent animate-fade-left h-auto animate-delay-1000 w-full mb-20 py-10">
        <div className="carousel flex space-x-5">
        {[twice1, twice2, twice3, twice4,momo1,momo2, twice5, twice1, twice2, twice3, twice4, twice5,].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-60 h-52 flex-shrink-0 rounded-3xl"
            />
          ))}
        </div>
      </div>

      {/* Question Section */}
      <div className="w-full flex justify-center animate-fade-left h-60 animate-delay-1000 ">
        <div className="bg-slate-100 p-10 flex flex-col items-center justify-center relative">
          <Card className="z-10 bg-slate-100 shadow-none border-none     ">
 
           
    <Popover
        trigger="hover"
        content={
          <div className="w-96 text-sm text-gray-500  dark:bg-gray-800 dark:text-gray-400 z-20">
          <div className="grid grid-cols-5">
            <div className="col-span-3 p-3">
              <div className="space-y-2 ">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Hmmmm</h3>
                  <p>
                  nang hindi nagrereklamo ganun?.
                  </p>
              
                </div>
              </div>
             
            </div>
          </div>
        }
      >
        <a className="text-gray-700  hover:no-underline dark:text-gray-700">
        Can you let me adopt your TWICE babies??
        </a>
      </Popover>

          </Card>
          <div className="flex space-x-2 mt-4">
            <Button className="bg-green-400 hover:bg-green-500 p-3 w-20 rounded-lg" onClick={ConfirmationOpen}>
              Yes
            </Button>
            {/* {!isClicked && ( */}
              <Button className="bg-red-400 hover:bg-red-500  p-3 w-20 rounded-lg" onClick={acceptResult}>
                No
              </Button>
            {/*  )} */}
            {/* {isClicked && (
              <Button className="bg-green-400 hover:bg-green-500 p-3  w-20 rounded-lg" onClick={acceptResult}>
                Yes
              </Button>
            )} */}
           
            {console.log(message)}
          </div>
          <img src={question} className="w-24 bottom-0 absolute right-0 z-10" alt="Question" />
        </div>
      </div>
      <div className='h-5'>

      </div>

      <img src={sanrioBalloon} className="w-64 bottom-0 fixed right-10 z-10" alt="Question" />
    </div>
    
  );
}

export default App;
