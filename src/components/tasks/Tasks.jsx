import styles from './tasks.module.scss'
import {useState} from 'react'
import cn from 'classnames'
import {useSelector} from 'react-redux'
import TasksMenu from './TasksMenu.jsx'
import {Modal} from "../";

const Tasks = () => {
    const [open, setOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const { toDo } = useSelector((state) => state.tasks)
    const doneTasks = toDo.filter((task) => task.done).length

    const closeModal = (event) => {
        event.stopPropagation()
        setModal(false)
    }
    const openModal = () => setModal(true)

    return (<>
            <div className={styles.tasks}>
                <div className={styles.title}>
                    <h2>Tasks</h2>
                    <div className={styles.plusButton}>
                        <span onClick={openModal}>+</span>
                    </div>
                </div>
                <div className={styles.main}>
                    <div
                        className={styles.title_main}
                        onClick={() => setOpen((pre) => !pre)}
                    >
                        <h4>Tasks</h4>
                        <span
                            className={cn(styles.tick, { [styles.active]: open })}
                        >&lsaquo;</span>
                    </div>
                    <TasksMenu open={open} done={doneTasks} all={toDo.length}/>
                </div>
            </div>
            {modal && <Modal fn={closeModal}>
                Form
            </Modal>}
        </>
    )
}

export default Tasks
