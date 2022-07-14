package Pages;

import org.apache.commons.codec.binary.Base64;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class homepageLoginPage {
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


// Methods declaration

    public void iClickOnLoginButton() {
        HomepageLoginButton.click();
    }

    public void iEnterUserEmail() {
        UserEmailField.sendKeys(decodeNewString("c3VtbWVyKzIwMjJhQGdtYWlsLmNvbQ=="));
    }

    public void iEnterUserPassword() {
        UserPasswordField.sendKeys(decodeString("dGVzdGluZzEyMw=="));

    }
    static String decodeNewString(String email) {
        byte[] decodedNewString = Base64.decodeBase64(email);
        return(new String(decodedNewString));
    }
    static String decodeString(String password) {
        byte[] decodedString = Base64.decodeBase64(password);
        return(new String(decodedString));
    }

    public void iClickOnLogin(){
        LogIn.click();
    }

    public void iShouldBeAbleToLoginSuccessfully() {
        String ExpectedNewUserAccountCreated = "Log out";
        String ActualNewUserAccountCreated = AssertionForLoginSuccess.getText();
        Assert.assertEquals(ExpectedNewUserAccountCreated, ActualNewUserAccountCreated);
        System.out.println(ActualNewUserAccountCreated);


    }


}
