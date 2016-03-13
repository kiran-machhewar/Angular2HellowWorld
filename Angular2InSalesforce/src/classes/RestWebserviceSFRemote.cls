@RestResource(urlMapping='/RestWebserviceSFRemote/*')
global with sharing class RestWebserviceSFRemote {

    @HttpPost
    global static void callRemotingMethod() {
    	String log = '';
    	try{
	        String jsonInput = RestContext.request.requestBody.toString(); 
	        String response = '';
	        RestContext.response.addHeader('Content-Type', 'application/json');
	        
	        log += jsonInput;
	        Input jsonObjectInput  = (Input)JSON.deserialize(jsonInput , Input.class); 

	        if(jsonObjectInput.controller=='SFRemoteController'
	            &&  jsonObjectInput.method == 'getRecords'){
	        	SFRemoteController.SOQLInput soqlINput = (SFRemoteController.SOQLInput)JSON.deserialize(jsonObjectInput.methodInput , SFRemoteController.SOQLInput.class);
	            response = JSON.serializePretty(SFRemoteController.getRecords(soqlINput));
	        }else{
	            RestContext.response.responseBody = Blob.valueOf('{"Response":"No Method is defined"}');
	            return;
	        }   
	        RestContext.response.responseBody = Blob.valueOf(response);

    	}catch(Exception ex){
    		String errorMessage = ex.getMessage();
    		String stackStrace = ex.getStackTraceString();
    		RestContext.response.responseBody = Blob.valueOf('Message -->'+errorMessage+'\nStackStrace-->'+stackStrace+'\nlog-->'+log);
    	}

    }
    
    class Input{
        public String controller {get;set;}
        public String method {get;set;}
        public String methodInput {get;set;}
    }
    
    class RestWebserviceSFRemoteException extends Exception{}  
    
}