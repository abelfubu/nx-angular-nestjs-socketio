import { Component, NgModule } from '@angular/core';

@Component({
  selector: '[tng-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
