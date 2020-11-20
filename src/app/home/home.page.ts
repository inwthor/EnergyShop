import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component } from '@angular/core';
import { AlertController, PickerController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  main1 = { m1: '', m2: '', m3: '' }
  main2 = { m1: '', m2: '', m3: '' }
  main3 = { m1: '', m2: '', m3: '' }

  pipeType: Object = [
    {
      name: 'เทปน้ำหยด (Drip Tape)',
      list: [
        {
          name: 'ท่อ 16มม. หนา 0.2 มม.',
          list: [
            { id: 1, value: 0.01 },
            { id: 2, value: 0.04 },
            { id: 3, value: 0.08 },
            {
              id: 4,
              value: 0.13
            },
            {
              id: 5,
              value: 0.20
            },
            {
              id: 6,
              value: 0.28
            },
            {
              id: 7,
              value: 0.37
            },
            {
              id: 8,
              value: 0.48
            },
            {
              id: 9,
              value: 0.60
            },
            {
              id: 10,
              value: 0.72
            },
            {
              id: 12,
              value: 1.01
            },
            {
              id: 14,
              value: 1.35
            },
            {
              id: 16,
              value: 1.73
            },
            {
              id: 18,
              value: 2.15
            },
            {
              id: 20,
              value: 2.61
            }
          ]
        },
        {
          name: 'ท่อ 16มม. หนา 0.15 มม.',
          list: [
            {
              id: 1,
              value: 0.01
            },
            {
              id: 2,
              value: 0.04
            },
            {
              id: 3,
              value: 0.08
            },
            {
              id: 4,
              value: 0.13
            },
            {
              id: 5,
              value: 0.19
            },
            {
              id: 6,
              value: 0.27
            },
            {
              id: 7,
              value: 0.36
            },
            {
              id: 8,
              value: 0.46
            },
            {
              id: 9,
              value: 0.58
            },
            {
              id: 10,
              value: 0.70
            },
            {
              id: 12,
              value: 0.98
            },
            {
              id: 14,
              value: 1.31
            },
            {
              id: 16,
              value: 1.67
            },
            {
              id: 18,
              value: 2.08
            },
            {
              id: 20,
              value: 2.53
            }
          ]
        }
      ]
    },
    {
      name: 'ท่อพีอี (LDPE PN 2.5)',
      list: [
        {
          name: 'ท่อ 20มม.',
          list: [
            {
              id: 1,
              value: 0.01
            },
            {
              id: 2,
              value: 0.04
            },
            {
              id: 3,
              value: 0.08
            },
            {
              id: 4,
              value: 0.13
            },
            {
              id: 5,
              value: 0.20
            },
            {
              id: 6,
              value: 0.28
            },
            {
              id: 7,
              value: 0.37
            },
            {
              id: 8,
              value: 0.48
            },
            {
              id: 9,
              value: 0.60
            },
            {
              id: 10,
              value: 0.72
            },
            {
              id: 12,
              value: 1.01
            },
            {
              id: 14,
              value: 1.35
            },
            {
              id: 16,
              value: 1.73
            },
            {
              id: 18,
              value: 2.15
            },
            {
              id: 20,
              value: 2.61
            }
          ]
        },
        {
          name: 'ท่อ 25มม.',
          list: [
            {
              id: 1,
              value: 0.01
            },
            {
              id: 2,
              value: 0.04
            },
            {
              id: 3,
              value: 0.08
            },
            {
              id: 4,
              value: 0.13
            },
            {
              id: 5,
              value: 0.19
            },
            {
              id: 6,
              value: 0.27
            },
            {
              id: 7,
              value: 0.36
            },
            {
              id: 8,
              value: 0.46
            },
            {
              id: 9,
              value: 0.58
            },
            {
              id: 10,
              value: 0.70
            },
            {
              id: 12,
              value: 0.98
            },
            {
              id: 14,
              value: 1.31
            },
            {
              id: 16,
              value: 1.67
            },
            {
              id: 18,
              value: 2.08
            },
            {
              id: 20,
              value: 2.53
            }
          ]
        }
      ]
    },
    {
      name: 'ท่อพีอี (LDPE PN 4)',
      list: [
        {
          name: 'ท่อ 20มม.',
          list: [
            {
              id: 1,
              value: 0.01
            },
            {
              id: 2,
              value: 0.04
            },
            {
              id: 3,
              value: 0.08
            },
            {
              id: 4,
              value: 0.13
            },
            {
              id: 5,
              value: 0.20
            },
            {
              id: 6,
              value: 0.28
            },
            {
              id: 7,
              value: 0.37
            },
            {
              id: 8,
              value: 0.48
            },
            {
              id: 9,
              value: 0.60
            },
            {
              id: 10,
              value: 0.72
            },
            {
              id: 12,
              value: 1.01
            },
            {
              id: 14,
              value: 1.35
            },
            {
              id: 16,
              value: 1.73
            },
            {
              id: 18,
              value: 2.15
            },
            {
              id: 20,
              value: 2.61
            }
          ]
        },
        {
          name: 'ท่อ 25มม.',
          list: [
            {
              id: 1,
              value: 0.01
            },
            {
              id: 2,
              value: 0.04
            },
            {
              id: 3,
              value: 0.08
            },
            {
              id: 4,
              value: 0.13
            },
            {
              id: 5,
              value: 0.19
            },
            {
              id: 6,
              value: 0.27
            },
            {
              id: 7,
              value: 0.36
            },
            {
              id: 8,
              value: 0.46
            },
            {
              id: 9,
              value: 0.58
            },
            {
              id: 10,
              value: 0.70
            },
            {
              id: 12,
              value: 0.98
            },
            {
              id: 14,
              value: 1.31
            },
            {
              id: 16,
              value: 1.67
            },
            {
              id: 18,
              value: 2.08
            },
            {
              id: 20,
              value: 2.53
            }
          ]
        }
      ]
    }
  ]

  constructor(
    public barcodeScanner: BarcodeScanner,
    public alertController: AlertController,
    public picker: PickerController
  ) {
    
  }

  ngOnInit() {
  }
  qr() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.presentAlert(barcodeData.text);
    }).catch(err => {
      alert(console.log('Error', err));
    });
  }

  async presentAlert(test: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'แจ้งเตือน',
      message: test,
      buttons: ['OK', 'ยกเลิก']
    });

    await alert.present();
  }

  selected_m1(event) {
    this.main1.m2 = event.detail.value.list[0]
    this.main1.m3 = event.detail.value.list[0].list[0]
    console.log(this.main1.m3)
  }
  selected_m2(event) {
    //this.m4.m3 = event.detail.value.list[0]
  }
  selected_m3(event) {
    console.log(this.main1);
  }
}
