// hooks/useGsap.js
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGsap = (animation, dependencies = []) => {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    if (elementRef.current) {
      animation(elementRef.current);
    }
  }, dependencies);

  return elementRef;
};