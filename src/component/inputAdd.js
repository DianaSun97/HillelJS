import useAddRecords from "../hooks/useAddRecords";
import {useState} from "react";

const AddRecordForm = () => {
    const {addRecord, data, loading, error} = useAddRecords();
    const [formValue, setFormValue] = useState({
        "name": `User-${Math.round(100*Math.random())}`,
        "surname": "wild",
        "phone": `+380${Math.round(100000000*Math.random())}`
    });
    const addRecordHandler = () => {
        addRecord(formValue);
    }

    const handleEdit = (event) => {
        const { name, value } = event.target;
        setFormValue((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const { name, surname, phone } = formValue;

    return (<>
    <input
        type="text"
        name="name"
        placeholder="Your name"
        onChange={handleEdit}
        value={name} />
    <br />
    <input
        type="text"
        name="surname"
        placeholder="Your surname"
        onChange={handleEdit}
        value={surname} />
    <br />
    <input
        type="number"
        name="phone"
        placeholder="Your phone"
        onChange={handleEdit}
        value={phone} />
        <button onClick={addRecordHandler}>Add record</button>
    </>)
}

export default AddRecordForm;