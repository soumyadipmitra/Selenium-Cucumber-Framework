package cucumberOptions;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/features",
		glue = "stepDefinitions",
		tags="@regtest",
		//dryRun=true, //to check if every line has glue code
//		plugin= {"pretty","html:reports","json:reports/cucumber.json","junit:reports/cukes.xml"},
		// Using reporting-plugin to generate pretty reports
		// https://www.jvt.me/posts/2019/04/07/prettier-cucumber-jvm-html-reports/
		plugin = {"pretty", "json:reports/report.json", "de.monochromata.cucumber.report.PrettyReports:reports"},
		monochrome=true //to make the console output look good
		//strict = true //this will fail a test case if the glue code is not present
		)

public class TestRunner {

}
