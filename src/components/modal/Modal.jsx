import { AiOutlineClose } from 'react-icons/ai'
import Portal from './Portal.jsx'
import PropTypes from 'prop-types'

import styles from './modal.module.scss'

const Modal = ({ fn, children }) => {
    return (
        <Portal>
            <div className={styles.modal}>
                <div className={styles.wrapper}/>
                <div className={styles.content}>
                    <span onClick={fn} className={styles.cross}><AiOutlineClose/></span>
                    {children}
                </div>
            </div>
        </Portal>
    )
}

export default Modal

Modal.propTypes = {
    'fn': PropTypes.func.isRequired,
    'children': PropTypes.node.isRequired,
}
