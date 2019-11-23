//import cytoscape from "./node_modules/cytoscape/dist/cytoscape.esm.min.js";
var bgcolor = "#f23"
var unvisited = '#bdcebe'
var visitedcolor = "#6b5b95"
var varvisitingcolor = "#808"
var edgecolor = "CFBEBC"
var visitededgecolor = "#ff7b25"
var arrowcolor = "#123"
var cy = null;
var u = null;
var type = "bfs" //BFS/DFS/mst Default is bfs
var visitedarray = [];
var srccolor = "#feb236"
var src = "";
var nodes = ["a", "b", "c", "d", "e"];
var src = nodes[0];
var edges = [
    ["a", "c"],
    ["a", "b"],
    ["c", "d"],
    ["a", "d"],
    ["d", "b"],
    ["e", "a"],
    ["b", "e"]
];
var extraclasses = ["visitededge", "visited", "source"];


/*
var graph=[[1,2],[3,4],[5,6],[7],[],[],[],[]];
*/
var n = 6;

function getele() {
    var array = [];
    nodes.forEach(i => {
        array.push({ data: { id: i } });
    });


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
                    //'transition-property': 'background-color',
                    //'transition-duration': '2s',
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
                    'width': 8,
                    //'transition-property': 'line-color',
                    //'transition-duration': '2s',
                    'line-color': visitededgecolor,
                    'target-arrow-color': arrowcolor,
                    'target-arrow-shape': 'triangle'
                }

            },

            {
                selector: '.source',
                style: {
                    'background-color': srccolor
                }
            }
        ],

        layout: {
            name: 'random'
        }

    });

}

function EdgeId(a, b) {
    return a.toString() + "--" + b.toString();
}
var u = null;

function main() {


    // draw(graph);

}

function reset() {
    clearInterval(u);
    cy.elements().forEach(ele => {
        extraclasses.forEach(e => {
            ele.removeClass(e);
        });
    });
}


function main() {


    var typebuttons = document.getElementsByClassName('typeb');
    console.log(typebuttons);
    for (var i = 0; i < typebuttons.length; i++) {
        var cur = i;
        var button = typebuttons[i];
        var t = button.innerText;
        button.addEventListener('click', handleclick.bind(null, t, t));
    }
    draw();

    cy.on('tap', 'node', function(evt) {
        var node = evt.target;
        reset();
        node.addClass('source');
        src = node.id();

    });
    //startAnimation();
}

function handleclick(t) {
    type = t;
    console.log(t)
    var typebuttons = document.getElementsByClassName('typeb');

    for (var i = 0; i < typebuttons.length; i++) {
        if (typebuttons[i].innerText == type) {
            typebuttons[i].classList.remove('grey');
            typebuttons[i].classList.add('blue');
        } else {
            typebuttons[i].classList.remove('blue');
            typebuttons[i].classList.add('grey');
        }
    }
    reset();

}