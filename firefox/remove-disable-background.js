
// create context menu button
browser.menus.create({
    id: "remove-disable",
    title: "Remove disabled HTML attribute",
    contexts: ["all"]
});

// listen for context menu click and check if it's our menu item
browser.menus.onClicked.addListener(info => {
    if(info.menuItemId === "remove-disable"){
        // Call remove-disable.js function and, pass the id of the right clicked element
        // for the script to have the tab context and get the element,
        // this script is a background script so it's not in the right context.
        browser.tabs.executeScript({
            code: `RemoveDisable(${info.targetElementId});`,
        });
    }
});
