import Header from './Header.jsx'
import TaskBody from './TaskBody.jsx'
import PropTypes from 'prop-types'

import styles from './content.module.scss'

const TasksContent = ({ toDo, openModal }) => {
    return (
        <div className={styles.content}>
            <Header/>
            <TaskBody toDo={toDo} openModal={openModal}/>
        </div>
    )
}

export default TasksContent

TasksContent.propTypes = {
    'toDo': PropTypes.array.isRequired,
    'openModal': PropTypes.func.isRequired,
}
