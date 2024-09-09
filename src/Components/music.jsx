import React, { useRef, useEffect } from 'react';
import music from '../assets/Twice.mp3';

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.1; // Set volume
        audioRef.current.play(); // Attempt to play the audio
      }
    };

    // Add an event listener to play audio on any click
    document.addEventListener('click', handleUserInteraction);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <div>
      <audio
        ref={audioRef}
        src={music}
        autoPlay
        loop
        style={{ display: 'none' }} // Hide the audio player controls
      />
    </div>
  );
};

export default BackgroundMusic;
