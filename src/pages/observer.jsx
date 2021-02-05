// // import React, { useState, useEffect } from 'react';
// import React from 'react';
// // import useOnScreen from '../utils/useOnScreen';
// import { useInView } from 'react-intersection-observer';
// // import { motion, AnimateSharedLayout } from 'framer-motion';

// // rootMargin = '0px'
// // Hook

// const variant = {
//   visible: { x: 0, opacity: 1 },
//   hidden: { x: -1500, opacity: 0 },
// };

// // Usage
// function Oberver() {
//   // Ref for the element that we want to detect whether on screen
//   //   const ref = useRef();
//   // Call the hook passing in ref and root margin
//   // In this case it would only be considered onScreen if more ...
//   // ... than 300px of element is visible.
//   //   ****************************************************************
//   //   const [setRef, visible] = useOnScreen({ threshold: 0.5 });
//   //   const [setRef1, visible1] = useOnScreen({ threshold: 0.5 });
//   const { ref, inView } = useInView({
//     /* Optional options */
//     threshold: 0.4,
//   });

//   return (
//     <div>
//       <div style={{ height: '100vh' }}>
//         <h1>Scroll down to next section 👇</h1>
//       </div>
//       <div
//         ref={ref}
//         style={{
//           height: '100vh',
//           backgroundColor: inView ? '#23cebd' : '#efefef',
//         }}
//       >
//         <AnimateSharedLayout>
//           <div>
//             <h1>Hey I'm on the screen</h1>
//             <motion.img
//               animate={inView ? 'visible' : 'hidden'}
//               transition={{ ease: 'easeOut', duration: 0.8 }}
//               variants={variant}
//               src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif"
//               alt="an alt prop"
//             />
//           </div>
//         </AnimateSharedLayout>
//       </div>
//     </div>
//   );
// }

// export default Oberver;
