import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';
import { TransactionPage } from '../transaction/transaction';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TransactionPage;
  tab2Root = ContactPage;
  tab3Root = AboutPage;
  constructor() {

  }
}
