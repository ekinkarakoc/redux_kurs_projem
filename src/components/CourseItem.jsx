import "../App.css";

const CourseItem = (props) => {
  const { title, id, quantity, img } = props;
  return (
    <>
      <div className="card-div">
        <div className="img-div">
          <img src={img} alt="" className="img" />
        </div>
        <div>
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
};

export default CourseItem;
