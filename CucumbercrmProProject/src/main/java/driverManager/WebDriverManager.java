package driverManager;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class WebDriverManager {
	
	private static WebDriverManager instanceofSingaltonClass =null;
	private static WebDriver driver;
	
	//private constructor
	private WebDriverManager()
	{
		System.setProperty("webdriver.chrome.driver",
				"F:\\Library\\chromedriver_win32 (1)\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	
	//To create instance of Class

	public static WebDriverManager getinstanceofWebDriverManager()
	{
		if(instanceofSingaltonClass==null) 
		{
			instanceofSingaltonClass = new WebDriverManager();
		}
		return instanceofSingaltonClass;
	}
	
	public WebDriver getDriver()
	{
		if (driver==null) {
			System.setProperty("webdriver.chrome.driver",
					"F:\\Library\\chromedriver_win32 (1)\\chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
		return driver;
	}
    
	public void closeDriver()
	{
		if(!(driver==null)) {
			driver.quit();
			driver=null;
		}
	}


}


