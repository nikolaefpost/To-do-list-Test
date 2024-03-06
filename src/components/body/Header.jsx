import styles from './content.module.scss'
import { calender, event } from '../../assets/icons'
import { getFormattedDate } from '../../util/date.js';
const Header = () => {
    const today = new Date()
    const todayString = getFormattedDate(today)
    return (
        <div className={styles.header}>
            <h2>Welcome</h2>
            <div className={styles.info}>
                <img src={event} alt="event"/>
                <img src={calender} alt="calender"/>
                <span>{todayString}</span>
            </div>
        </div>
    )
}

export default Header
