import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Mensaje } from '../../database';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  mensajes: any;
  usuario : any;
  msg : Mensaje;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario =  this.navParams.get('usuario');
    this.msg = new Mensaje("","",null,null);
  }

  ionViewDidLoad() {
    // let message = new Mensaje("Primer elemento","enviado",1,3);
    // message.save();

    this.loadMensajes();
  }

  loadMensajes(){
    console.log(this.msg.usuarioEmisor);
    Mensaje.all(this.msg.usuarioEmisor)
      .then((resultados) => {
      this.mensajes = resultados
      console.log(this.mensajes);
      });
  }

  mensajeEnv(){
    this.msg.status = "enviado";
    this.msg.usuarioEmisor = 1;
    this.msg.usuariorecpetor = 2;
    
    this.msg.save().then(resultado =>{
      this.msg = new Mensaje("","",null,null);      
    });
    this.loadMensajes();
  }

  save(){
    this.msg.save();
  }

}
