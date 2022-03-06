import { useContext } from "react";
import { ContextProducts } from "../../context/contextProducts";
import Button from "@material-tailwind/react/Button";

const Food = () => {
  const globalContext = useContext(ContextProducts);
  const menuFood = globalContext.products.menuArrays.food
  const menuSideDish = globalContext.products.menuArrays.sideDish
  const menuExtras = globalContext.products.menuArrays.extra

  return (
    <>
      <h2 className="font-bold m-5 text-gray-600">Sandwich y Hamburguesas</h2>
      {menuFood.map((dish) => {
        return (
          <Button
            className="m-2 ml-5 mb-3 p-2"
            onClick={() => globalContext.addProducts(dish)}
            key={dish.id}
            color="teal"
            buttonType="filled"
            size="sm"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light">
            <div className="flex justify-around items-center ">
              <span className="flex item w-64 h-8 items-center">{dish.name}</span>
              <span className="flex item w-8 h-8 items-center">${dish.price}</span>
            </div>
          </Button>
        );
      })}
      <h2 className="font-bold m-5 text-gray-600">Acompañamientos</h2>
      {menuSideDish.map((sideDish) => {
        return (
          <Button
            className="m-2 ml-5 mb-3 p-2"
            onClick={() => globalContext.addProducts(sideDish)}
            key={sideDish.id}
            color="teal"
            buttonType="filled"
            size="sm"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light">
            <div className="flex justify-around items-center ">
              <span className="flex item w-64 h-8 items-center">{sideDish.name}</span>
              <span className="flex item w-8 h-8 items-center">${sideDish.price}</span>
            </div>
          </Button>
        );
      })}
      <h2 className="font-bold m-5 text-gray-600">Extras</h2>
      {menuExtras.map((extra) => {
        return (

          <Button
            className="m-2 ml-5 mb-3 p-2"
            onClick={() => globalContext.addProducts(extra)}
            key={extra.id}
            color="teal"
            buttonType="filled"
            size="sm"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light">
            <div className="flex justify-around items-center ">
              <span className="flex item w-64 h-8 items-center">{extra.name}</span>
              <span className="flex item w-8 h-8 items-center">${extra.price}</span>
            </div>
          </Button>

        );
      })}
    </>
  );
};

export default Food;