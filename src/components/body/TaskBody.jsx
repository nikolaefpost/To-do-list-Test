import styles from './content.module.scss'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem.jsx'

const TaskBody = () => {
    const { toDo } = useSelector((state) => state.tasks)
    const [isAll, setIsAll] = useState(true)

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
            </div>
            <div className={styles.body_field}>
                {toDo.map((it) => (
                    <TaskItem key={it.id} item={it}/>
                ))}
            </div>
        </div>
    )
}

export default TaskBody
