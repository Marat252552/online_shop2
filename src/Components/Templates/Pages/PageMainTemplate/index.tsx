import Footer from "../../../Widgets/Footer"
import Header from "../../../Widgets/Header"
import styles from './lib/styles.module.css'


const PageMainTemplate = ({ children }: { children: JSX.Element }) => {
    return <>
        <div className={styles.container}>
            <div>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    </>
}

export default PageMainTemplate