module.exports.RecursiveTreeSearch = function (tree, node){
    console.log(tree[node]);
    if(tree[2 * node + 1])
        this.RecursiveTreeSearch(tree, 2 * node + 1);
    if(tree[2 * node + 2])
        this.RecursiveTreeSearch(tree, 2 * node + 2);
    return;
}