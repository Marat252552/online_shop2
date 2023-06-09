


const Body = () => {
    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h1>Вы менеджер</h1>
        <p>Вы можете создавать и удалять производителей, категории и товары</p>
        <p>Удаление категории или производителя удалит все связанные с ним товары</p>
    </div>
}

export default Body