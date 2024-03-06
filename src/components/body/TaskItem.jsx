import styles from './content.module.scss'

const TaskItem = ({item}) => {
    return (
        <div className={styles.item}>
            <p>{item.description}</p>
            <div className={styles.footer}>
                <span className={styles.date}>{item.date_completion}</span>
                <div className={styles.done}>
                    done <div/> {item.done && <span className={styles.check}>&#10003;</span>}
                </div>
            </div>
        </div>
    )
}

export default TaskItem
