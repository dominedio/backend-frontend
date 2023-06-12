import { Component, OnInit } from '@angular/core';
import { ProdottoService } from './prodotto.service';
import { Prodotto } from './Prodotto';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  prodotti: Prodotto[] = [];

  constructor(private prodottoService: ProdottoService) { }

  ngOnInit() {
    /*
    this.prodottoService.getAllProdotti().subscribe((data: Prodotto[]) => {
      console.log(data);
      this.prodotti = data;
    });
    */
    this.prodottoService.getAllProdotti().subscribe(
      (serviceProductData: Prodotto[]) => {
              console.log(serviceProductData);
              this.prodotti = serviceProductData;
              }
      );
  }
}
