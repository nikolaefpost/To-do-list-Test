import cn from 'classnames'
import PropTypes from 'prop-types'

import styles from './tasks.module.scss'
const TasksMenu = ({ open, all = 0, done = 0, setTaskStatus }) => {
    const tasKsMenu = [
        { 'id': 'all', 'title': 'All', 'value': all },
        { 'id': 'progress', 'title': 'In progress', 'value': all - done },
        { 'id': 'done', 'title': 'Done', 'value': done },
    ]
    return (
        <div className={cn(styles.body, { [styles.open]: open })}>
            {/* eslint-disable-next-line id-blacklist */}
            {tasKsMenu.map((task) => <div
                key={ task.id }
                className={styles.item_menu}
                onClick={() => setTaskStatus(task.id)}
            >{task.title} ({task.value}) </div>)}
        </div>
    )
}

export default TasksMenu

TasksMenu.propTypes = {
    'open': PropTypes.bool.isRequired,
    'all': PropTypes.number.isRequired,
    'done': PropTypes.number.isRequired,
    'setTaskStatus': PropTypes.func.isRequired,
}
