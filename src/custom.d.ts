type RecordID = {
    tags: string[]
    notes: string
    type: string
    amount: number
    createAt: Date
}
type dataid = {
    id: string
    name: string
}
type RecordI = {
    dataList: dataid[]
    getLanguage: () => dataid[]
    create: (name: string) => 'success' | 'duplicated'
    setLanguage: () => void
    update: (id: string, name: string) => string
    remove: (id: string) => boolean
}
interface Window {
    tagList: dataid[];
}