import recordList from "@/models/recordList";

export default {
    dataList: recordList.getLanguage(),
    createData:(record:RecordID) =>{recordList.create(record)},
}