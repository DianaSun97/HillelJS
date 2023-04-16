import { useEffect, useState } from "react";
import axios from 'axios';

const useFetchRecords = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const reload = ()=>{
    setLoading(true);
    axios.get('records/').then((resp) => {
      setData(resp);
      setLoading(false);
    });
  }

  useEffect(reload, []);

  return [ data, loading, error, reload ];
};

export default useFetchRecords;
