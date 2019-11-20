
import cytoscape from "./node_modules/cytoscape/dist/cytoscape.esm.min.js";
var cy=null;
var graph=[
  [1,2,3],[2],[1,3],[2],[0]
];
var n=4;
function node(id)
{
  
    var data={id:id}
  
  this.data=data;
}
function edge(a,b)
{

  var  data=
    {
      id:toString(a)+toString(b),
      source:a,
      source:b
    }
    this.data=data;
}
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
var garray=[
  {data:{id:1}},{data:{id:2}}
];
console.log(garray);
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
          'background-color': '#666',
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
update()
}
  //cy.add()
  //cy.add([  { group: 'nodes', data: { id: 'c' }, position: { x: 100, y: 100 }},{ group: 'edges', data: { id: 'e0', source: 'a', target: 'c' } }])
  //this.setInterval(addEdge,50);


var prev=performance.now();
function update()
{
  var time=performance.now()-prev;
  
  if(time > 500)
  {
    console.log("me called");
    n++;
  cy=null;
  graph.push([0,1]);
  graph[0].push(n-1);
  graph[1].push(n-1);
  draw(graph);
  prev=performance.now();
  }
 // window.requestAnimationFrame(update);
}