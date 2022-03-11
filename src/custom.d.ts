
type RootState = {
    recordList:RecordID[]
    tagList: Tag[]
    tag?:Tag
    tagName?:any
}

type RecordID = {
    tags: string[]
    notes: string
    type: string
    amount: number
    createAt: string
}
type Tag = {
    id: string
    name: string
}
type RecordI = {
    dataList: Tag[]
    getLanguage: () => Tag[]
    create: (name: string) => 'success' | 'duplicated'
    setLanguage: () => void
    update: (id: string, name: string) => string
    remove: (id: string) => boolean
}

interface Window {
    store:{
        tagList: Tag[];
        getTag: (id: string) => Tag;
        createTag: (name: string) => void;
        removeTag: (id: string) => boolean;
        updateTag: (id: string, name: string) => string;
        dataList: RecordID[];
        createData: (record: RecordID) => void;

    }

}