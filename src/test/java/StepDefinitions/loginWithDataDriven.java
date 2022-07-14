package StepDefinitions;

import Pages.loginWithDataDrivenPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

public class loginWithDataDriven {
    public WebDriver driver;

    @Given("^browser is launched$")
    public void browser_is_launched() {
        System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.navigate().to("https://demo.nopcommerce.com/");
        driver.manage().window().maximize();

    }

    @Given("^user is on the homepage$")
    public void user_is_on_the_homepage() {
        loginWithDataDrivenPage page = PageFactory.initElements(driver, loginWithDataDrivenPage.class);
        page.userIsOnTheHomepage();

    }

    @When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_and(String email, String password) {
        loginWithDataDrivenPage page = PageFactory.initElements(driver, loginWithDataDrivenPage.class);
        page.userEntersAnd();


    }

    @When("^user clicks on the login button$")
    public void user_clicks_on_the_login_button() {
        loginWithDataDrivenPage page = PageFactory.initElements(driver, loginWithDataDrivenPage.class);
        page.userClicksOnTheLoginButton();

    }

    @Then("^user should be able to navigate to the homepage$")
    public void user_should_be_able_to_navigate_to_the_homepage() {
        loginWithDataDrivenPage page = PageFactory.initElements(driver, loginWithDataDrivenPage.class);
        page.userShouldBeAbleToNavigateToTheHomepage();

        driver.quit();

    }


}
