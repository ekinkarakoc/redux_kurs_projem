import "../App.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const CourseItem = (props) => {
  const { title, id, quantity, img, price } = props;
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
            <button className="button">
              <ArrowDropUpIcon />
            </button>
            <p className="quantity">{quantity}</p>
            <button className="button">
              <ArrowDropDownIcon />
            </button>
            <button className="delete-button">sil</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseItem;
