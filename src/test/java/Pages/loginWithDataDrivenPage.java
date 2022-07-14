package Pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class loginWithDataDrivenPage {
    @FindBy(how = How.XPATH, using = "//a[contains(text(),'Log in')]")
    public static WebElement HomepageLoginButton;

    @FindBy(how = How.XPATH, using = "//input[@id='Email']")
    public static WebElement UserEmailField;

    @FindBy(how = How.XPATH, using = "//input[@id='Password']")
    public static WebElement UserPasswordField;

    @FindBy(how = How.XPATH, using = "//button[contains(text(),'Log in')]")
    public static WebElement LogIn;

    @FindBy(how = How.XPATH, using = "/html/body/div[6]/div[1]/div[1]/div[2]/div[1]/ul/li[2]/a")
    public static WebElement AssertionForLoginSuccess;

// Methods Declaration

    public void userIsOnTheHomepage () {
        HomepageLoginButton.click();
    }
    public void userEntersAnd() {
        UserEmailField.sendKeys("summer+2022a@gmail.com");
        UserPasswordField.sendKeys("testing123");
    }
    public void userClicksOnTheLoginButton() {
        LogIn.click();
    }
    public void userShouldBeAbleToNavigateToTheHomepage() {
        String ExpectedLoginSuccess = "Log out";
        String ActualLoginSuccess = AssertionForLoginSuccess.getText();
        Assert.assertEquals(ExpectedLoginSuccess, ActualLoginSuccess);
        System.out.println(ActualLoginSuccess);

    }
}
