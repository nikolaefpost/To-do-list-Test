import { getFormattedDate } from '../../util/date.js'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { removeTask, performTask } from '../../store/tasksToDo.js'
import PropTypes from 'prop-types'

import styles from './content.module.scss'

const TaskItem = ({ task, openModal }) => {
    const dispatch = useDispatch()

    const handleRemoveTask = (id) => dispatch(removeTask({ id }))
    const handlePerformTask = (id) => dispatch(performTask({ id}))

    return (
        <div className={styles.item}>
            <div className={styles.header_item}>
                <h3>{task.title}</h3>
                <div className={styles.edit}>
                    <div onClick={() => openModal(task.id)}><MdEdit size={28} color="#198754"/></div>
                    <div onClick={() => handleRemoveTask(task.id)}><MdDelete size={28} color="#FFA4A4"/></div>
                </div>

            </div>
            <p>{task.description}</p>
            <div className={styles.footer}>
                <span className={styles.date}>{getFormattedDate(task.date_completion)}</span>
                <div className={styles.done} onClick={() => handlePerformTask(task.id)}>
                    done <div/> {task.done && <span className={styles.check} >&#10003;</span>}
                </div>
            </div>
        </div>
    )
}

export default TaskItem

TaskItem.propTypes = {
    'task': PropTypes.object.isRequired,
    'openModal': PropTypes.func.isRequired,
}
