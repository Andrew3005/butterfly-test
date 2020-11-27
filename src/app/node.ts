import * as Butterfly from 'butterfly-dag/dist/index.js';
import { DataStorage } from './data-storage';

export class ANode extends Butterfly.Node {

  options;
  node;
  isFocused = false;
  dataStorage: DataStorage;

  constructor(
    opts,
  ) {
    super(opts);
    this.options = opts;
    this.dataStorage = DataStorage.getInstance();
  }
  draw(obj) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', `node-${obj.id}`);
    this.node.style.top = `${obj.top}px`;
    this.node.style.left = `${obj.left}px`;
    this.node.classList.add('custom-node');
    this._createText();

    this.dataStorage.value += 1;
    // this.node.addEventListener('click', () => {
    //   this.node.classList.toggle('active');
    // })

    return this.node;
  }

  // focus() {
  //   console.log('here')
  // }


  // unFocus() {
  //   this.node.classList.remove('active');
  // }

  _createText() {
    const text = document.createElement('div');
    text.innerText = this.options.id;
    this.node.appendChild(text);
  }
}


export class BaseNode extends Butterfly.Node {

  // options;

  // constructor(opts) {
  //   super(opts);
  //   this.options = opts;
  // }
  // draw = (opts) => {
  //   const container = $('<div class="schedule-base-node"></div>')
  //     .attr('id', opts.id)
  //     .css('top', opts.top + 'px')
  //     .css('left', opts.left + 'px')

  //   this._createTypeIcon(container);
  //   this._createText(container);

  //   return container[0];
  // }
  // _createTypeIcon(dom = this.dom) {
  //   const iconContainer = $(`<span class="icon-box ${this.options.className}"></span>`)[0];
  //   const icon = $(`<i class="iconfont ${this.options.iconType}"></i>`)[0];

  //   iconContainer.append(icon);
  //   $(dom).append(iconContainer);
  // }

  // _createText(dom = this.dom) {
  //   $('<span class="text-box"></span>').text(this.options.label).appendTo(dom);
  // }
}

