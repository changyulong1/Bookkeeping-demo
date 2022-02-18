const name = "recordList";
const model = {
    getLanguage() {
        return JSON.parse(window.localStorage.getItem(name) || '[]') as RecordID[];
    },
    setLanguage(data:RecordID[]) {
        window.localStorage.setItem(name, JSON.stringify(data));
    }
};
export default model;