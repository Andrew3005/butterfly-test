import * as Butterfly from 'butterfly-dag/dist/index.js';

export class AEdge extends Butterfly.Edge {

  options;

  constructor(opts) {
    super(opts);
    this.options = opts;
    console.log(opts)
  }

  draw(obj) {
    console.log(obj)
    let path = super.draw(obj);

    console.log(path);
    path.classList.add('custom-edge');
    return path;
  }

}
