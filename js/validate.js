function validateData() {
	
	var theForm = document.myform;
	var count = theForm.elements.length;
	var is_validated = true;
	var messages = [];
	for ( var i=0; i < count; i++) {
		var e = theForm.elements[i];
		if ( e.type != "button" ) {
			if ( e.getAttribute("data-required") == "true") {
				if ( e.value == "" ) {
					is_validated = false;
					e.style.border = "2px solid #ff0000";
					if ( e.getAttribute("data-msg")) {
						messages.push(e.getAttribute("data-msg"));
					}
				} else {
					e.style.border = "1px solid #cccccc";
					if ( e.getAttribute("data-pattern") ) {
						var result = new RegExp(e.getAttribute("data-pattern")).test(e.value);
						if ( result == false ) {
							is_validated = false;
							e.style.border = "2px solid #ff0000";
							if ( e.getAttribute("data-msg")) {
								messages.push(e.getAttribute("data-msg"));
							}
						}
					}
					
				}
				
			}
		}
	}
	
	if ( is_validated ) {
		$.jGrowl("Fields validation are all clear!", { position:'top-right', theme:'notify' });
		
	} else {
		messages.forEach(function(msg) {
			$.jGrowl(msg, { position:'top-right', theme:'warning' });
		});
	}
	
	return is_validated;
	
}