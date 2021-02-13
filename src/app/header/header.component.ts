import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
   // Output Allow us to listen to the event from the parent component
   @Output() featureSelected = new EventEmitter<string>();

   constructor() {}

   ngOnInit(): void {}

   onSelect(feature: string) {
      this.featureSelected.emit(feature);
   }
}
