import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Banner from "../Components/Banner";
//@ts-ignore
import cleartasksimg from "../screenshots/clearTasks.jpg";
import styled from "styled-components";
import { Logo } from "../Components/Logo";

export const Button = styled.button`
    padding: 0.675rem 2rem;
    font-size: 1rem;
    background: ${(props) => props.color || props.theme.brand};
    color: ${({ theme }) => theme.text1};
    text-transform: capitalize;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.3s ease filter;
    border: none;
    margin: 1rem 0;
    transition: all 0.2s ease-in-out;
    font-weight: 600;
 
    /* box-shadow: 0px 0px 1px 1px ${({ theme }) => theme.brand}; */
    :hover {
       filter: brightness(1.2);
    }
    :active {
       /* padding: .675rem 2.5rem; */
       animation: pulse-animation 1s infinite;
    }
 
    /* & :first-child {
       margin-right: 0.4rem;
    } */
 
    @keyframes pulse-animation {
       0% {
          box-shadow: 0 0 0 0px ${({ theme }) => theme.brand};
       }
       100% {
          box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
       }
    }
 `;

const Welcome = () => {
    const [showLoginMsg, setShowLoginMsg] = useState(false);
    const WelcomeBottom = styled.div`
    height: 100%;
    width: 100vw;
    padding: 40px 40px;

    .paragraph{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    `

    const Content = styled.div`
    width: 70%;
    background: ${(props) => props.theme.surface2};
    border-radius: 12px;
   padding: 1rem 1.5rem;
   display: flex;
   flex-direction: column;
   align-items: center;
    `

    
 
  return (
    <div>
         <Banner
            icon="👋"
            img={cleartasksimg}
            imgEdit={() => setShowLoginMsg(true)}
         />
         <WelcomeBottom>
            <h1 className="custom-heading"><Link to="/auth">Click here to Sign In</Link></h1>
            <hr/>
            <div className="paragraph">
                <Content>
            <h1 className="heading">Welcome to</h1>
               <Logo />
               <Button>Sign In with google</Button>
               <hr/>
               <p className="custom-text"><Link to="/auth">Don't have an account, Sign Up.</Link></p>
               </Content>
            </div>
        </WelcomeBottom>
    </div>
      
  )
}

export default Welcome