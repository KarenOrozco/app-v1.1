import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Usuario } from '../../database';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contactos : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.loadContactos();
  }

  loadContactos(){
    console.log();
    Usuario.all()
      .then((resultados) => {
      this.contactos = resultados
      console.log(this.contactos);
      });
  }
}
