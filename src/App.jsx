import { TasksContent, Sidebar, Tasks, Modal, Form } from './components'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import styles from './app.module.scss'

function App() {
    const { toDo } = useSelector((state) => state.tasks)
    const [taskStatus, setTaskStatus] = useState('all')
    const [tasks, setTasks] = useState([])
    const [modal, setModal] = useState(false)
    const [editTaskId, setEditTaskId] = useState('')
    const closeModal = (event) => {
        event.stopPropagation()
        setModal(false)
    }
    const openModal = (id) => {
        setEditTaskId(id)
        setModal(true)
    }

    useEffect(() => {
        switch (taskStatus) {
            case 'all': {
                setTasks(toDo)
                break
            }
            case 'progress': {
                setTasks(toDo.filter((task) => !task.done))
                break
            }
            case 'done': {
                setTasks(toDo.filter((task) => task.done))
                break
            }
            default: {
                setTasks([])
                break
            }
        }
    }, [taskStatus, toDo])

  return (
    <>
      <div className={styles.root}>
          <Sidebar/>
          <Tasks taskStatus={taskStatus} setTaskStatus={setTaskStatus} openModal={openModal} />
          <TasksContent toDo={tasks} openModal={openModal} />
          {modal && <Modal fn={closeModal} >
              <Form setModal={setModal} editTaskId={editTaskId} />
          </Modal>}
      </div>
    </>
  )
}

export default App
