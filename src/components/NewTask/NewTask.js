import { useState } from 'react';
import useHttp from '../../hooks/useHttp';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const createTasks = (taskData) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  }

  const response = useHttp(createTasks)

  const enterTaskHandler = async (taskText) => {
    response.sendRequest({}) 
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
}

export default NewTask;
