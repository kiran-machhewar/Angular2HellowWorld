/**
* @ApexClass : SFRemoteController
* @Description : This class includes all basic utility methods which will be required to perform update,query,insert and delete operation
*				  and other methods.
*/
public with sharing class SFRemoteController {	

	//Returns sobjects based on provided query
	@RemoteAction
	public static List<SObject> getRecords(SOQLInput soqlInput){
		return Database.query(soqlInput.soql);
	}

	public Class SOQLInput{
		public String soql {get;set;}
	}
	
}