import React, {MouseEventHandler, useEffect, useState } from "react";
import styled from "styled-components";
import { emojies, bannerImgs } from "../data/bannerData";
import {BiPlus } from "react-icons/bi"


const Container = styled.div`
height: 20rem;
width: 100vw;
   position: relative;
 :hover {
      img {
         filter: brightness(0.25);
      }
      .edit-img {
         height: 5rem;
         width: 5rem;
         border-radius: 50%;
         position: absolute;
         z-index: 1000;
         right: 2rem;
         bottom: -10px;
         background: ${(props) => props.theme.surface3};
         cursor: pointer;
         transition: all ease 0.25s;
         visibility: visible;
         transform: translateY(0px);
         opacity: 1;
      }
   }
   .edit-img {
      visibility: hidden;
      bottom: -90px;
      opacity: 0;
      display: grid;
      place-items: center;

      & >  .changeMyImage {
         font-size: 2rem;
      }
   }
   span {
      position: absolute;
      bottom: -3rem;
      left: 25%;
      font-size: 5rem;
      user-select: none;
      cursor: pointer;

     
   }
   img {
      width: 100%;
      object-fit: cover;
      height: 100%;
      user-select: none;
      filter: brightness(0.5);
      transition: all ease 0.7s;
      position: relative;
   }
`;


interface bannerProps {
   img?: any,
   icon?: string,
   imgEdit?: MouseEventHandler<HTMLDivElement>,
   emojieEdit?: any
}

const Banner = ({ img, icon, imgEdit, emojieEdit }: bannerProps) => {
   const [randomNum, setRandomNum] = useState(25);
   useEffect(() => {
      const num = Math.floor(Math.random() * bannerImgs.length);
      setRandomNum(num);
   }, []);

   return (
      <Container className="full-bleed">
         <img src={img ? img : bannerImgs[randomNum]} alt="banner" />
         <span onClick={emojieEdit}>{icon || emojies[randomNum]}</span>
         <div className="edit-img" onClick={imgEdit}>
           <BiPlus className="changeMyImage"/>
         </div>
      </Container>
   );
};

export default Banner;
