import { useState } from "react";
import axios from 'axios';
import useFetchRecords from "./useFetchRecords";

const useEditRecords = (reload) => {
    const [dataSave, setDataSave] = useState(null);
    const [loadingSave, setLoadingSave] = useState(false);
    const [errorSave, setErrorSave] = useState(undefined);

    const editRecord = (id, dataSave) => {
        setLoadingSave(true);
        axios.put(`records/${id}`, dataSave).then((resp) => {
            setDataSave(resp);
            setLoadingSave(false);
            reload();
        });
    }

    return [ editRecord, dataSave, loadingSave, errorSave ];
};


export default useEditRecords;