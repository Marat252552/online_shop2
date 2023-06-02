import React, { useState } from 'react';
import { Select } from 'antd';
import { useEffect } from 'react'

type Option_T = {
    _id: string,
    name: string
}

const Options: Option_T[] = [
    { _id: 'dwadawddgfs', name: 'Холодильники' },
    { _id: 'олцауцkalwe', name: 'Смартфоны' }
];

const CustomSelect = () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [selectedLabels, setSelectedLabels] = useState<string[]>([])

    const filteredOptions = Options.filter((option) => {
        return !selectedValues.find(el => el === option._id)
    });

    return (
        <Select
            mode="multiple"
            placeholder="Inserted are removed"
            value={selectedValues}
            onChange={(values) => {
                console.log(values)
                setSelectedValues(values)
            }}
            style={{ width: '100%' }}
            options={filteredOptions.map((item) => ({
                value: item._id,
                label: item.name,
            }))}
        />
    );
};

export default CustomSelect;