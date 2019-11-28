var nodes = ["a", "b", "c", "d", "e"];
var edges = [
    ["a", "c"],
    ["a", "b"],
    ["c", "d"],
    ["a", "d"],
    ["d", "b"],
    ["e", "a"],
    ["b", "e"]
];
var defaultnodes = ["a", "b", "c", "d", "e"];
var defaultedges = [
    ["a", "c", 12],
    ["a", "b", 14],
    ["c", "d", 8],
    ["a", "d", 6],
    ["d", "b", 3],
    ["e", "a", 2],
    ["b", "e", 16]
];

function add() {
    var parent = document.getElementById('edgelist');
    var child = document.getElementsByClassName('edgee')[0].cloneNode(true);
    parent.appendChild(child);
}

function gendefaultgraph() {

    document.getElementById('interface').style.display = "none";
    document.getElementById('main').style.display = "block";
    nodes = defaultnodes;
    edges = defaultedges;
    isweighted = true;
    main();
    M.toast({ html: '<span style="color:yellow">Click on a vertex to choose it as a start vertex</span>' })

}

function geninpgraph() {
    nodes = document.getElementById('nodenames').value.split(",");
    var edgelist = document.querySelectorAll('.edgee .v1');
    var edgelist2 = document.querySelectorAll('.edgee .v2');
    var weightlist = document.querySelectorAll('.edgee .w');
    if (edgelist.length != edgelist2.length) {
        alert("Wrong input");
        return;
    } else {
        edges = [];
        for (var i = 0; i < edgelist.length; i++) {
            var p = [];
            console.log(weightlist[i].value);
            p[0] = edgelist[i].value;
            p[1] = edgelist2[i].value;
            edges.push(p);
        }
        document.getElementById('interface').style.display = "none";
        document.getElementById('main').style.display = "block";
        main();
        M.toast({ html: '<h3 style="color:yellow">Click on a vertex to choose it as a start vertex<h3>' })

    }

}

function goback() {
    if (cy != null) {
        cy.destroy();
        reset();
    }
    nodes = defaultnodes;
    edges = defaultedges;
    document.getElementById('interface').style.display = "block";
    document.getElementById('main').style.display = "none";
}