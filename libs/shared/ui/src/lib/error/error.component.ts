import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'tng-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class TngError {}

@NgModule({
  declarations: [TngError],
  exports: [TngError],
})
export class TngErrorModule {}
