package StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class invalidLoginWithDataDriven {
    public WebDriver driver;
    @Given("^User launches browser$")
    public void user_launches_browser() {
        System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.navigate().to("http://automationpractice.com/index.php");
        driver.manage().window().maximize();

    }

    @Given("^User is on the homepage and click login button$")
    public void user_is_on_the_homepage_and_click_login_button() {
        driver.findElement(By.xpath("//a[contains(text(),'Sign in')]")).click();

    }

    @When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_and(String email, String password) {
        driver.findElement(By.xpath("//input[@id='email']")).sendKeys(email);
        driver.findElement(By.xpath("//input[@id='passwd']")).sendKeys(password);

    }

    @When("^User clicks on the login button$")
    public void user_clicks_on_the_login_button() {
    driver.findElement(By.id("SubmitLogin")).click();

    }
    @Then("^Correct \"([^\"]*)\" should be returned$")
    public void correct_should_be_returned(String errormessage) {
        String ExpectedErrorMessage = errormessage;
        String ActualErrorMessage = driver.findElement(By.xpath("//*[@id=\"center_column\"]/div[1]/ol/li")).getText();
        Assert.assertEquals(ExpectedErrorMessage, ActualErrorMessage);
        System.out.println(ActualErrorMessage);

        driver.quit();

    }

}
