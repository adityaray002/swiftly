// import React, { useEffect, useState } from 'react'
// import { UNSAFE_DataRouterStateContext } from 'react-router-dom'

// function SpinnerLoader() {

//     const [text,setText] =  useState('')
//     const [showImg ,setShowImg] =  useState(true)
//     useEffect(()=>{
//         setShowImg(false)
//         setTimeout(()=>{
//             setText(
//                 'Processing Payment'
//             )
//         },3000)
//     })
//   return (
//     <>
//         <div>
//             {
//                 showImg ? (
//                     <img src="spinner.svg" alt="" />
//                 ):(
//                     <h3>{text}</h3>
//                 )
//             }
//         </div>
//     </>
   
//   )
// }

// export default SpinnerLoader

import React, { useEffect, useState } from 'react';
import spinner from '../assets/spinner.svg';
function SpinnerLoader() {
  const [text, setText] = useState('');
  const [showImg, setShowImg] = useState(true);

  useEffect(() => {
    // Use a flag to ensure the effect runs only once after the initial render
    let isMounted = true;

    // Hide the spinner image after 3 seconds and show the text
    setTimeout(() => {
      if (isMounted) {
        setShowImg(false);
        setText('Processing Payment');
      }
    }, 5000);

    // Clean up function to prevent memory leaks
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <>
      <div>
      <div style={{ display: showImg ? 'block' : 'none' }}>
        <img src={spinner} alt="Loading..." />
        <h3>Processing Payment...</h3>
      </div>
      <div style={{ display: showImg ? 'none' : 'block' }}>
        <h3>{text}</h3>
      </div>
      </div>
    </>
  );
}

export default SpinnerLoader;


