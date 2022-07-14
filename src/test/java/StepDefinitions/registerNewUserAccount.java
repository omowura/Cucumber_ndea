package StepDefinitions;

import Pages.registerNewUserAccountPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

public class registerNewUserAccount {
    public WebDriver driver;


    @Given("^I am on the nopCommerce homepage$")
    public void i_am_on_the_nopCommerce_homepage() {
        System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.navigate().to("https://demo.nopcommerce.com/");
        driver.manage().window().maximize();
    }

    @Given("^I click on the register button$")
    public void i_click_on_the_register_button() {
        registerNewUserAccountPage page = PageFactory.initElements(driver,registerNewUserAccountPage.class);
        page.iClickOnTheRegisterButton();

    }

    @Given("^I enter user personal details$")
    public void i_enter_user_personal_details() {
        registerNewUserAccountPage page = PageFactory.initElements(driver,registerNewUserAccountPage.class);
        page.iEnterUserPersonalDetails();

    }

    @When("^I enter new password, confirm password and click register button$")
    public void i_enter_new_password_confirm_password_and_click_register_button() {
        registerNewUserAccountPage page = PageFactory.initElements(driver,registerNewUserAccountPage.class);
        page.iEnterNewPasswordConfirmPasswordAndClickRegisterButton();

    }

    @Then("^I should be able to register new user account successfully$")
    public void i_should_be_able_to_register_new_user_account_successfully() {
        registerNewUserAccountPage page = PageFactory.initElements(driver,registerNewUserAccountPage.class);
        page.iShouldBeAbleToRegisterNewUserAccountSuccessfully();

        driver.quit();
    }

}
