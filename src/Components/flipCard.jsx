import React, { useState } from 'react';
import sanrio from '../assets/cinnamoroll-kawaii.gif';
import please from '../assets/please.gif';

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-80 h-60 perspective-1000 mx-auto cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform ${
          flipped ? 'rotate-y-180' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div className={`absolute w-full h-full backface-hidden`}>
          <div className="rounded-lg bg-slate-100 hover:bg-slate-300 p-10 flex items-center justify-center w-full h-full">
            Click Me First
            <img src={please} className="absolute bottom-0 right-0 w-44" />
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full rotate-y-180 backface-hidden`}
        >
          <div className="rounded-lg bg-slate-100 p-10 flex flex-col items-center select-none justify-center w-full h-full">
         I Promise that I will take care of them like you do
            <span className='mt-10 text-sm text-green-400 z-10'> -Wala kana pong magagawa 🤣🤣🤣</span>
            <img src={sanrio} className="w-36 absolute right-0 bottom-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
