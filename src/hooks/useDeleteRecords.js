import { useState } from "react";
import axios from 'axios';
import useFetchRecords from "./useFetchRecords";


const useDeleteRecords = (reload) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const delRecord = (id) => {
    setLoading(true);
    axios.delete(`records/${id}`).then((resp) => {
      setData(resp);
      setLoading(false);
      reload();
    });
  }

  return [ delRecord, data, loading, error ];
};

export default useDeleteRecords;
