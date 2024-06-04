import "../App.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../control/cardSlice";

const CourseItem = (props) => {
  const { title, id, quantity, img, price } = props;

  const dispatch = useDispatch();
  return (
    <>
      <div className="card-div">
        <div className="img-div">
          <img src={img} alt="" className="img" />
        </div>
        <div className="actions-div">
          <h3 className="title-price">{title}</h3>
          <h4>{price} TL</h4>
          <div className="price-up-down">
            <button
              className="button"
              onClick={() => {
                dispatch(increase(id));
              }}
            >
              <ArrowDropUpIcon />
            </button>
            <p className="quantity">{quantity}</p>
            <button
              className="button"
              onClick={() => {
                dispatch(decrease(id));
              }}
            >
              <ArrowDropDownIcon />
            </button>
            <button
              className="delete-button"
              onClick={() => {
                dispatch(removeItem(id));
              }}
            >
              sil
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseItem;
