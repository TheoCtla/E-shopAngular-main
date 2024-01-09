import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    new Product(
      "Café",
      "C'est un café plutôt bon",
      "https://www.shutterstock.com/image-photo/cappuccino-coffee-beautiful-glass-on-600nw-2017631294.jpg",
      0,
      false,
      [{ taille: "S", price: 2 },{ taille: "M", price: 3 },{ taille: "L", price: 4 }],
      new Date("2023-12-19")
    ),
    new Product(
      "Cappuccino",
      "Ce cappuccino est très bon et très fort",
      "https://media.istockphoto.com/id/1028658748/fr/photo/caffe-latte-stratifi%C3%A9e.jpg?s=612x612&w=0&k=20&c=GaIhPKevWnubveC8-dZ8PVnoDCoOE0Vne7ssfXu046w=",
      0,
      false,
      [{ taille: "S", price: 5 },{ taille: "M", price: 7 }],
      new Date("2023-12-20")
    ),
    new Product(
      "Macchiato",
      "Ce Machiatto est succulent",
      "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?cs=srgb&dl=pexels-tyler-nix-2396220.jpg&fm=jpg",
      0,
      false,
      [{ taille: "S", price: 8 }],
      new Date("2023-12-18")
    )
  ]

  getProducts() {
    return this.products;
  }
  onAddLike(myProduct: Product) {
    if (myProduct.isLiked) myProduct.likes--;
    else {
      myProduct.likes++;
    }
    myProduct.isLiked = !myProduct.isLiked;
  }
}
