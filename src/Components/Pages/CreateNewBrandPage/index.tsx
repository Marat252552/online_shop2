import SmallModuleTemplate from "../../Templates/Modules/SmallModuleTemplate"
import PageMainTemplate from "../../Templates/Pages/PageMainTemplate"
import Form from "./components/Form"



const CreateNewBrandPage = () => {
    return <>
        <PageMainTemplate>
            <SmallModuleTemplate>

                <span style={{textAlign: 'center', fontSize: '30px'}}>Создание производителя</span>
                <Form />
                
            </SmallModuleTemplate>
        </PageMainTemplate>
    </>
}

export default CreateNewBrandPage