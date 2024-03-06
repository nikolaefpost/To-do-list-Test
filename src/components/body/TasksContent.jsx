import styles from './content.module.scss'
import Header from './Header.jsx'
import TaskBody from './TaskBody.jsx'

const TasksContent = () => {
    return (
        <div className={styles.content}>
            <Header/>
            <TaskBody/>
        </div>
    )
}

export default TasksContent
