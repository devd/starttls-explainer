/* globals InboxSDK , chrome */

var getAttachmentIcon;
InboxSDK.load('1', 'sdk_watls_fb8302ea21').then(function(sdk) {
    'use strict';

	sdk.Conversations.registerMessageViewHandler(function(messageView) {
        // TODO(devd): Cache lookups and clean up the regex to be smarter
        $.get(window.location.pathname + "?ui=2&view=om&ik=" + document.head.getAttribute("data-inboxsdk-ik-value") + "&th=" + messageView.getMessageID(), function(data){
            if (/\nReceived: from[^;]*;/.exec(data)){
                var v = /\nReceived: from[^;]*;/.exec(data)[0].split("\n").reverse()[0].match(/^\s*\(version=([^\s]*)\s*cipher=([^\s]*)/); 
                messageView.addAttachmentIcon(getAttachmentIcon(v));
            }
        });
	});
});


getAttachmentIcon = function(data){
    'use strict';
    if(!data){
        return {'iconUrl': chrome.extension.getURL("images/icon-insecure.png"), tooltip: "NO ENCRYPTION"};
    }
    else {
        if (data[2].indexOf("RC4") === -1){
            return {'iconUrl': chrome.extension.getURL("images/icon-secure.png"), tooltip: data[2]} ;
        }
        else {
            return {'iconUrl': chrome.extension.getURL("images/icon-lame.png"), tooltip: data[2]} ;
        }
    }
};



