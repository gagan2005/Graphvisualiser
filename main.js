
//import cytoscape from "./node_modules/cytoscape/dist/cytoscape.esm.min.js";
var bgcolor=""
var visitedcolor=""
var varvisitingcolor=""
var edgecolor=""
var cy=null;
var graph=[
  [1,2,3],[2],[1,3],[2],[0]
];
var n=4;
function getele(graph,n)
{
  var array=[];
  for(var i=0;i<n;i++)
  {
    array.push({data:{id:i}});
  }
 for(var i=0;i<n;i++)
  {
    var src=i;
    graph[i].forEach(element => {
      array.push({data:{ id:"a"+element+"a"+i,
        source:i,
        target:element}});
      
    });
  }
  console.log(array);
  return array;
 

}
function draw(graph)
{
  cy = cytoscape({
    container: document.getElementById('cvs') // container to render in
    ,
    

    elements: getele(graph,n),
    style: [ // the stylesheet for the graph
      {
        selector: 'node',
        style: {
          'background-color': '#ccc',
          'label': 'data(id)'
        }
      },

      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle'
        }
      },
      {
        selector: '.visited',
        style: {
          'background-color':'#639',
          'label':'data(id)'
        }

      },
      {
        
        selector: '.visited',
        style: {
          'background-color':'#639',
          'label':'data(id)'
        }

        
      }
    ],

    layout: {
      name: 'breadthfirst'
    }

  });

}
var u=null;
window.main = function()
{
  
      draw(graph);
      update();
     // draw(graph);
      
}
  //cy.add()
  //cy.add([  { group: 'nodes', data: { id: 'c' }, position: { x: 100, y: 100 }},{ group: 'edges', data: { id: 'e0', source: 'a', target: 'c' } }])
  //this.setInterval(addEdge,50);


var prev=performance.now();
function update()
{
  
  var ele=cy.elements().getElementById("0").addClass('visited');
 // window.requestAnimationFrame(update);
}