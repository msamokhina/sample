'use strict';

class Application {
  constructor() {
    this.root = document.getElementById('root');
  }

  hello() {
    this.root.innerHTML = 'Hello world!';
  }
}


export const app = new Application();
