package myTestRunner;


	
	import org.junit.runner.RunWith;

	import cucumber.api.CucumberOptions;
	import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(
			features="C:\\Users\\Datta\\git\\CucumberProject\\CucumbercrmProProject\\features\\createNewAccount.feature",
			glue={"stepDefination"},
			//format={"html:test-outout\\cucumber_report"},
			dryRun=false,
			monochrome=false,
			//format = {"pretty"}
			//format = {"html:Reports"}
			plugin = { "pretty", "html:target/cucumber-reports" }

			)

	public class LoginTestRunner {

		
		
	}


