import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";

const CourseList = () => {
  const { quantity, cardItems, totalPrice } = useSelector(
    (store) => store.card
  );
  return (
    <>
      {quantity < 1 ? (
        <section>
          <header className="header-div">
            <h2>sepet boş</h2>
          </header>
        </section>
      ) : (
        <section>
          <header className="header-div">
            <h2>Sepetim</h2>
          </header>
          <div>
            {cardItems.map((item) => {
              return (
                <div key={item.id} className="course-item-div">
                  <CourseItem
                    title={item.title}
                    id={item.id}
                    price={item.price}
                    img={item.img}
                    quantity={item.quantity}
                  />
                </div>
              );
            })}
          </div>
          <footer className="footer">
            <hr />
            <div>
              <div>
                <h4>
                  Toplam Tutar <span>{totalPrice} TL</span>
                </h4>
              </div>
              <button>Temizle</button>
            </div>
          </footer>
        </section>
      )}
    </>
  );
};

export default CourseList;
