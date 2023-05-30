

const Specification = ({value, feature}: {value: string, feature: string}) => {
    return <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
        <div>{feature}</div>
        <div>{value}</div>
    </div>
}

export default Specification