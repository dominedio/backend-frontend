import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProdottoService } from '../../prodotti/prodotto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  submitted = false;
  productForm: FormGroup;

  constructor(
    private prodottoService: ProdottoService,
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone
  ) { }

  ngOnInit() { }

  prodForm() {
    this.productForm = this.fb.group({
      nome: ['', [Validators.required]],
      venditore: ['', [Validators.required]],
      prezzo: [null, [Validators.required]],

    })
  }

  get myForm() {
    return this.productForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.productForm.valid) {
      return false
    }
    else {
      this.prodottoService.insertProdotto(this.productForm.value).subscribe(
        (res) => {
          console.log('Product successesfully add!')
          this.ngZone.run(() => this.router.navigateByUrl('/product-list'))
        }, (error) => {
          console.log(error)
        }
      )
    }
  }

}
