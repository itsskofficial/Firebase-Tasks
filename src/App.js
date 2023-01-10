import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/useHttp';

function App() {
  const response = useHttp({
    url:''
  })


  ---------
  const [tasks, setTasks] = useState([]);
  const loadedTasks = [];

  for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  }

  setTasks(loadedTasks);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={response.isLoading}
        error={response.error}
        onFetch={response.sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
