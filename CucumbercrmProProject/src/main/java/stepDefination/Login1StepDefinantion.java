package stepDefination;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
//import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import driverManager.WebDriverManager;

public class Login1StepDefinantion {
	
	
	WebDriverManager browserManager;
	WebDriver driver;
	Scenario scn;

	// Hooks
	@Before
	public void beforeMethod(Scenario scn) {
		this.scn = scn;
		scn.write("beforeMethod............");
		browserManager = WebDriverManager.getinstanceofWebDriverManager();
		driver = browserManager.getDriver();

	}
	
	@Given("^user is already on Login page$")
	public void user_is_already_on_Login_page() {
		driver.get("https://www.crmpro.com");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@When("^titile of the login page is \"([^\"]*)\"$")
	public void titile_of_the_login_page_is(String pageTitle) {

		String title = driver.getTitle();
		scn.write("Title of the login page is : " + title);
		Assert.assertTrue(title.contains(pageTitle));
		scn.write("verified the login page title ");

	}

	@Then("^user enter username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void user_enter_username_as_and_password_as(String uname, String upass) {
		scn.write("Enter valid username and valid password to the text username and password text feild..");
		driver.findElement(By.name("username")).sendKeys(uname);
		driver.findElement(By.name("password")).sendKeys(upass);

	}

	@Then("user click on login butten")
	public void user_click_on_login_butten() {
		scn.write("Click on login btn on login page ...");
		driver.findElement(By.xpath("//input[@type='submit' or @value='Login']")).click();
	}

	@Then("^titile of the home page is \"([^\"]*)\"$")
	public void titile_of_the_home_page_is(String pageTitle) {

		scn.write("User should be on home page with title as :CRMPRO");
		String title = driver.getTitle();
		scn.write("Title of the home page is : " + title);
		Assert.assertTrue(title.contains(pageTitle));
		scn.write("Title of the homepage is verified ......");
	}
}

	/*WebDriver driver;
	Scenario scn;

	@Before
	public void beforeMethod(Scenario scn){

		this.scn=scn;
		scn.write("before going to launch the browser set system variable path for browser");
		System.setProperty("webdriver.chrome.driver",
				"F:\\Library\\chromedriver_win32 (1)\\chromedriver.exe");		
	}
	@After
	public void afterMethod(){
		driver.quit();	
	}

	@Given("^Open browser As \"([^\"]*)\"$")
	public void open_browser_As(String browserName)  {

		if (browserName.equals("Chrome")) {

			driver = new ChromeDriver();
			driver.manage().window().maximize();

		} else if (browserName.equals("Firefox")) {

		}

		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}

	@Given("^navigate to url As \"([^\"]*)\"$")
	public void navigate_to_url_As(String url) {
		
		driver.get(url);
		Assert.assertTrue(driver.getTitle().contains("CRMPRO"));

	}

	@When("^enter user name As \"([^\"]*)\"$")
	public void enter_user_name_As(String username) {
		
		driver.findElement(By.name("username")).sendKeys(username);

	}

	@When("^enter password As \"([^\"]*)\"$")
	public void enter_password_As(String userpass) {
		
		driver.findElement(By.name("password")).sendKeys(userpass);

	}
	
	@Then("^clicked on Login Button$")
	public void clicked_on_Login_Button() throws InterruptedException {
		
		Thread.sleep(2000);

		driver.findElement(By.xpath("//input[@type='submit']")).click();

	}

	@Then("^user shoukd be on home page \"([^\"]*)\"$")
	public void user_shoukd_be_on_home_page(String arg1) {
		
		String title = driver.getTitle();
		Assert.assertTrue(title.contains("CRMPRO"));

	}

}*/
