import sharedStyles from './../../Shared/styles.module.css'


const LargeModuleTemplate = ({children, backgroundColor}: {children: any, backgroundColor?: string}) => {
    return <div style={(backgroundColor)? {background: backgroundColor} : undefined}>
        <div className={sharedStyles.max_width_container}>
            {children}
        </div>
    </div>
}

export default LargeModuleTemplate