import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CourseList from "./components/CourseList";
import Header from "./components/Header";
import { useEffect } from "react";
import { calculatePrice } from "./control/cardSlice";

function App() {
  const { cardItems } = useSelector((store) => store.card);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculatePrice());
  }, [cardItems]);
  return (
    <>
      <Header />
      <CourseList />
    </>
  );
}

export default App;
