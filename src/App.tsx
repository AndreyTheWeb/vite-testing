import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, setData, setError } from "./store";

function App() {
  const data = useSelector((state: RootState) => state.data);
  const isError = useSelector((state: RootState) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      const postId = Math.floor(Math.random() * 10);
      const dataRow = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      if (!dataRow.ok) {
        dispatch(setError(true));
        return;
      }

      const dataToJson = await dataRow.json();
      console.log(dataToJson);
      dispatch(setData(dataToJson.body));
    };

    loadData();
  }, []);

  const MainData: React.FC = () => {
    if (!data) {
      return <div>plz wait data</div>;
    }
    if (isError) {
      return <div>Go home baby, service is not working</div>;
    }
    return <div>{data}</div>;
  };

  return (
    <div className="App">
      <MainData />
    </div>
  );
}

export default App;
