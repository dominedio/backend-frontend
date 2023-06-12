import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../../prodotti/prodotto.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: any=[];

  constructor(private prodottoService:ProdottoService) { 
    this.showproduct();
  }

  ngOnInit() {  }

  showproduct(){
    this.prodottoService.getAllProdotti().subscribe((data)=>
    this.product=data)
  }

  deleteproduct(Prodotto,index){
    if(window.confirm('Are you sure!')){
      this.prodottoService.deleteProdotto(Prodotto.id).subscribe((data)=>
        this.product.splice(index,1)
        )
    }
  }

}
