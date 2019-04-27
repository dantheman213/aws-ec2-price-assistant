chrome.contextMenus.removeAll();
chrome.contextMenus.create({
    title: "View AWS EC2 On Demand Pricing",
    contexts: ["browser_action"],
    onclick: function() {
        const newURL = "https://aws.amazon.com/ec2/pricing/on-demand/";
        chrome.tabs.create({ url: newURL });
    }
});
chrome.contextMenus.create({
    title: "View AWS EC2 Spot Pricing",
    contexts: ["browser_action"],
    onclick: function() {
        const newURL = "https://aws.amazon.com/ec2/spot/pricing/";
        chrome.tabs.create({ url: newURL });
    }
});

chrome.browserAction.onClicked.addListener(function() {
    const newURL = "https://aws.amazon.com/ec2/pricing/on-demand/";
    chrome.tabs.create({ url: newURL });
});
