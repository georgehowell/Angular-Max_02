import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {   
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
    // this.sidenav= !this.sidenav;
  }
  onClose() {
    // this.closeSidenav.emit();
  }

}
