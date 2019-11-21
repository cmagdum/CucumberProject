package myTestRunner;


	
	import org.junit.runner.RunWith;

	import cucumber.api.CucumberOptions;
	import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(
			features="F:\\Eclipse_Programs\\CucumbercrmProProject\\src\\main\\java\\features\\login1.feature",
			glue={"stepDefination"},
			format={"html:test-outout\\cucumber_report"}
			//dryRun=false

			)

	public class LoginTestRunner {

		
		
	}


