import SmallModuleTemplate from "../../Templates/Modules/SmallModuleTemplate"
import PageMainTemplate from "../../Templates/Pages/PageMainTemplate"
import Form from "./components/Form"


const CreateNewItemPage = () => {
    return <>
        <PageMainTemplate>
            <SmallModuleTemplate>

                <span style={{textAlign: 'center', fontSize: '30px'}}>Создание товара</span>
                <Form />
                
            </SmallModuleTemplate>
        </PageMainTemplate>
    </>
}

export default CreateNewItemPage