import { useState } from "react";
import axios from 'axios';

const useEditRecords = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const editRecord = (userID, editUser) => {
        setLoading(true);
        axios.put(`records/${userID}`, editUser).then((resp) => {
            setData(resp);
            setLoading(false);
        });
    }

    return { editRecord, data, loading, error };
};

export default useEditRecords;
