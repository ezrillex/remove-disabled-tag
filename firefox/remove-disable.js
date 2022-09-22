// context menu icon attribution
console.log("Ui icons created by Bharat Icons - Flaticon");

function RemoveDisable(tid){ 
    let node = browser.menus.getTargetElement(tid); // Target ID

    // remove from parent, but not start recursion from there, could be root element
    //if(node.parentNode.hasAttribute("disabled")){
    //    node.parentNode.removeAttribute("disabled")
    //}

    // find and remove attribute in children
    recursiveRemoveDisable(node.parentNode);
}

function recursiveRemoveDisable(node){

    // if this node has the attribute, remove it
    if(node.hasAttribute("disabled")){
        node.removeAttribute("disabled");
    }

    // call this function for each of the nested elements
    // in PEGA the buttons are usually nested inside other elements
    for(var i=0; i < node.children.length; i++){
        recursiveRemoveDisable(node.children[i]);
    }
}