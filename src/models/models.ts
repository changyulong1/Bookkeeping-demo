const name = "tagList";
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
}
const models: RecordI = {
    dataList: [],
    getLanguage() {
        this.dataList = JSON.parse(window.localStorage.getItem(name) || '[]');
        return this.dataList;
    },
    create(name) {
        const names = this.dataList.map(data => data.name);
        console.log(names);
        if (names.indexOf(name) >= 0) {
            return 'duplicated';
        }
        this.dataList.push({id: name, name: name});
        console.log(this.dataList);
        this.setLanguage();
        return 'success';
    },
    update(id: string, name: string) {
        const listId = this.dataList.map(data => data.id);
        if (listId.indexOf(id) >= 0) {
            console.log(1)
            const names = this.dataList.map(data => data.name);
            if (names.indexOf(name) >= 0) {
                console.log(2)
                return "重复";
            } else {
                const tag = this.dataList.filter(data => data.id === id)[0];
                tag.name = name;
                this.setLanguage()
                return "成功";
            }
        } else {
            return "没有标签";
        }
    },
    setLanguage() {
        window.localStorage.setItem(name, JSON.stringify(this.dataList));
    }
};
export default models;