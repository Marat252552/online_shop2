import { Checkbox } from '@mui/material'
import styles from './lib/styles.module.css'


const CustomCheckbox = ({text}: {text?: string}) => {
    return <div className={styles.container}>
        <Checkbox color='default' defaultChecked />
        {text && <span>{text}</span>}
    </div>
}

export default CustomCheckbox