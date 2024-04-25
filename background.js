browser.runtime.onInstalled.addListener(async(detail) => {
    switch (detail.reason) {
        case "install":
            await browser.tabs.create({ url: "readme.html" });
            break;
            // case "update":
            //     await browser.tabs.create({ url: "update_readme.html" });
            // break;
    }
});

browser.contextMenus.create({
    id: "instructionPage",
    title: "使用說明",
    contexts: ['action']
});

browser.contextMenus.create({
    id: "contextmenu_download",
    title: "下載此教材 (Tronclass)",
    contexts: ['all']
});

browser.contextMenus.create({
    id: "GitHubPage",
    title: "GitHub Page",
    contexts: ['action']
});

browser.contextMenus.onClicked.addListener(async(info, tab) => {
    switch (info.menuItemId) {
        case "instructionPage":
            await browser.tabs.create({ url: "readme.html" });
            break;
        case "contextmenu_download":
            browser.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['fetch.js']
            });
            break;
        case "GitHubPage":
            await browser.tabs.create({ url: "https://github.com/chris1012T/Tronclass_pdf_Firefox" });
            break;
    }
});

browser.action.onClicked.addListener((tab) => {
    browser.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['fetch.js']
    });
});

browser.runtime.onMessage.addListener((data) => {
    browser.downloads.download({
        conflictAction: "uniquify",
        url: data.src,
        filename: `${data.filename}.pdf`
    });
});