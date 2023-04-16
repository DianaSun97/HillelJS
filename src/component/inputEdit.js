import useAddRecords from "../hooks/useAddRecords";
import {useState} from "react";
import useEditRecords from "../hooks/useEditRecords";

const EditRecordForm = (props) => {
    const [editRecord, data, loading, error] = useEditRecords(props.reload);
    const [formValue, setFormValue] = useState(props.oldData);
    // const [formValue, setFormValue] = useState({});
    const editRecordHandler = () => {
        editRecord(formValue.index, formValue);
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
            type="text"
            name="phone"
            placeholder="Your phone"
            onChange={handleEdit}
            value={phone} />
        <button onClick={editRecordHandler}>Save</button>
    </>)
}

export default EditRecordForm;