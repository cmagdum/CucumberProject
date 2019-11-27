Feature: FreeCrm Pro login smoke scenarios 

Scenario: Verify Free Crm Pro login page 
	Given user is already on Login page 
	When titile of the login page is "CRMPRO" 
	Then user enter username as "Mayuri_257" and password as "Mayuri$257" 
	Then user click on login butten 
	And titile of the home page is "CRMPRO"