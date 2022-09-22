
// create context menu button
chrome.contextMenus.create({
    id: "remove-disable",
    title: "Remove disabled HTML attribute",
    contexts: ["all"]
});

// listen for context menu click and check if it's our menu item
chrome.contextMenus.onClicked.addListener(async info => {
    if(info.menuItemId === "remove-disable"){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {remove_disable: true} );
          });
    }
});
