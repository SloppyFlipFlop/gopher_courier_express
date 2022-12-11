// const cards = document.querySelectorAll(".card");

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     entry.target.classList.toggle("show", entry.isIntersecting);
//   });
// });

// cards.forEach((card) => observer.observe(card));

// export default function useIntersectionObserver(ref, options, forward) {
//   const [element, setElement] = (useState < Element) | (null > null);
//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const observer = (useRef < null) | (IntersectionObserver > null);

//   const cleanOb = () => {
//     if (observer.current) {
//       observer.current.disconnect();
//     }
//   };

//   useEffect(() => {
//     setElement(ref.current);
//   }, [ref]);

//   useEffect(() => {
//     if (!element) return;
//     cleanOb();
//     const ob = (observer.current = new IntersectionObserver(
//       ([entry]) => {
//         const isElementIntersecting = entry.isIntersecting;
//         if (!forward) {
//           setIsIntersecting(isElementIntersecting);
//         } else if (forward && !isIntersecting && isElementIntersecting) {
//           setIsIntersecting(isElementIntersecting);
//           cleanOb();
//         }
//       },
//       { ...options }
//     ));
//     ob.observe(element);
//     return () => {
//       cleanOb();
//     };
//   }, [element, options]);

//   return isIntersecting;
// }

// import React, { useState, useEffect, useRef } from "react";

// const customAnimations = (options) => {
//   const containerRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const callbackFunction = (entries) => {
//     const [entry] = entries;
//     setIsVisible(entry.isIntersecting);
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(callbackFunction, options);
//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, [containerRef, options]);

//   return [containerRef, isVisible];
// };

// export default customAnimations;
