import { Pizza } from '../models/pizza.model';

export class PizzaService {

    getPizzas(): Array<Pizza> {
        let pizzaList:Array<Pizza> = new Array<Pizza>(100);
        for(let i=0; i < pizzaList.length; i++) {
            pizzaList[i] = new Pizza();
            pizzaList[i].orderNumber = i + 1;
            pizzaList[i].diameter = 10 + Math.floor(41 * Math.random());
            pizzaList[i].slices = 3 + Math.floor(6 * Math.random());
            pizzaList[i].toppings = 0 + Math.floor(5 * Math.random());
            pizzaList[i].price = pizzaList[i].calculatePrice();
        }
        return pizzaList;
    }

}