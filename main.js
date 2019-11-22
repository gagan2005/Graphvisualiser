
//import cytoscape from "./node_modules/cytoscape/dist/cytoscape.esm.min.js";
var bgcolor = "#fff"
var unvisited = "#456"
var visitedcolor = "#639"
var varvisitingcolor = "#808"
var edgecolor = "#fff"
var arrowcolor = "#123"
var cy = null;
var type = "bfs"             //BFS/DFS/mst Default is bfs
var visitedarray = [];
var src = "";
var nodes = ["a", "b", "c", "d"];
var edges = [
  ["a", "b"],
  ["c", "d"],
  ["a", "d"]
];
/*
var graph=[[1,2],[3,4],[5,6],[7],[],[],[],[]];
*/
var n = 6;
function getele() {
  var array = [];
  nodes.forEach(i => {
    array.push({ data: { id: i } });
  }
  );


  edges.forEach(element => {

    array.push({
      data: {
        id: EdgeId(element[0], element[1]),
        source: element[0],
        target: element[1]
      }
    });

    array.push({
      data: {
        id: EdgeId(element[1], element[0]),
        source: element[1],
        target: element[0]
      }
    });

  });
  console.log(array);
  return array;


}
function draw() {
  cy = cytoscape({
    container: document.getElementById('cvs') // container to render in
    ,


    elements: getele(),
    style: [ // the stylesheet for the graph
      {
        selector: 'node',
        style: {
          'background-color': unvisited,
          'label': 'data(id)',
          'transition-property': 'background-color',
          'transition-duration': '2s',
        }
      },

      {
        selector: 'edge',
        style: {
          'width': 5,
          'line-color': edgecolor,
          'target-arrow-color': arrowcolor,
          'target-arrow-shape': 'triangle'
        }
      },
      {
        selector: '.visited',
        style: {
          'background-color': visitedcolor,
          'label': 'data(id)'
        }

      },
      {

        selector: '.visiting',
        style: {
          'background-color': visitedcolor,
          'label': 'data(id)'
        }


      },
      {
        selector: '.visitededge',
        style: {
          'width': 10,
          'transition-property': 'line-color',
          'transition-duration': '2s',
          'line-color': visitedcolor,
          'target-arrow-color': arrowcolor,
          'target-arrow-shape': 'triangle'
        }

      }
    ],

    layout: {
      name: 'breadthfirst'
    }

  });

}
function EdgeId(a, b) {
  return a.toString() + b.toString();
}
var u = null;
function main() {

  draw();
  // draw(graph);

}

