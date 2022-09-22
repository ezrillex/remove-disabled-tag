function RemoveDisable(tid){ 
    let node = browser.menus.getTargetElement(tid); // Target ID

    // start from parent because for some radio buttons the radio is a sibling
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