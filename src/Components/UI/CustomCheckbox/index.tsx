import { Checkbox } from '@mui/material'
import styles from './lib/styles.module.css'


const CustomCheckbox = (props: {text?: string, register: any}) => {
    return <div className={styles.container}>
        <Checkbox {...props.register('remember')} color='default' defaultChecked />
        {props.text && <span>{props.text}</span>}
    </div>
}

export default CustomCheckbox