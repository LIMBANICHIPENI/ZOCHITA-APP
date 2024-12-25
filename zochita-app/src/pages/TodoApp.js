import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  useEffect(() => {
    // Request microphone access and set up MediaRecorder
    const setupRecorder = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
      } catch (error) {
        console.error('Error accessing microphone:', error);
        alert('Could not access your microphone. Please allow microphone access.');
      }
    };
    setupRecorder();
  }, []);

  const startRecording = () => {
    if (mediaRecorder) {
      setAudioChunks([]); // Reset audio chunks
      mediaRecorder.start();
      setIsRecording(true);
      console.log('Recording started...');
      mediaRecorder.ondataavailable = (event) => {
        setAudioChunks((prev) => [...prev, event.data]);
      };
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
      console.log('Recording stopped...');
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        console.log('Audio saved:', audioUrl);
        addTaskFromVoice(audioUrl);
      };
    }
  };

  const addTaskFromVoice = (audioUrl) => {
    setTasks([
      ...tasks,
      {
        text: 'Voice Task',
        time: taskTime,
        id: Date.now(),
        audioUrl,
      },
    ]);
    setTaskTime('');
  };

  const addTask = () => {
    if (newTask && taskTime) {
      setTasks([
        ...tasks,
        {
          text: newTask,
          time: taskTime,
          id: Date.now(),
          audioUrl: null,
        },
      ]);
      setNewTask('');
      setTaskTime('');
    } else {
      alert('Please provide both task description and time.');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}><i>To-Do List/Zoyenera kuchita</i></h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task here"
          style={styles.input}
        />
        <input
          type="time"
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>
          Add Task
        </button>
      </div>
      <div style={styles.buttonsContainer}>
        <button
          onClick={startRecording}
          disabled={isRecording}
          style={{
            ...styles.button,
            backgroundColor: isRecording ? '#f1c40f' : '#f39c12',
            cursor: isRecording ? 'not-allowed' : 'pointer',
          }}
        >
          Start Recording
        </button>
        <button
          onClick={stopRecording}
          disabled={!isRecording}
          style={{
            ...styles.button,
            backgroundColor: !isRecording ? '#f1c40f' : '#f39c12',
            cursor: !isRecording ? 'not-allowed' : 'pointer',
          }}
        >
          Stop Recording
        </button>
      </div>
      <h2 style={styles.subHeading}>Your Tasks</h2>
      <ul style={styles.taskList}>
        {tasks.length === 0 ? (
          <p style={styles.noTasks}>No tasks available. Please add</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id} style={styles.taskItem}>
              <div>
                <span>{task.text}</span>
                <span style={styles.taskTime}> at {task.time}</span>
              </div>
              {task.audioUrl && (
                <audio controls style={styles.audioPlayer}>
                  <source src={task.audioUrl} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              )}
              <button
                onClick={() => deleteTask(task.id)}
                style={styles.button}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: 'auto',
    backgroundColor: 'silver',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    marginBottom: '20px',
    display: 'flex',
    gap: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#f1c40f',
    color: '#333',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  subHeading: {
    textAlign: 'center',
    color: '#555',
  },
  taskList: {
    listStyleType: 'none',
    padding: 0,
  },
  noTasks: {
    textAlign: 'center',
    color: '#777',
  },
  taskItem: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskTime: {
    color: '#888',
    marginLeft: '10px',
  },
  audioPlayer: {
    marginTop: '10px',
    width: '100%',
  },
};

export default TodoApp;
