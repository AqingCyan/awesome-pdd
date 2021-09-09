import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

export interface TopMenu {
  title: string;
  readonly link?: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css'],
})
export class ScrollableTabComponent implements OnInit {
  constructor() {}

  selectedIndex = -1;

  @Input() menus: TopMenu[] = [];

  @Output() tabSelected = new EventEmitter();

  titleByMenu(index, menu) {
    return menu.title;
  }

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }

  ngOnInit() {}
}
