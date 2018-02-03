import { Component, OnInit } from '@angular/core';
import { Pizza } from '../shared/models/pizza.model';
import { PizzaService } from '../shared/services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  pizzas: Array<Pizza>;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.pizzas = this.pizzaService.getPizzas();
  }

}