import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import icon from "@/components/Icon.vue";
import tagList from "@/models/tagList";
import recordList from "@/models/recordList";

Vue.config.productionTip = false;
Vue.component("Nav", Nav);
Vue.component("Layout", Layout);
Vue.component("Icon", icon);

window.dataList = recordList.getLanguage();
window.createData = (record:RecordID) =>{recordList.create(record)}

//获取tag数据
window.tagList = tagList.getLanguage();
window.getTag = (id: string) => {
    return window.tagList.filter(data => data.id === id)[0];
};
//创建tag数据
window.createTag = (name: string) => {
    if (name) {
        const message = tagList.create(name);
        if (message === "duplicated") {
            window.alert("标签重复");
        } else {
            window.alert("添加成功");
        }
    }
};
//删除tag数据
window.removeTag = (id: string) => {
    return tagList.remove(id);
};
//编辑tag
window.updateTag = (id: string, name: string) => {
    return tagList.update(id, name);
};
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
