import React from 'react'
import { useForm } from 'react-hook-form'
import { EMAIL_REGEX } from '../../consts/validation.consts'
import styles from './delivery.module.css'

const Delivery = () => {
    const { register, handleSubmit, errors } = useForm()

    const onSumbit = data => console.log('Submit: ', data)

    return (
        <div className={styles.root}>
            <h2>Доставка</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSumbit)}>
                <div className="form-field">
                    <label htmlFor="name">ФИО получателя</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="input"
                        ref={register({ required: true })}
                    />
                    {errors.name && <div className="form-field__error">Заполните ФИО</div>}
                </div>
                <div className="form-field">
                    <label htmlFor="name">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        className="input"
                        ref={register({ required: true, pattern: EMAIL_REGEX })}
                    />
                    {errors.email?.type === 'required' && <div className="form-field__error">Заполните email</div>}
                    {errors.email?.type === 'pattern' && <div className="form-field__error">Некорректный формат email</div>}
                </div>
                <div className="form-field">
                    <label htmlFor="type">Тип доставки</label>
                    <select
                        id="type"
                        name="type"
                        className="input"
                        ref={register({ required: true })}
                    >
                        <option value="delivery">Курьером</option>
                        <option value="pickup">Самовывоз</option>
                    </select>
                    {errors.type && <div className="form-field__error">Выберите тип доставки</div>}
                </div>
                <button type="submit" className={`button ${styles.submitButton}`}>
                    Подтвердить
                </button>
            </form>
        </div>
    )
}

export default Delivery
