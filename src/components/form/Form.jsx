import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import cn from 'classnames'
import {useDispatch, useSelector} from 'react-redux'
import { addTasks, editTask } from '../../store/tasksToDo.js'
import { getIdDate } from '../../util/date.js'
import PropTypes from 'prop-types'

import styles from './form.module.scss'

const schema = yup
    .object({
        'title': yup
            .string()
            .min(2, 'The task title must consist of at least two characters')
            .required('Please enter your tittle task'),
        'description': yup
            .string(),
        'date_completion': yup
            .string()
            .required('Specify the due date'),
    })
    .required(
        'Поля не заполнены или введены неверно. Исправьте или введите заново, пожалуйста.',
    );

const Form = ({ setModal, editTaskId }) => {
    const dispatch = useDispatch()
    const { toDo } = useSelector((state) => state.tasks)
    let editedTask = {}
    if (editTaskId) {
        editedTask = toDo.find((task) => task.id === editTaskId)
    }
        const {
        register,
        'formState': { errors},
        handleSubmit,
    } = useForm({
        'mode': 'onTouched',
        'resolver': yupResolver(schema),
        'values': editedTask,
        'shouldFocusError': true,
    })

    const onSubmit = handleSubmit((data) => {
        const task = { ...data, 'id': getIdDate(), 'done': false }
        editTaskId ? dispatch(editTask({ 'id': editTaskId, task })) : dispatch(addTasks(task))
        setModal(false)
    });
    return (
        <form
            onSubmit={onSubmit}
            className={styles.form}
        >
            <div className={styles.input_block}>
                {Boolean(errors.title) && <span className={styles.error}>{errors.title.message}</span>}
                <input
                    className={cn({ [styles.error_border]: errors.title })}
                    type="text"
                    placeholder='Please enter your tittle task'
                    {...register('title')}
                />
            </div>
            <div className={styles.input_block}>
                {Boolean(errors.description) && <span className={styles.error}>{errors.description.message}</span>}
                <textarea
                    className={cn({ [styles.error_border]: errors.description })}
                    placeholder='Please enter your description task'
                    {...register('description')}
                />
            </div>
            <div className={styles.footer}>
                <div className={styles.input_block}>
                    {Boolean(errors.date_completion) &&
                        <span className={styles.error}>{errors.date_completion.message}</span>}
                    <input
                        className={cn({ [styles.error_border]: errors.date_completion })}
                        type="date"
                        {...register('date_completion')}
                    />
                </div>
                <button type="submit" className={styles.submit}>add task</button>
            </div>
        </form>
    )
}

export default Form

Form.propTypes = {
    'setModal': PropTypes.func.isRequired,
    'editTaskId': PropTypes.string,
}
