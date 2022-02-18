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
        const names = this.dataList.map(data => data.name)
        if(names.indexOf(name)>=0){return 'duplicated'}
        this.dataList.push({id:name,name:name})
        console.log(this.dataList)
        this.setLanguage()
        return 'success'
    },
    setLanguage() {
        window.localStorage.setItem(name, JSON.stringify(this.dataList));
    }
};
export default models;