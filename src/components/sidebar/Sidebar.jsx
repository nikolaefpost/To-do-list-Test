import styles from './sidebar.module.scss'
import cn from 'classnames'
import {logo, map, user, main, claud, board, setting, schedule} from '../../assets/icons'

const sidebarNav = [main, user, board, schedule, claud, map, setting]

const Sidebar = () => {
    return (
        <div className={styles.block}>
            <div className={styles.points}>
                <p/>
                <p className={styles.second}/>
                <p className={styles.third}/>
            </div>
            <img src={logo} alt='logo'/>
            <div className={styles.nav}>
                {sidebarNav.map((icon, index) => (
                    <div className={cn({ [styles.active]: index === 0 }) } key={icon}>
                        <img src={icon} alt='icon'/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
