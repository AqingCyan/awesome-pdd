import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

export interface TopMenu {
  title: string;
  readonly link?: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css'],
})
export class ScrollableTabComponent implements OnChanges, OnInit {
  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor: string;
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor = 'brown';
  @Output() tabSelected = new EventEmitter();

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }

  constructor() {
    console.log('组件构造调用');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('组件输入属性改变', changes);
  }

  ngOnInit() {
    console.log('组件初始化');
  }
}
