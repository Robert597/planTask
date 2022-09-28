import React from 'react';
import styled from 'styled-components';
import {AiOutlineCheck} from "react-icons/ai";
import {FaTimes, FaEllipsisV, FaPen, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {Button} from "../Pages/Welcome";

const TaskBox = styled.div`
   position: relative;
   box-shadow: ${({ theme }) => theme.shadow} 0px 8px 24px;
   border: none;
   background: ${({ theme }) => theme.surface2};
   border-radius: 12px;
   cursor: pointer;
   height: auto;
   transition: box-shadow 0.3s ease 0.1s;
   &:hover {
      box-shadow: ${({ theme }) => theme.shadow} 0px 1px 4px;
   }
   p {
    color: ${(props) => props.theme.text2};
   }
`;


const MenuButton = styled.button`
   background: transparent;
   border: none;
   font-size: 1.2rem;
   cursor: pointer;
   padding: 1rem;
   color: ${(props) => props.theme.text1};
   transition: all 0.25s ease;

   &.danger:hover {
      background: ${(props) => props.theme.danger};
   }
   :hover {
      background: ${(props) => props.theme.brand};
   }
`;
export const DeleteModal = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
cursor: auto;
background: #000000c4;
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
` 
const Body = styled(TaskBox)`
   padding: 1rem; */
   margin: auto;
   width: 60%;
   box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

export const Flex = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
height: auto;
padding: 10px 20px;
`
export const Icon = styled.span`
//@ts-ignore
font-size: 16px;
color: ${(props) => props.theme.text2};
border-radius: 50%;
height: 2rem;
width: 2rem;
display: grid;
place-items: center;
transition: background 0.25s ease;
cursor: pointer;

:hover {
   color: ${(props) => props.theme.text1};
   background: ${(props) => props.theme.surface2};
}
`;
const Menu = styled.span`
color: ${(props) => props.theme.text2};
display: inline-block;
font-size: 16px;

:hover {
    color: ${(props) => props.theme.text1};
    background: ${(props) => props.theme.surface2};
 }
`
const TaskLink = styled(Link)`
   max-inline-size: 20ch;
   text-overflow: ellipsis;
   white-space: nowrap;
   font-size: 18px;
   overflow: hidden;
   &:visited {
      color: ${({ theme }) => theme.text2};
   }
`;


const EditableInput = styled.input`
   background: #00000021;
   border: none;
   color: ${(props) => props.theme.text1};
   font-size: 1.2rem;
   font-family: "Poppins", sans-serif;
   font-weight: 400;
   margin-top: 0.5em;
   margin-bottom: 0.5em;
   line-height: 1.2rem;
   max-inline-size: max-content;
`;

const ActionButton = styled(Button)`
   padding: 12px 10px;
   color: ${(props) => props.theme.text};
   display: flex;
   margin: 0 0 1rem 0;
   align-items: baseline;
   i {
      color: ${(props) => props.theme.text};
   }

   &.danger {
      background: ${(props) => props.theme.danger};
   }
`;

const AbsoluteChild = styled.aside`
   border-radius: 12px;
   overflow: hidden;
   padding: 0;
   background: ${(props) => props.theme.surface4};
   display: flex;
   flex-direction: column;
   box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
   position: absolute;
   right: 1rem;
   z-index: 2000;
   user-select: none;
   width: max-content;
   opacity: ${({ when }: any) => (when ? "1" : "0")};
   visibility: ${({ when }) => (when ? "visible" : "hidden")};
   transform: ${({ when }) =>
      when ? "translateZ(0) scale(1)" : "translate3d(60px,-100px,0) scale(.2)"};
   transition: all 0.25s ease;
   outline: 2px solid ${({ theme }) => theme.shadow};

   @media screen and (max-width: 640px) {
      transform: ${({ when }) =>
         when
            ? "translateZ(0) scale(1)"
            : "translate3d(-60px,-100px,0) scale(.2)"};
   }
`;

const Task = ({name}: {name: string}) => {
    const[isUpdating, setIsUpdating] = React.useState<boolean>(false);
    const[controlModal, setControlModal] = React.useState<boolean>(false);
    const[deleteModal, setDeleteModal] = React.useState<boolean>(false);

  return (
    <TaskBox>
        <Flex>
        {
            isUpdating ? (
                <>
                <EditableInput
                autoFocus
                type="text"
                value={name}
                />
                <Icon onClick={() => setIsUpdating(false)}>
                    <FaTimes/>
                </Icon>
                <Icon>
                   <AiOutlineCheck/>
                </Icon>

                </>
            ) : (
                <>
                <TaskLink to="/"
                style={{ flex: 1 }} title={name}>
                    {name}
                </TaskLink>

                <Menu>
                    <FaEllipsisV onClick={() => setControlModal(controlModal => !controlModal)}/>
                    
                       <AbsoluteChild 
                       //@ts-ignore 
                       when={controlModal}>
                        <MenuButton onClick={() => {
                            setControlModal(false);
                            setIsUpdating(true)}}>
                               <FaPen/> Edit 
                        </MenuButton>
                        <MenuButton className='danger'onClick={() =>
                             {
                                setControlModal(false);
                                setDeleteModal(true)}}>
                           <FaTrash/> Delete
                        </MenuButton>
                        </AbsoluteChild>
                    
                </Menu>
                </>
            )
        }
        </Flex>
        {
            deleteModal && (
                <DeleteModal>
                    <Body onClick={(e) => e.stopPropagation()}>
                    <p>
                  Are you sure you want to delete this task:
                  <strong>' {name}'</strong>?
               </p>
               <hr />
               <Flex>
                  <ActionButton
                     className="danger"
                    
                  >
                     Delete
                  </ActionButton>
                  <Button onClick={() => setDeleteModal(false)}>Cancel</Button>
               </Flex>
                    </Body>
                    </DeleteModal>
            )
        }
        </TaskBox>
  )
}

export default Task