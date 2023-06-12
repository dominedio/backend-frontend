import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProdottoService } from '../../prodotti/prodotto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Prodotto } from '../../prodotti/prodotto';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  productdata: Prodotto[];
  id: number;
  private sub: any;
  ngZone: NgZone;

  constructor(
    private prodottoService: ProdottoService,
    public fb: FormBuilder,
    private router: Router,
    private actroute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.sub = this.actroute.params.subscribe(params => {
      this.id = +params['id'];                // (+) converts string 'id' to a number
    });

    this.editForm = this.fb.group({
      nome: ['', [Validators.required]],
      venditore: ['', [Validators.required]],
      prezzo: [null, [Validators.required]],

    })

    this.setEditForm(this.id);
  }

  get myForm() {
    return this.editForm.controls;
  }

  setEditForm(id) {
    this.prodottoService.getProdotto(id).subscribe(data => {
      this.editForm.setValue({
        nome: data['nome'],
        venditore: data['venditore'],
        prezzo: data['prezzo'],
      })
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      return false
    }
    else {
      if (window.confirm('Are you sure!')) {
        let id=this.actroute.snapshot.paramMap.get('id');
        this.prodottoService.updateProdotto(this.editForm.value).subscribe(
          (res) => {
            console.log('Product successesfully update!')
            this.ngZone.run(() => this.router.navigateByUrl('/product-list'))
          }, (error) => {
            console.log(error)
          }
        )
      }
    }
  }

}
