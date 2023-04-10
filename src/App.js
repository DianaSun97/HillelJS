import logo from "./logo.svg";
import "./App.css";

import useFetchRecords from "./hooks/useFetchRecords";
import useAddRecords from "./hooks/useAddRecords";
import useDeleteRecords from "./hooks/useDeleteRecords";
import useEditRecords from "./hooks/useEditRecords";

const PhoneCard = (props) => {
  return <div>{props.children}</div>;
};

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

const PhoneBookRecords = () => {
  const {data, loading, error} = useFetchRecords();

  if (error) {
    return <h1 style={{ color: "red" }}>We have a problem</h1>;
  }

  console.log(data);

  return <>{loading ? <p>loading...</p> : <RecordList recordList={data} />}</>;
};

function App() {
  return (
    <div className="App">
      Demo
      <AddRecordForm />
      <PhoneBookRecords />
    </div>
  );
}

export default App;
