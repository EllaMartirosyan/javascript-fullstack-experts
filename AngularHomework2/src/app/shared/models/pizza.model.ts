export class Pizza {

    constructor(public orderNumber: number = 0, public diameter: number = 10, public slices: number = 3, public toppings: number = 0, public price: number = 0) {}

    public calculatePrice(): number {
        return this.diameter + (5 * this.toppings);
    }
}