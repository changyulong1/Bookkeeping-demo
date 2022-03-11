import clone from "@/lid/clone";
const name = "recordList";
 const recordList={
    data: [] as RecordID[],
    etLanguage() {
        this.data = JSON.parse(window.localStorage.getItem(name) || '[]') as RecordID[];
        return this.data;
    },
    create(record: RecordID) {
        console.log(record)
        const record2: RecordID = clone(record);
        record2.createAt = new Date().toISOString();
        this.data.push(record2);
        this.setRecordList()
    },
     setRecordList() {
         window.localStorage.setItem(name, JSON.stringify(this.data));
    }
}
recordList.etLanguage()
export default recordList