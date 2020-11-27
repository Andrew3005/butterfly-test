import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Butterfly from 'butterfly-dag/dist/index.js';
import { DataStorage } from './data-storage';
import { AEdge } from './edge';
import { ANode } from './node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('main', { static: true }) mainRef: ElementRef;
  @ViewChild('dom', { static: true }) domRef: ElementRef;
  title = 'butterfly-test';

  canvas;
  nodeId = 0;
  edgeId = 0;

  inputA = 1;
  inputB = 2;
  edges = [];
  dataStorage: DataStorage;

  constructor(){
    this.dataStorage = DataStorage.getInstance();
  }

  ngOnInit() {
    this.canvas = new Butterfly.Canvas({
      root: this.mainRef.nativeElement,
      zoomable: true,
      moveable: true,
      draggable: true,
      linkable: true,
      // disLinkable: true,       // enable disConnect edges (optional)
      theme: {                 // theme (optional)
        group: {
          type: 'normal'       // Node group type: normal (drag in and drag out), inner (can only be dragged in and not out)
        },
        edge: {
          type: 'Bezier', // Bezier/Flow/Straight/Manhattan/AdvancedBezier
        },
        endpoint: {
          position: [],        // limit endpoint position ['Top', 'Bottom', 'Left', 'Right'],
          linkableHighlight: false,// point.linkable method is triggered when connecting, can be highlighted
        }
      },
      type: 'drageLayout',
      options: {
        rankdir: 'TB',
        nodesep: 40,
        ranksep: 40,
        controlPoints: false,
      },
    })
    this.createNode();
    this.createNode();

    // canvas.addNode({
    //   id: 1,
    //   top: 0,
    //   left: 0,
    //   dom: this.domRef.nativeElement,
    //   draggable: true,
    //   options: {}
    // })
  }


  createEdge() {
    // let edge = new AEdge(
    //   {
    //     // class: CustomEdge,
    //     id: ++this.edgeId,
    //     source: +this.inputA,
    //     target: +this.inputB,
    //     label: this.edgeId,
    //     shapeType: 'Flow',
    //   }
    // )
    let edge = this.canvas.addEdge(
      {
        id: ++this.edgeId,
        source: +this.inputA,
        target: +this.inputB,
        label: this.edgeId,
        shapeType: 'Flow',
        Сlass: AEdge,
      }
    )
    edge.dom.classList.add('custom-edge');
    this.edges.push(edge);
    console.log(this.dataStorage.value);
  }

  removeEdge() {
    let edge = this.edges.find(edge => edge.id === +this.inputA)
    console.log(edge);
    this.canvas.removeEdge(edge);
    this.edges = this.edges.filter(e => e.id !== edge.id);
  }


  createNode() {
    this.canvas.addNode({
      id: ++this.nodeId,
      top: Math.random() * 1000,
      left: Math.random() * 1000,
      draggable: true,
      Class: ANode, // after setting the base class, the canvas will render based on the custom class.
      endpoints: [
        // {
        //   id: `input-${this.nodeId}`,
        //   orientation: [0, 0],
        //   pos: [0, 0.5],
        //   expendArea: { left: 10, right: 10, top: 10, bottom: 10 }
        // },
        // {
        //   id: `output-${this.nodeId}`,
        //   orientation: [1, 0],
        //   pos: [0, 0.5],
        //   expendArea: { left: 10, right: 10, top: 10, bottom: 10 },
        // }
      ]
    })
    // this.canvas.addEdge({
    //   source: `input-${this.nodeId}`,
    //   sourceNode: `node-${this.nodeId}`,
    //   type: 'node',
    //   class: AEdge
    // })
  }
}





