package Pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

public class registerNewUserAccountStaticPage {

    @FindBy(how = How.XPATH, using = "//a[contains(text(),'Register')]")
    public static WebElement RegisterButton;

    @FindBy(how = How.ID, using = "gender-male")
    public static WebElement GenderButton;

    @FindBy(how = How.ID, using = "FirstName")
    public static WebElement FirstNameField;

    @FindBy(how = How.ID, using = "LastName")
    public static WebElement LastNameField;

    @FindBy(how = How.NAME, using = "DateOfBirthDay")
    public static WebElement DOBDay;

    @FindBy(how = How.NAME, using = "DateOfBirthMonth")
    public static WebElement DOBMonth;

    @FindBy(how = How.NAME, using = "DateOfBirthYear")
    public static WebElement DOBYear;

    @FindBy(how = How.ID, using = "Email")
    public static WebElement NewUserEmailField;

    @FindBy(how = How.XPATH, using = "//input[@id='Password']")
    public static WebElement NewUserPasswordField;

    @FindBy(how = How.XPATH, using = "//input[@id='ConfirmPassword']")
    public static WebElement ConfirmPasswordField;

    @FindBy(how = How.XPATH, using = "//button[@id='register-button']")
    public static WebElement RegisterNewUserButton;

    @FindBy(how = How.XPATH, using = " /html/body/div[6]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a")
    public static WebElement AssertionForNewUserAccount;

// Methods declaration

    public void iClickOnTheRegisterElement() {
        RegisterButton.click();
    }
    public void iEnterUserRegistrationDetails() {
        GenderButton.click();
        FirstNameField.sendKeys("Johnson");
        LastNameField.sendKeys("Jay");
        Select Day = new Select(DOBDay);
        Day.selectByIndex(10);
        Select Month = new Select(DOBMonth);
        Month.selectByIndex(10);
        Select Year = new Select(DOBYear);
        Year.selectByValue("1995");
        NewUserEmailField.sendKeys("summer+2022a@gmail.com");
    }
    public void iEnterNewPasswordIConfirmPasswordAndClickRegisterButton () {
        NewUserPasswordField.sendKeys("testing123");
        ConfirmPasswordField.sendKeys("testing123");
        RegisterNewUserButton.click();
    }
    public void  iShouldBeAbleToRegisterNewUserAccountSuccessfully() {
        String ExpectedNewUserAccountCreated = "My account";
        String ActualNewUserAccountCreated = AssertionForNewUserAccount.getText();
        Assert.assertEquals(ExpectedNewUserAccountCreated, ActualNewUserAccountCreated);
        System.out.println(ActualNewUserAccountCreated);
    }
}
