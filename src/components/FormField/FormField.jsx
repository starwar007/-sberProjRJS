import styles from './formField.module.css';

const FormField = ({title, name, pattern, register, errors, type}) => {
    return (
        <div className={styles.input_wrapper}>
            <label>{title}</label>
            <input className={styles.input}
                {
                    ...register(name, {
                        required: "Обязательное поле",
                        pattern
                })}
             type= {type || "text" }
             placeholder={title}
             />
             <div className={styles.errorMessage}>
                {errors?.[name] && (
                    <p>{errors?.[name]?.message}</p>
                )}
            </div>
        </div>
    )
}

export default FormField