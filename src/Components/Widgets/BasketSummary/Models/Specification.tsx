

const Specification = ({value, feature, isValueBold = false}: {value: any, feature: string, isValueBold?: boolean}) => {
    return <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
        <div>{feature}</div>
        <div style={(isValueBold)? {fontWeight: 'bold'} : undefined}>{value}</div>
    </div>
}

export default Specification