import React from 'react';
import { Button } from '../Pages/Welcome';
import { BiPlus } from 'react-icons/bi';
import styled from 'styled-components';
import Task from './Task';

const TaskContainer = styled.div`
width: 100vw;
height: auto;
padding: 0 40px;
`
export const CardGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   column-gap: 1rem;
   img {
      width: 100%;
      height: 200px;
      object-fit: cover;
   }
`;

const Tasks = () => {
    interface dataProps{
        name: string
    }
    const [data, setData] = React.useState<dataProps[]>([{
        name: "Robert"
    }, {
        name: "Oluwaseun"
    },
    {
        name: "Oreoluwa"
    }
]);
  return (
    <TaskContainer>
        <Button>
        <BiPlus className='addbtn'/>
        </Button>

        {
            !data.length && (
                <p className='custom-text'> Click the + button to add new tasks.</p>
            )
        }
        {
            data && (
                <CardGrid>
                {
                    data.map(task => (
                        <Task name={task.name}/>
                    ))
                }
                </CardGrid>
            )
        }
   </TaskContainer>
  )
}

export default Tasks