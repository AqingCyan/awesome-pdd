import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnChanges,
  AfterContentInit,
  SimpleChanges,
  AfterContentChecked,
  AfterViewInit,
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
export class ScrollableTabComponent
  implements
    OnChanges,
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit
{
  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor: string;
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor = 'brown';
  @Output() tabSelected = new EventEmitter();

  constructor() {
    console.log('组件构造调用');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('组件输入属性改变', changes);
  }

  ngOnInit() {
    console.log('组件初始化');
  }

  ngAfterContentInit() {
    console.log('组件内容初始化');
  }

  ngAfterContentChecked() {
    console.log('组件内容脏值检测');
  }

  ngAfterViewInit() {
    console.log('组件视图初始化');
  }

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }
}
