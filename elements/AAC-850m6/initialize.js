function(instance, context) {

    var referrerr = document.referrer;
	if (referrerr) {
    		instance.triggerEvent('oui', function() {}); 
	} 
	else { 
		
		// The page is not in an iFrame 
        instance.triggerEvent('non', function() {});

	} 

}