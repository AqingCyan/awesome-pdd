import { Component } from '@angular/core';
import { ImageSlider, TopMenu } from './ components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  scrollableTabBgColor = 'red';

  topMenus: TopMenu[] = [
    { title: '热门', link: '' },
    { title: '男装', link: '' },
    { title: '百货', link: '' },
    { title: '运动', link: '' },
    { title: '手机', link: '' },
    { title: '家纺', link: '' },
    { title: '食品', link: '' },
    { title: '电器', link: '' },
    { title: '鞋包', link: '' },
    // { title: '汽车', link: '' },
    // { title: '水果', link: '' },
    // { title: '电脑', link: '' },
    // { title: '内衣', link: '' },
    // { title: '家装', link: '' },
    // { title: '母婴', link: '' },
    // { title: '美妆', link: '' },
    // { title: '家具', link: '' },
  ];

  imageSliders: ImageSlider[] = [
    {
      imgUrl:
        // tslint:disable-next-line:max-line-length
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Fmw690%2F0069onTlly1gtneodxvocj60zk0zk0wq02.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633972611&t=9a4614a8433eb2132e5c08f641ee76fe',
      link: '',
      caption: '',
    },
    {
      imgUrl:
        // tslint:disable-next-line:max-line-length
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201911%2F19%2F20191119200547_gjabo.thumb.700_0.png&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633972244&t=db71161ee71c692c3d9e912fa5d6a10a',
      link: '',
      caption: '',
    },
    {
      imgUrl:
        // tslint:disable-next-line:max-line-length
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201912%2F12%2F20191212225846_rpvvj.thumb.700_0.png&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633972244&t=2d96d688d6e8142e944bf010373b9a0b',
      link: '',
      caption: '',
    },
    {
      imgUrl:
        // tslint:disable-next-line:max-line-length
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-2941964258-025472B69B061985FFAE418CE18C56CA%2F0%3Ffmt%3Djpg%26size%3D216%26h%3D1000%26w%3D790%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633972479&t=983ae490690aefca1f70b29e867d527c',
      link: '',
      caption: '',
    },
    {
      imgUrl:
        // tslint:disable-next-line:max-line-length
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2F005SoSingy1gtbs8qkz5xj60go0p0dh002.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633972497&t=9a5821fa5ecd9496249a96a52b3592c6',
      link: '',
      caption: '',
    },
  ];

  handleTabSelected(tabMenu: TopMenu) {
    const colors = ['red', 'blue', 'cyan'];
    const idx = Math.floor(Math.random() * 3);
    this.scrollableTabBgColor = colors[idx];
    console.log(tabMenu);
  }
}
