var gadjlist = {};
var animateseq = [];
var type = "BFS";
var isvisited = {};
var i = 0;

function genadjlist() {
    var adjlist = {};
    nodes.forEach(i => {
        adjlist[i] = [];
    });

    edges.forEach(i => {
        var src = i[0];
        var dest = i[1];
        adjlist[src].push(dest);
        adjlist[dest].push(src);
    });
    return adjlist;
}

function initisvisited() {
    nodes.forEach(i => {
        isvisited[i] = false;
    });
}
//var u=null;
function startAnimation() {
    if (u != null) {
        reset(false);



    }
    gadjlist = genadjlist();
    animateseq = [];
    initisvisited();
    if (type == "BFS") {
        var q = new Queue();
        bfs(src, q);
    } else {
        dfs(src);
    }
    i = 0;
    console.log(animateseq);
    u = setInterval(performanimateseq, time);




}

function bfs(src, q) {
    animateseq.push(src);
    isvisited[src] = true;
    q.push(src);
    console.log(q.size());
    while (q.size() != 0) {
        var ele = q.pop();
        console.log("reached here");
        gadjlist[ele].forEach(element => {
            //console.log("reached here");
            //console.log(element)
            if (isvisited[element] == false) {
                animateseq.push(EdgeId(ele, element));
                animateseq.push(EdgeId(element, ele));
                animateseq.push(element);
                isvisited[element] = true;
                q.push(element);
            }
        });
    }




}

function dfs(src) {
    animateseq.push(src);
    isvisited[src] = true;
    //



    gadjlist[src].forEach(ele => {
        if (isvisited[ele] == false) {
            animateseq.push(EdgeId(ele, src));
            animateseq.push(EdgeId(src, ele));
            dfs(ele);
        }
    });
}

function mst(src) {


}

function performanimateseq() {
    console.log("animation going on", animateseq.length, i);
    if (i >= animateseq.length) clearInterval(u);

    if (i % 3 == 0) {
        cy.elements().getElementById(animateseq[i]).addClass('visited');
        var s = new sound("sound12.mp3");
        s.play()
        i++;
    } else {
        cy.elements().getElementById(animateseq[i]).addClass('visitededge');
        cy.elements().getElementById(animateseq[i + 1]).addClass('visitededge');
        i = i + 2;
    }



}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
}