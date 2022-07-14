package StepDefinitions;

import Pages.homepageLoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

public class homepageLogin {
    public WebDriver driver;

    @Given("^I am on the nopCommerce webpage$")
    public void i_am_on_the_nopCommerce_webpage() {
        System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.navigate().to("https://demo.nopcommerce.com/");
        driver.manage().window().maximize();

    }

    @And("^I click on login button$")
    public void i_click_on_login_button() {
        homepageLoginPage page = PageFactory.initElements(driver, homepageLoginPage.class);
        page.iClickOnLoginButton();
    }

    @When("^I enter user email$")
    public void i_enter_user_email() {
        homepageLoginPage page = PageFactory.initElements(driver, homepageLoginPage.class);
        page.iEnterUserEmail();

    }

    @When("^I enter user password$")
    public void i_enter_user_password() {
        homepageLoginPage page = PageFactory.initElements(driver, homepageLoginPage.class);
        page.iEnterUserPassword();

    }

    @And("^I click on the login$")
    public void i_click_on_the_login() {
        homepageLoginPage page = PageFactory.initElements(driver, homepageLoginPage.class);
        page.iClickOnLogin();
    }

    @Then("^I should be able to login successfully$")
    public void i_should_be_able_to_login_successfully() {
        homepageLoginPage page = PageFactory.initElements(driver, homepageLoginPage.class);
        page.iShouldBeAbleToLoginSuccessfully();

        driver.quit();

    }



}
