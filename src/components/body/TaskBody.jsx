import { useEffect, useState } from 'react'
import TaskItem from './TaskItem.jsx'
import { getToday } from '../../util/date.js'
import PropTypes from 'prop-types'

import styles from './content.module.scss'

const TaskBody = ({ toDo, openModal }) => {
    const [isAll, setIsAll] = useState(true)

    const [currentTasks, setCurrentTasks] = useState(toDo)

    useEffect(() => {
        const today = getToday()
        if (isAll) {
            setCurrentTasks(toDo)
        } else {
            setCurrentTasks(toDo.filter((task) => task.date_completion === today))
        }
    },[isAll, toDo])

    return (
        <div className={styles.body}>
            <div className={styles.menu}>
                <h2>
                    <span
                        className={isAll ? styles.active : {}}
                        onClick={() => setIsAll((pre) => !pre)}
                    >All the tasks</span>
                    <span
                        className={isAll ? {} : styles.active}
                        onClick={() => setIsAll((pre) => !pre)}
                    >The tasks for today</span>
                </h2>
                <button onClick={() => openModal()}>add task</button>
            </div>
            <div className={styles.body_field}>
                {currentTasks.map((it) => (
                    <TaskItem key={it.id} task={it} openModal={openModal}/>
                ))}
            </div>
        </div>
    )
}

export default TaskBody

TaskBody.propTypes = {
    'toDo': PropTypes.array.isRequired,
    'openModal': PropTypes.func.isRequired,
}
