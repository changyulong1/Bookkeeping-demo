const name = "recordList";
type RecordI = {
    dataList: string[]
    getLanguage:()=> string[]
    setLanguage:()=>void
}
const models:RecordI = {
    dataList: [],
    getLanguage() {
        this.dataList = JSON.parse(window.localStorage.getItem(name) || '[]');
        return this.dataList;
    },
    setLanguage() {
        window.localStorage.setItem(name, JSON.stringify(this.dataList));
    }
};
export default models;