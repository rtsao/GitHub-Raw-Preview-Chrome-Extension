chrome.webRequest.onHeadersReceived.addListener(
	function(details) {
	    for(var i = 0; i < details.responseHeaders.length; ++i) {
	        if(details.responseHeaders[i].name.toLowerCase() == 'content-type')
	        	details.responseHeaders[i].value = 'text/html';
	        else if (details.responseHeaders[i].name.toLowerCase() == 'content-security-policy')
	        	details.responseHeaders[i].value = "script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline' ";
	  	}

	    return {responseHeaders:details.responseHeaders};
	},
	{urls: ['https://raw.github.com/*.html']},
	['blocking', 'responseHeaders']
);

chrome.webRequest.onHeadersReceived.addListener(
	function(details) {
	    for(var i = 0; i < details.responseHeaders.length; ++i)
	        if(details.responseHeaders[i].name.toLowerCase() == 'content-type')
	        	details.responseHeaders[i].value = 'application/javascript';

	    return {responseHeaders:details.responseHeaders};
	},
	{urls: ['https://raw.github.com/*.js']},
	['blocking', 'responseHeaders']
);


chrome.webRequest.onHeadersReceived.addListener(
	function(details) {
    	for(var i = 0; i < details.responseHeaders.length; ++i)
        if(details.responseHeaders[i].name.toLowerCase() == 'content-type')
        	details.responseHeaders[i].value = 'text/css';

    	return {responseHeaders:details.responseHeaders};
	},
	{urls: ['https://raw.github.com/*.css']},
	['blocking', 'responseHeaders']
);
