package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import io.cucumber.datatable.DataTable;

import java.util.List;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class Login {

	@Given("^User is on the landing page$")
	public void user_is_on_the_landing_page() throws Throwable {
		// selenium code for landing page
		System.out.println("User is on landing page");
	}

	@When("^User Login to application with username and password$")
	public void user_login_to_application_with_username_and_password() throws Throwable {
		// selenium code for logging with username and password
		System.out.println("User login with username and password");
	}

	@Then("^Home page is populated$")
	public void home_page_is_populated() throws Throwable {
		// selenium code for home page population
		System.out.println("User is on Home page");
	}

	
	@When("User Login to application with {string} and password {string}")
	public void user_Login_to_application_with_and_password(String string, String string2) {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("User log in with " + string + " password as " + string2);
	}

	@Then("Cards are displayed {string}")
	public void cards_are_displayed(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    if (string.equalsIgnoreCase("true"))
	    {
	    	System.out.println("Cards are displayed");
	    }
	    
	    else if (string.equalsIgnoreCase("false"))
	    {
	    	System.out.println("Cards are NOT displayed");
	    }
	}
	
	@When("User user sign up with <username> and <password>")
	public void user_user_sign_up_with_username_and_password(DataTable dataTable) {
	    
		List<List<String>> obj = dataTable.asLists(String.class);
		
		//printing the data
		for(int i=0;i<obj.size();i++)
		{
			System.out.print(obj.get(i).get(0)); //list_obj.row().col()
			System.out.print("-----");
			System.out.println(obj.get(i).get(1));
		}
		

	}
}
