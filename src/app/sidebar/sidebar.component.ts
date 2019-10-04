import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  collapedSideBar: boolean;
  collapsed: boolean;
  visibleSidebar1;



  // @Output() collapsedEvent:EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSideBarClick() {
    this.visibleSidebar1 = true;
  }
}
