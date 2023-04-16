import useDeleteRecords from "../hooks/useDeleteRecords";
import useEditRecords from "../hooks/useEditRecords";
import PhoneCard from "./inputPhoneCard";
import useFetchRecords from "../hooks/useFetchRecords";
import AddRecordForm from "./inputAdd";

const RecordList = (props) => {
    const [data, loading, error, reload] = useFetchRecords();
    const [delRecord, deldata, delloading, delerror] = useDeleteRecords(reload)
    const [editRecord, editdata, editloading, editerror] =  useEditRecords(reload);

    if (error) {
        return <h1 style={{ color: "red" }}>We have a problem</h1>;
    }
    console.log(data);


    const deleteHandler = (index) => {
        delRecord(index);
    };

    const EditRecordHandler = (index) => {
        editRecord(index,{
            "name": "Tests",
            "surname": "Smirnova",
            "phone": "+38098736954"
        });
    }
    return <>{loading ? <p>loading...</p> :
        <>
            <AddRecordForm reload={reload} />
            <div>
                {data?.data &&
                    data.data.map((record, index) => (<>
                            <PhoneCard key={`phone-card-${index}`}>{record.name} {record.phone}</PhoneCard>
                            <button onClick={() => deleteHandler(index)}>Delete</button>
                            <button onClick={() =>  EditRecordHandler(index)}>Edit</button>
                        </>
                    ))}
            </div>
        </>
    }</>;
};

export default RecordList;