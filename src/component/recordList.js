import useDeleteRecords from "../hooks/useDeleteRecords";
import PhoneCard from "./inputPhoneCard";
import useFetchRecords from "../hooks/useFetchRecords";
import AddRecordForm from "./inputAdd";
import {useState} from "react";
import EditRecordForm from "./inputEdit";

const RecordList = (props) => {
    const [editing, setEditing] = useState(null);
    const [data, loading, error, reload] = useFetchRecords();
    const [delRecord, deldata, delloading, delerror] = useDeleteRecords(reload)

    if (error) {
        return <h1 style={{ color: "red" }}>We have a problem</h1>;
    }
    console.log(data);


    const deleteHandler = (index) => {
        delRecord(index);
    };

    const EditRecordHandler = (record, index) => {
        setEditing({
            ...record,
            index: index,
        });
    }

    const saveDone = () => {
        setEditing(null);
        reload();
    }
    return <>{loading ? <p>loading...</p> :
        <>
            {editing ? <EditRecordForm reload={saveDone} oldData={editing} /> : <AddRecordForm reload={reload} />}
            <div>
                {data?.data &&
                    data.data.map((record, index) => (<>
                            <PhoneCard key={`phone-card-${index}`}>{record.name} {record.phone}</PhoneCard>
                            <button onClick={() => deleteHandler(index)}>Delete</button>
                            <button onClick={() =>  EditRecordHandler(record, index)}>Edit</button>
                        </>
                    ))}
            </div>
        </>
    }</>;
};

export default RecordList;