import { SearchOutlined } from "@ant-design/icons"
import styles from './lib/styles.module.css'

const HeaderSearchInput = () => {
    return <div className={styles.container}>
        <SearchOutlined />
        <input />
    </div>
}

export default HeaderSearchInput