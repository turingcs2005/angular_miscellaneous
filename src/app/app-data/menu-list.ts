export class MenuItem {
  constructor(public name: string, public path: string, public description?: string) {}
}

export const menu1 = [
  new MenuItem('Item1', 'item1', 'A placeholder item!'),
  new MenuItem('Item2', 'item2', 'Another placeholder item!')
];
