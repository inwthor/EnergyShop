import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public barcodeScanner: BarcodeScanner,
  ) {}

  ngOnInit() {
    
  }
  qr() {
    this.barcodeScanner.scan().then(barcodeData => {
      alert(console.log('Barcode data', barcodeData));
     }).catch(err => {
        alert( console.log('Error', err));
     });
  }
}
