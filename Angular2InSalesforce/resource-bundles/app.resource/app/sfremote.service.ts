export class SFRemoteService {
	
	// See the "Take it slow" appendix
	remote(input:any) {
		return new Promise<any>((resolve,reject)=>{
			if (location.href.indexOf(':3000')!=-1) {				
					var xhttp = new XMLHttpRequest();
					xhttp.onreadystatechange = function() {
						if (xhttp.readyState == 4 && xhttp.status == 200) {														
							resolve(JSON.parse(xhttp.responseText));

						}
					};
					xhttp.open("POST", "https://angular2sflab-developer-edition.ap2.force.com/services/apexrest/RestWebserviceSFRemote", true);		
					input.methodInput = ""+JSON.stringify(input.methodInput);					
					xhttp.send(JSON.stringify(input));	
			}else{
				var controller =<any> window[input.controller];
				controller[input.method](input.methodInput, function(result, event) {
						if (event.status) {
							resolve(result);
						} else if (event.type === 'exception') {
							reject({ 'status': event.message }); 
						}
					},
					{ escape: false }
				);				
			}
		});
	}
}