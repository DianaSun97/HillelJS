import useAddRecords from "../hooks/useAddRecords";

const AddRecordForm = () => {
    const {addRecord, data, loading, error} = useAddRecords();

    const addRecordHandler = () => {
        addRecord({
            "name": `User-${Math.round(100*Math.random())}`,
            "surname": "wild",
            "phone": `+380${Math.round(100000000*Math.random())}`
        });
    }

    return (<>
        <button onClick={addRecordHandler}>Add record</button>
    </>)
}

export default AddRecordForm;