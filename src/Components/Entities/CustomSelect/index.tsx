import { Select } from 'antd';
import { Props_T } from './lib/types';


const CustomSelect = ({ placeholder, selectedValues, setSelectedValues, Options }: Props_T) => {

    return (
        <Select
            mode="multiple"
            placeholder={placeholder}
            value={selectedValues}
            onChange={(values) => {
                console.log(values)
                setSelectedValues(values)
            }}
            style={{ width: '100%' }}
            options={Options.map((item) => ({
                value: item._id,
                label: item.name,
            }))}
        />
    );
};

export default CustomSelect;