import { Component, OnInit } from '@angular/core';
import { User } from '../app/model/User';
import { Product } from '../app/model/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  user: User = {
    id: 1,
    name: 'Windstorm',
    token: '1234567890'
  };
  idol: Product[] = [
    { id: 1, name: 'Cherprang', image: 'https://www.bnk48.com/data/Members/4/s/20181123093609prtvwy.png' },
    { id: 2, name: 'Jennis', image: 'https://www.bnk48.com/data/Members/2/s/20181123093652ceisz1.png' },
    { id: 3, name: 'Keaw', image: 'https://www.bnk48.com/data/Members/21/s/20181123092956ikpt69.png' },
    { id: 4, name: 'Kaimook', image: 'https://www.bnk48.com/data/Members/20/s/20181123093013lsw348.png' },
    { id: 5, name: 'Mobile', image: 'https://www.bnk48.com/data/Members/14/s/20181123093154bcsuv9.png' },
    { id: 6, name: 'Music', image: 'https://www.bnk48.com/data/Members/13/s/20181123093213adej67.png' },
    { id: 7, name: 'Noey', image: 'https://www.bnk48.com/data/Members/9/s/20181123093415cdghm9.png' },
    { id: 8, name: 'Orn', image: 'https://www.bnk48.com/data/Members/3/s/20181123093629ghtuv5.png' },
    { id: 9, name: 'Pun', image: 'https://www.bnk48.com/data/Members/1/s/20181123093714fgmz14.png' },
    { id: 10, name: 'Pupe', image: 'https://www.bnk48.com/data/Members/7/s/20181123093500kmsx57.png' }

    
  ];

  constructor() { }

  ngOnInit() {

  }
}
