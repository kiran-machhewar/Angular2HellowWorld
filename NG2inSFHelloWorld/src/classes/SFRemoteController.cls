public with sharing class SFRemoteController {
	public SFRemoteController() {
		
	}
 
	@RemoteAction
	public static List<SObject> getRecords(SOQLInput soqlInput){
		return Database.query(soqlInput.soql);
	}

	@RemoteAction 
	public static void updateSObjects(UpdateInput theUpdateInput){
		update theUpdateInput.sobjects;
	} 

	public Class UpdateInput{
		public List<SObject> sobjects {get;set;}
	}
 

	public Class SOQLInput{
		public String soql {get;set;}
	}
	
}