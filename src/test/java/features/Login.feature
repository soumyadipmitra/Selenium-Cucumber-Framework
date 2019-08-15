Feature: Application Login 
	Test feature file to check the login page

@smoketest
Scenario: Home page default login 
	Given User is on the landing page 
	When User Login to application with username and password 
	Then Home page is populated 
	And Cards are displayed "true" 
	
@regtest
Scenario: Home page default login with soumya username 
	Given User is on the landing page 
	When User Login to application with "soumya" and password "pwd" 
	Then Home page is populated 
	And Cards are displayed "true" 
	
@smoketest
Scenario: Home page default login with jim username 
	Given User is on the landing page 
	When User Login to application with "jim" and password "jimpwd" 
	Then Home page is populated 
	And Cards are displayed "false" 
	
@smoketest
Scenario: Home page default login with variable username and pwd
	Given User is on the landing page 
	When User user sign up with <username> and <password> 
		|username|password|
		|john|abcd|
		|jenny|bcde|
		|jack|efgh|
	Then Home page is populated 
	And Cards are displayed "true"
	
@regtest	
Scenario Outline: Home page default login with multiple username and pwd 
	Given User is on the landing page 
	When User Login to application with "<username>" and password "<password>" 
	Then Home page is populated 
	And Cards are displayed "true"
Examples:
|username|password|
|user1|pwd1|
|user2|pwd2|
|user3|pwd3|