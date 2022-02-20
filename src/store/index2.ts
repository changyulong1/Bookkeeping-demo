
import recordList from "@/store/recordList";
import tagList from "@/store/tagList";

const store={
   ...recordList,
    ...tagList
}
export default  store