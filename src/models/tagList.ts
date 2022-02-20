import createId from "@/lid/createId";

const name = "tagList";
const tagList: RecordI = {
    dataList: [],
    getLanguage() {
        this.dataList = JSON.parse(window.localStorage.getItem(name) || '[]');
        return this.dataList;
    },
    create(name) {
        const names = this.dataList.map(data => data.name);

        if (names.indexOf(name) >= 0) {
            return 'duplicated';
        }
        const id = createId().toString()
        this.dataList.push({id: id, name: name});
        this.setLanguage();
        return 'success';
    },
    update(id: string, name: string) {
        const listId = this.dataList.map(data => data.id);
        if (listId.indexOf(id) >= 0) {

            const names = this.dataList.map(data => data.name);
            if (names.indexOf(name) >= 0) {

                return "重复";
            } else {
                const tag = this.dataList.filter(data => data.id === id)[0];
                tag.name = name;
                this.setLanguage();
                return "成功";
            }
        } else {
            return "没有标签";
        }
    },
    remove(id: string) {
        let index = 0;
        const data = this.dataList;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                index = i;
                break;
            }
        }
        this.dataList.splice(index, 1);
        this.setLanguage()
        return true;
    },
    setLanguage() {
        window.localStorage.setItem(name, JSON.stringify(this.dataList));
    }
};
export default tagList;