import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';


@Component({
  selector: 'footer-component',
  styleUrls: ['client/assets/css/footer/footer.css'],
  templateUrl: 'client/app/components/shared/footer/footer.component.html',
  directives: [ROUTER_DIRECTIVES, MD_GRID_LIST_DIRECTIVES]
})

export class FooterComponent {

}
