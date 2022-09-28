import React from 'react';
import Banner from '../Components/Banner';
import styled from 'styled-components';
import LogoModal from '../Components/logoModal';
import Tasks from '../Components/Tasks';

const Home = () => {
  
  return (
    <div>
       <Banner
       img={"https://images.unsplash.com/photo-1521464302861-ce943915d1c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"}
       icon={"📒"}
         />
 
      <LogoModal/>
      <hr/>
    <Tasks/>
    </div>
  )
}

export default Home;