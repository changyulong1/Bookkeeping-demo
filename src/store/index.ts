import Vue from 'vue';
import Vuex from 'vuex';
import createId from "@/lid/createId";
import clone from "@/lid/clone";
import router from "@/router";

import iconlist from "@/store/iconlist";

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        iconsList: {inList: [], outList: []},
        recordList: [],
        tag: undefined,
        tagName: undefined

    } as RootState,
    mutations: {
        //tag列表
        getLanguage(state) {
            if (!window.localStorage.getItem('iconsList')) {
                console.log(2);
                iconlist.outList.map((time) => {
                    store.commit('createTag', {time, iconName: 'outList'});
                });
                iconlist.inList.map((time) => {
                    store.commit('createTag', {time, iconName: 'inList'});
                });
            }

            state.iconsList = JSON.parse(window.localStorage.getItem('iconsList') || '{"inList":[],"outList":[]}');
            console.log(state.iconsList)
            return state.iconsList;
        },
        setLanguage(state) {
            window.localStorage.setItem('iconsList', JSON.stringify(state.iconsList));
        },
        getTag(state, payload: { id: string, iconName: IconName }) {
            const {id, iconName} = payload;
           state.tag = state.iconsList[iconName].filter(time=>time.id===id)[0];
        },
        createTag(state, payload: { time: { name: string, title: string }, iconName: IconName }) {
            const {time, iconName} = payload;
            const names = state.iconsList[iconName].map(data => data.name);
            if (names.indexOf(time.name) >= 0) {
                store.state.tagName = null;
            } else {
                if(time.name!==''&&time.title!==''){
                    const id = createId().toString();
                    state.iconsList[iconName].push({id: id, name: time.name, title: time.title});
                    store.commit('setLanguage');
                    store.state.tagName = undefined;
                }

            }
        },
        removeTag(state, payload: { id: string, iconName: IconName }) {
            const {id, iconName} = payload;
            let index = 0;
            const data = state.iconsList[iconName];
            for (let i = 0; i < data.length; i++) {
                if (data[i].id === id) {
                    index = i;
                    break;
                }
            }
            if (index >= 0) {
                state.iconsList[iconName].splice(index, 1);
                store.commit('setLanguage');
                router.back();
            } else {
                window.alert("没有这个标签");
            }

        },
        updateTag(state, payload: { id: string, name: string,title:string, iconName: IconName }) {
            const {id, name,title, iconName,} = payload;
            const listId = state.iconsList[iconName].map(data => data.id);
            if (listId.indexOf(id) >= 0) {
                const names = state.iconsList[iconName].map(data => data.title);
                if (names.indexOf(title) >= 0) {
                    return "重复";
                } else {
                    const tag = state.iconsList[iconName].filter(data => data.id === id)[0];
                    tag.name = name;
                    tag.title = title
                    store.commit('setLanguage');
                    return "成功";
                }
            } else {
                return "没有标签";
            }
        },
        //recordList列表方法
        getRecordList(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordID[];
        },
        setRecordList(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
        },
        create(state, record: RecordID) {
            console.log(record)
            const record1 = clone(record)
            const id = createId().toString();
            record1.id=id
            state.recordList.push(record1);
            store.commit('setRecordList');
        },
    },
    actions: {},
    modules: {}
});

export default store;
