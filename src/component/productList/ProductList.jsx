import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
          These are some of my project which I have build using MERN tech stack
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} link={item.link} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
