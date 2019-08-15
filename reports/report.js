$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Application Login",
  "description": "\tTest feature file to check the login page",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Home page default login with soumya username",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regtest"
    }
  ]
});
formatter.step({
  "name": "User is on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login to application with \"soumya\" and password \"pwd\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_Login_to_application_with_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.cards_are_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Home page default login with multiple username and pwd",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regtest"
    }
  ]
});
formatter.step({
  "name": "User is on the landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "User Login to application with \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "user1",
        "pwd1"
      ]
    },
    {
      "cells": [
        "user2",
        "pwd2"
      ]
    },
    {
      "cells": [
        "user3",
        "pwd3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Home page default login with multiple username and pwd",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regtest"
    }
  ]
});
formatter.step({
  "name": "User is on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login to application with \"user1\" and password \"pwd1\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_Login_to_application_with_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.cards_are_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Home page default login with multiple username and pwd",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regtest"
    }
  ]
});
formatter.step({
  "name": "User is on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login to application with \"user2\" and password \"pwd2\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_Login_to_application_with_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.cards_are_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Home page default login with multiple username and pwd",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regtest"
    }
  ]
});
formatter.step({
  "name": "User is on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login to application with \"user3\" and password \"pwd3\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_Login_to_application_with_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.home_page_is_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.cards_are_displayed(String)"
});
formatter.result({
  "status": "passed"
});
});