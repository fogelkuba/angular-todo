export class Model {
  user;
  items;
  constructor() {
    this.user = 'Adam';
    this.items = [
      {action: "Kupic kwiaty", done: false},
      {action: "kupic buty", done: false},
      {action: "kupic bilety", done: false},
    ];
  }
}

export class TodoItem {
  action;
  done;
  constructor(action, done){
    this.action = action;
    this.done = done;
  }
}
