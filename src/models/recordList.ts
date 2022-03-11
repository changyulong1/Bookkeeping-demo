import clone from "@/lid/clone";

const name = "recordList";
const recordList = {
    data: [] as RecordID[],
    create(record: RecordID) {
        const record2: RecordID = clone(record);
        record2.createAt = new Date().toISOString();
        this.data.push(record2);
        this.setLanguage()
    },
    getLanguage() {
        this.data = JSON.parse(window.localStorage.getItem(name) || '[]') as RecordID[];
        return this.data;
    },
    setLanguage() {
        window.localStorage.setItem(name, JSON.stringify(this.data));
    }
};
export default recordList;