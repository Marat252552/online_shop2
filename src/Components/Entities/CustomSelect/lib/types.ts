
export type Props_T = {
    selectedValues: string[],
    setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>, 
    Options: Option_T[],
    placeholder: string
}

export type Option_T = {
    _id: string,
    name: string
}