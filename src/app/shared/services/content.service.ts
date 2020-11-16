import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  pages = {
    home: {title: 'Home', subtitle: 'Welcome Home! - subtitle', content: 'Some home content.', image: 'assets/bg00.jpg'},
    about: {title: 'Resume', subtitle: 'Resume', content: 'Some resume content .', image: 'assets/bg01.jpg'},
    brianna: {title: 'Brianna\'s Gift Ideas', subtitle: 'Contact Us', content: 'How to contact us.', image: 'assets/bg02.jpg'}
  };
}
