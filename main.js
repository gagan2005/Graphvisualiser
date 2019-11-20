
//import cytoscape from "./node_modules/cytoscape/dist/cytoscape.esm.min.js";
var bgcolor="#fff"
var unvisited="#456"
var visitedcolor="#639"
var varvisitingcolor="#808"
var edgecolor="#fff"
var arrowcolor="#123"
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
      array.push({data:{ id:EdgeId(i,element),
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
          'background-color': unvisited,
          'label': 'data(id)'
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
          'background-color':visitedcolor,
          'label':'data(id)'
        }

      },
      {
        
        selector: '.visiting',
        style: {
          'background-color':visitedcolor,
          'label':'data(id)'
        }

        
      },
      {
        selector: '.visitededge',
        style: {
          'width':10,
          'line-color':visitedcolor,
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
function EdgeId(a,b)
{
  return a.toString()+b.toString();
}
var u=null;
function main()
{
  
      draw(graph);
      u=setInterval(update,300);
     // draw(graph);
      
}
  //cy.add()
  //cy.add([  { group: 'nodes', data: { id: 'c' }, position: { x: 100, y: 100 }},{ group: 'edges', data: { id: 'e0', source: 'a', target: 'c' } }])
  //this.setInterval(addEdge,50);

var nn=0;
var prev=performance.now();
function update()
{
  console.log(nn.toString());d
  var ele=cy.elements().getElementById(nn.toString()).addClass('visited');
  graph[nn].forEach(value=>
    {
      cy.elements().getElementById(EdgeId(nn,value)).addClass('visitededge');

    })
  nn++;
  if(nn>n)
  {
    clearInterval(u);
  }
 // window.requestAnimationFrame(update);
}