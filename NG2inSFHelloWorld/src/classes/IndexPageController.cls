/**
* @ApexClass 		: IndexPageController
* @Description 		: Controller for Index vf page. This will get the static resource system mod stamp since 
*					  browser caches the static resource  wit constant url. This will make sure that whenever static
*					  resource is updated browser will fetch it again and reflect the latest changs made
*/
public with sharing class IndexPageController {

	public String staticResourceSystemModStamp {get;set;} //holds the system mod stmap of static reosurce

	public IndexPageController() {
			//fetching system mod stamp of static reosurce app
			staticResourceSystemModStamp  = ''+ [SELECT SystemModstamp 
													FROM StaticResource 
												 WHERE Name='app'].SystemModstamp.getTime();	
	}
	
}