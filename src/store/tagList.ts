import createId from "@/lid/createId";
const name = "iconsList";
const tagList = {
    dataList: {} as {inList:Tag[],outList:Tag[]},
    getLanguage() {
        this.dataList = JSON.parse(window.localStorage.getItem(name) || '[]');
        return this.dataList;
    },
    getTag(id: string,iconName:IconName) {
        return this.dataList[iconName].filter(data => data.id === id)[0];
    },
    createTag(name: string,title:string,iconName:IconName) {
        if (name) {
            // const message = iconsList.create(name);
            const names = this.dataList[iconName].map(data => data.name);
            if (names.indexOf(name) >= 0) {
                window.alert("标签名重复");
            } else {
                const id = createId().toString();
                this.dataList[iconName].push({id: id, name: name,title:title});
                this.setLanguage();
                window.alert("添加成功");
            }
        }
    },
    removeTag(id: string,iconName:IconName){
        // return iconsList.remove(id);
        let index = 0;
        const data = this.dataList[iconName];
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                index = i;
                break;
            }
        }
        this.dataList[iconName].splice(index, 1);
        this.setLanguage()
        return true;
    },
    updateTag(id: string, name: string,iconName:IconName){
        // return iconsList.update(id, name);
        const listId = this.dataList[iconName].map(data => data.id);
        if (listId.indexOf(id) >= 0) {
            const names = this.dataList[iconName].map(data => data.name);
            if (names.indexOf(name) >= 0) {
                return "重复";
            } else {
                const tag = this.dataList[iconName].filter(data => data.id === id)[0];
                tag.name = name;
                this.setLanguage();
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
tagList.getLanguage()
export default tagList;