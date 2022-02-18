const name = "recordList";
type RecordI = {
    dataList: string[]
    getLanguage:()=> string[]
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
        if(this.dataList.indexOf(name)>=0){return 'duplicated'}
        this.dataList.push(name)
        this.setLanguage()
        return 'success'
    },
    setLanguage() {
        window.localStorage.setItem(name, JSON.stringify(this.dataList));
    }
};
export default models;