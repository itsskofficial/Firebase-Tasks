import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const loadedTasks = [];

        for (const taskKey in data) {
            loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }

        setTasks(loadedTasks);
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
