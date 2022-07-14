package StepDefinitions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features="src/test/resources/Features",
        plugin={"html:target/cucumber-html-report", "json:target/cucumber.json",
        "pretty:target/cucumber-pretty.txt","usage:target/cucumber-usage.json"},
        tags = {"~@ignore"}
)
public class TestRunner {

}
