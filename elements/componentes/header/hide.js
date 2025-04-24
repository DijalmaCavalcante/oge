import { useEffect, useState, useRef } from 'react';

export default function useHideOnScroll(threshold = 60) {
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current && currentScroll > threshold) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return hidden;
}
