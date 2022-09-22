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
    // start from parent because for some radio buttons the radio is a sibling
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