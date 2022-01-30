import clsx from 'clsx'
import styles from './Button.module.css'

function Button({primary,children,onClick})
{
    const classes = clsx(styles.btn,'margin-5',{
        [styles.primary]:primary,
    })
    return(
        <button onClick={onClick} className={classes}>{children}</button>
    )
}
export default Button