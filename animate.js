var gadjlist={};
var animateseq=[];
var src="a";
var tyoe="bfs";
var isvisited={};
var i=0;
function genadjlist()
{
    var adjlist={};
    nodes.forEach(i=>
        {
            adjlist[i]=[];
        });

    edges.forEach(i=>
        {
            var src=i[0];
            var dest=i[1];
            adjlist[src].push(dest);
            adjlist[dest].push(src);
        });
        return adjlist;
}
function initisvisited()
{
    nodes.forEach(i=>
        {
            isvisited[i]=false;
        });
}
var u=null;
function startAnimation()
{
    gadjlist=genadjlist();
    animateseq=[];
    initisvisited();
    if(type=="bfs")
    {
        var q=new Queue();
        bfs(src,q);
    }
    i=0;
    u=setInterval(performanimateseq(),50);
    

    
}
function bfs(src,q)
{
    animateseq.push(src);
    isvisited[src]=true;
    q.push(src);
    console.log(q.size());
    while(q.size()!=0)
    {
        var ele=q.pop();
        console.log("reached here");
        gadjlist[ele].forEach(element=>
            {
                //console.log("reached here");
                //console.log(element)
                if(isvisited[element]==false)
                {
                    animateseq.push(EdgeId(ele,element));
                    animateseq.push(element);
                    isvisited[element]=true;
                    q.push(src);
                }
            });
    }
    
    
  

}

function dfs(src)
{

}

function mst(src)
{

}

function performanimateseq()
{
    if(i>=animateseq.length)clearInterval(u);
    

}