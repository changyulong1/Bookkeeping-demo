import tagList from "@/models/tagList";

export default {
    tagList: tagList.getLanguage(),
    getTag(id: string){
        return this.tagList.filter(data => data.id === id)[0];
    },
    createTag: (name: string) => {
        if (name) {
            const message = tagList.create(name);
            if (message === "duplicated") {
                window.alert("标签重复");
            } else {
                window.alert("添加成功");
            }
        }
    },
    removeTag: (id: string) => {
        return tagList.remove(id);
    },
    updateTag: (id: string, name: string) => {
        return tagList.update(id, name);
    }
}