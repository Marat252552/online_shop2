import sharedStyles from './../../Shared/styles.module.css'


const VisibleOnFullscreenVersion = ({children}: {children: any}) => {
    return <div className={sharedStyles.visible_on_fullscreen_version}>
        {children}
    </div>
}

export default VisibleOnFullscreenVersion