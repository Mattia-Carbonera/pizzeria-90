import { pizzas } from "../../db/pizzas";
import PizzasCard from "../components/pizzasCard";

export default function OrderPage() {
  return (
    <div className="container">
      <div className="order-container">
        <h1>Ordina</h1>

        <div className="pizzas-container">
          {pizzas.map((el) => (
            <PizzasCard key={el.id} data={el} />
          ))}
        </div>
      </div>
    </div>
  );
}
