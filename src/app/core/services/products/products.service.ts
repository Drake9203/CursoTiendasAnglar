import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from "../../../product/product.model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class ProductsService {

  private urlApi = environment.urlApi;
  constructor(
    private http: HttpClient
  ) {}

  getAllProducts() {
    return this.http.get<Product[]>(`${this.urlApi}/products`);
  }

  getProductById(id: string) {
    return this.http.get<Product>(`${this.urlApi}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(`${this.urlApi}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put<Product>(`${this.urlApi}/products/${id}`, changes);
  }

  deletProduct(id: string) {
    return this.http.delete(`${this.urlApi}/products/${id}`);
  }
}
