import { useState, FunctionComponent } from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';

const ToDoList: FunctionComponent = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Box>
      <Box display={'inline-flex'}>
        <Input onChange={(e) => setNewTask(e.target.value)} type="text" placeholder="I need to..." value={newTask} />
        <Button onClick={handleAddTask}>Add Task</Button>
      </Box>
      <Box>
        {tasks.map((task, index) => (
          <Box key={index} display={'flex'} alignItems={'center'} justifyContent={'space-around'}>
            <Text>{task}</Text>
            <Button onClick={() => handleRemoveTask(index)}>Remove</Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ToDoList;