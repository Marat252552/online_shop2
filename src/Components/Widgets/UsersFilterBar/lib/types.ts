import { Element_T } from "../../../Shared/types"

export type Props_T = {
    statuses: Element_T[],
    setSelectedStatuses: React.Dispatch<React.SetStateAction<string[]>>, 
    selectedStatuses: string[],
}