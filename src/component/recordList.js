import useDeleteRecords from "../hooks/useDeleteRecords";
import useEditRecords from "../hooks/useEditRecords";
import PhoneCard from "./inputPhoneCard";

const RecordList = (props) => {
    const {delRecord, data, loading, error} = useDeleteRecords()

    const deleteHandler = (index) => {
        delRecord(index);
    };

    const {editRecord, data2, loading2, error2} =  useEditRecords();

    const EditRecordHandler = (index) => {
        editRecord(index,{
            "name": "Tests",
            "surname": "Smirnova",
            "phone": "+38098736954"
        });
    }

    return (
        <div>
            {props.recordList?.data &&
                props.recordList.data.map((record, index) => (<>
                        <PhoneCard key={`phone-card-${index}`}>{record.name} {record.phone}</PhoneCard>
                        <button onClick={() => deleteHandler(index)}>Delete</button>
                        <button onClick={() =>  EditRecordHandler(index)}>Edit</button>
                    </>
                ))}
        </div>
    );
};

export default RecordList;