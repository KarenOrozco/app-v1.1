import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChatPage } from '../chat/chat';
import { Usuario } from '../../database';

/**
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {

  usuarios : any;
  //chat : ChatPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.chat = ChatPage;
    
    
  }

  chat(usuario){
    this.navCtrl.push(ChatPage, {'usuario' : usuario});
  }

  ionViewDidLoad() {

    // let user = new Usuario("XXX","Orozco","García");
    // user.save();
    // console.log('');

    this.loadTransactions();
    
  }

  loadTransactions(){
    Usuario.all()
      .then((resultados) => {
        this.usuarios = resultados
        console.log(this.usuarios);
      });
  }
}
