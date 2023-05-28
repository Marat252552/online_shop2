import NormalVersion from "./models/NormalVersion"
import sharedStyles from './../../Shared/styles.module.css'


const Header = () => {
    return <div className={sharedStyles._container}>
        <NormalVersion />
    </div>
}

export default Header