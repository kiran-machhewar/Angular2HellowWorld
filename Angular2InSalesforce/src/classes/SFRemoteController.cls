public with sharing class SFRemoteController {
	public SFRemoteController() {
		
	}

	@RemoteAction
	public static List<SObject> getRecords(SOQLInput soqlInput){
		return Database.query(soqlInput.soql);
	}


	public Class SOQLInput{
		public String soql {get;set;}
	}
	
}