'use client';

import { useState, useEffect } from 'react';

const words = ['Forging...', 'Onramping...', 'Bridging...'];

export default function TypewriterEffect() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 150; // Speed for typing
    const deletingSpeed = 100; // Speed for deleting
    const wordPause = 1000; // Pause at complete word

    const type = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        // Deleting text
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // Typing text
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText === currentWord) {
          // Pause at complete word
          setTimeout(() => setIsDeleting(true), wordPause);
          return;
        }
      }
    };

    const timer = setTimeout(
      type,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <h2 className="text-gray-400 text-xl font-light min-h-[2rem] text-center tracking-wide">
      {currentText}
    </h2>
  );
} 