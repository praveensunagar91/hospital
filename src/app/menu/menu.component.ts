import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  collapedSideBar: boolean;
  @Output() event=new EventEmitter();
  visibleSidebar1;
// visiblesidebar:boolean=this.f.visibleSidebar1;
  constructor() { }

  ngOnInit() {
  }
//   receiveCollapsed($event) {

//     this.collapedSideBar = $event;

// }
onSearchClick(){
  this.event.emit();
}
}
