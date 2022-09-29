// import { useState } from "react";
// import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// function ImgButtons({ BlurImage }: any) {
//   console.warn(BlurImage);
//   const [current, setCurrent] = useState(0);
//   const lengthImg = BlurImage.length;

//   const prevImg = () => {
//     setCurrent(current === 0 ? lengthImg - 1 : current - 1);
//   };

//   const nextImg = () => {
//     setCurrent(current === lengthImg - 1 ? 0 : current + 1);
//   };

//   return (
//     <>
//       <div className="arrowLeft" onClick={prevImg}>
//         <FaArrowAltCircleLeft className="text-5xl text-gray-500" />
//       </div>
//       <div className="arrowRight" onClick={nextImg}>
//         <FaArrowCircleRight className="text-5xl text-gray-500" />
//       </div>
//     </>
//   );
// }

import React from "react";

const Modal = ({ selectedImg, setSelectedImg }: any) => {
  const handleClick = () => {
    setSelectedImg(null);
  };
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center ">
      <div className="backdrop" onClick={handleClick}>
        <div className="buttons">
          {/* <ImgButtons /> */}
          <div className="modalContent">
            <img src={selectedImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
