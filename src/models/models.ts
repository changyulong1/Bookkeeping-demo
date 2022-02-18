const name = "recordList";
type dataid = {
    id:string
    name:string
}
type RecordI = {
    dataList: dataid[]
    getLanguage:()=> dataid[]
    create:(name:string)=> 'success' | 'duplicated'
    setLanguage:()=>void
}
const models:RecordI = {
    dataList: [],
    getLanguage() {
        this.dataList = JSON.parse(window.localStorage.getItem(name) || '[]');
        return this.dataList;
    },
    create(name){
        const names = this.getLanguage().map(data => data.id)
        if(names.indexOf(name)>=0){return 'duplicated'}
        this.dataList.push({id:name,name:name})
        this.setLanguage()
        return 'success'
    },
    setLanguage() {
        window.localStorage.setItem(name, JSON.stringify(this.dataList));
    }
};
export default models;