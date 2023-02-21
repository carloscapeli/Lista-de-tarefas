import { Component } from '@angular/core';

import { PoMenuItem, PoPageAction, PoBreadcrumb } from '@po-ui/ng-components';
import { MenuFilter } from '../menu-filter/menu-filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MenuFilter]
})
export class HomeComponent {

  menuItemSelected: string = 'Lista de tarefas';

  public readonly menus: Array<PoMenuItem> = [
    { label: 'Lista de tarefas', action: this.setPageTitle.bind(this), icon: 'po-icon-clock', shortLabel: 'Tarefas' },
    { label: 'Histórico', action: this.setPageTitle.bind(this), icon: 'po-icon-news', shortLabel: 'Histórico' },
    { label: 'Categorias', action: this.setPageTitle.bind(this), icon: 'po-icon-star', shortLabel: 'Categorias' }
  ];

  public readonly actions: Array<PoPageAction> = [
    {label: 'Incluir'}
  ]

  public breadcrumb: PoBreadcrumb = {
    items: [{label: 'Home', link: '/'},
            {label: this.menuItemSelected}]
  }

  filter: boolean = true;

  constructor(public menuFilter: MenuFilter) { }

  setPageTitle(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
    this.breadcrumb = {
      items: [{label: 'Home', link: '/'},
              {label: this.menuItemSelected}]
    }
  }

}
