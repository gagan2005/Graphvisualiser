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

function add() {
    var parent = document.getElementById('edgelist');
    var child = document.getElementsByClassName('edgee')[0].cloneNode(true);
    parent.appendChild(child);
}

function gendefaultgraph() {
    document.getElementById('interface').style.display = "none";
    document.getElementById('main').style.display = "block";
    main();
}

function geninpgraph() {

}