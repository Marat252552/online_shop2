import { Brand_T, Type_T } from "../../../Shared/types"

export type Props_T = {
    brands: Brand_T[] | undefined,
    types: Type_T[] | undefined,
    selectedBrands: string[],
    setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>, 
    selectedTypes: string[],
    setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>, 
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}