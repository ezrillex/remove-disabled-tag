var remove_disabled_last_target_element = null;



// listens and logs the target element of the context menu (firefox has targetElementId)
document.addEventListener("contextmenu", function (event) {
    remove_disabled_last_target_element = event.target;
    console.log(remove_disabled_last_target_element)
});

// listen for context menu click message from service worker
chrome.runtime.onMessage.addListener(
    function (request) {
        if(request.remove_disable){
            RemoveDisable(remove_disabled_last_target_element)
        }
    }
);

function RemoveDisable(node) {
    // i think in pega starting from parent is not that bad of an idea, 
    // TODO figure out the specific scenario this failed on radio button.
    // remove from parent, but not start recursion from there, could be root element
 

    // find and remove attribute in children
    recursiveRemoveDisable(node.parentNode);
}

function recursiveRemoveDisable(node) {
    // if this node has the attribute, remove it
    if (node.hasAttribute("disabled")) {
        node.removeAttribute("disabled");
    }

    // call this function for each of the nested elements
    // in PEGA things are usually nested somewhat deep
    for (var i = 0; i < node.children.length; i++) {
        recursiveRemoveDisable(node.children[i]);
    }
}