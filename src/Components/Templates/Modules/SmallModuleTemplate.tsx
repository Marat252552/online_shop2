import sharedStyles from './../../Shared/styles.module.css'


const SmallModuleTemplate = ({children}: {children: any}) => {
    return <div>
        <div className={sharedStyles.small_max_width_container}>
            {children}
        </div>
    </div>
}

export default SmallModuleTemplate