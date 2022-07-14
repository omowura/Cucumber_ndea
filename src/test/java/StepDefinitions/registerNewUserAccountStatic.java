package StepDefinitions;

import Pages.registerNewUserAccountStaticPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

public class registerNewUserAccountStatic {
    public WebDriver driver;
    @Given("^I am on the nopCommerce landing page$")
    public void i_am_on_the_nopCommerce_landing_page() {
        System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.navigate().to("https://demo.nopcommerce.com/");
        driver.manage().window().maximize();

    }

    @Given("^I click on the register element$")
    public void i_click_on_the_register_element() {
        registerNewUserAccountStaticPage page = PageFactory.initElements(driver,registerNewUserAccountStaticPage.class);
        page.iClickOnTheRegisterElement();

    }

    @Given("^I enter user registration details$")
    public void i_enter_user_registration_details() {
        registerNewUserAccountStaticPage page = PageFactory.initElements(driver,registerNewUserAccountStaticPage.class);
        page.iEnterUserRegistrationDetails();

    }

    @When("^I enter new password, I confirm password and click register button$")
    public void i_enter_new_password_I_confirm_password_and_click_register_button() {
        registerNewUserAccountStaticPage page = PageFactory.initElements(driver,registerNewUserAccountStaticPage.class);
        page.iEnterNewPasswordIConfirmPasswordAndClickRegisterButton();

    }

    @Then("^User should be able to register new user account successfully$")
    public void user_should_be_able_to_register_new_user_account_successfully() {
        registerNewUserAccountStaticPage page = PageFactory.initElements(driver,registerNewUserAccountStaticPage.class);
        page.iShouldBeAbleToRegisterNewUserAccountSuccessfully();

        driver.quit();

    }

}
