function Queue() {
    var queue = [];
    var offset = 0;
    this.size = function() {
        return (queue.length - offset);
    }

    this.isEmpty = function() {
        return (queue.length == 0);
    }

    this.push = function(item) {
        queue.push(item);
    }


    this.pop = function() {


        if (queue.length == 0) return undefined;


        var item = queue[offset];


        if (++offset * 2 >= queue.length) {
            queue = queue.slice(offset);
            offset = 0;
        }


        return item;

    }

    this.peek = function() {
        return (queue.length > 0 ? queue[offset] : undefined);
    }

}



function DSU(nodes) {
    this.nodelist = {};
    nodes.forEach(element => {
        this.nodelist[element] = element;

    });
    this

    this.union = function(a, b) {
        this.nodelist[this.findroot(a)] = this.nodelist[this.findroot(b)];
    }

    this.findroot = function(a) {
        if (this.nodelist[a] == a) return a;
        else return this.findroot(this.nodelist[a]);
    }


}