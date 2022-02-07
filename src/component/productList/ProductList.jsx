import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque non enim at quisquam aut qui voluptates, neque incidunt id minima pariatur maiores.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} link={item.link} img={item.img}/>
        ))}
      
      </div>
    </div>
  );
};

export default ProductList;


