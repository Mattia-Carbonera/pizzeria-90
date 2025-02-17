export default function PizzasCard({ data }) {
  return (
    <div className="pizzas-card-container">
      <div className="pizzas-card-image">
        <img src={`/${data && data.img}`} alt="" />
      </div>

      <div className="pizzas-card-body">
        <h2>{data && data.name}</h2>
        <span>Ingredienti:</span>
        <ul>{data && data.ingredients.map((el) => <li>{el}</li>)}</ul>
      </div>

      <div
        className={
          data && data.isAvailable == true ? "d-none" : "not-available"
        }
      >
        <span>
          NON <br /> DISPONIBILE
        </span>
      </div>
    </div>
  );
}
