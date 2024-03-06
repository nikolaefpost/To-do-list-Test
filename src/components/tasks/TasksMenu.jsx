import styles from './tasks.module.scss'
import cn from 'classnames'
const TasksMenu = ({ open, all= 0, done = 0 }) => {
    // const tasKsMenu = ['All', 'In progress', 'Done']
    const tasKsMenu = [
        { 'id': 'all', 'title': 'All', 'value': all },
        { 'id': 'progress', 'title': 'In progress', 'value': all - done },
        { 'id': 'done', 'title': 'Done', 'value': done },
    ]
    return (
        <div className={cn(styles.body, { [styles.open]: open })}>
            {tasKsMenu.map((item) => <div key={item.id} className={styles.item_menu}>{item.title} ({item.value}) </div>)}
        </div>
    )
}

export default TasksMenu
