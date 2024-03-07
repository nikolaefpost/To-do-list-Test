import { useState } from 'react'
import cn from 'classnames'
import { useSelector } from 'react-redux'
import TasksMenu from './TasksMenu.jsx'
import PropTypes from 'prop-types'

import styles from './tasks.module.scss'

const Tasks = ({ setTaskStatus, openModal, taskStatus }) => {
    const [open, setOpen] = useState(true)

    const { toDo } = useSelector((state) => state.tasks)
    const doneTasks = toDo.filter((task) => task.done).length
        const handlerOpenMenu = () => {
        setOpen((pre) => {
            if (pre) setTaskStatus('')
            else setTaskStatus('all')
            return !pre
        })
    }

    return (<>
            <div className={styles.tasks}>
                <div className={styles.title}>
                    <h2>Menu</h2>
                    <div className={styles.plusButton}>
                        <span onClick={() => openModal()}>+</span>
                    </div>
                </div>
                <div className={styles.main}>
                    <div
                        className={styles.title_main}
                        onClick={handlerOpenMenu}
                    >
                        <h4>Tasks</h4>
                        <span
                            className={cn(styles.tick, { [styles.active]: open })}
                        >&lsaquo;</span>
                    </div>
                    <TasksMenu open={open} done={doneTasks} all={toDo.length} taskStatus={taskStatus} setTaskStatus={setTaskStatus} />
                </div>
            </div>

        </>
    )
}

export default Tasks

Tasks.propTypes = {
    'setTaskStatus': PropTypes.func.isRequired,
    'openModal': PropTypes.func.isRequired,
    'taskStatus': PropTypes.string,
}
