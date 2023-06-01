import styles from './lib/styles.module.css'


const TextAndIconButton = ({ text, Icon }: { text?: string, Icon: any }) => {
    return <div className={styles.button_elements_container}>
        <span>{text || ''}</span>
        <Icon />
    </div>
}

export default TextAndIconButton