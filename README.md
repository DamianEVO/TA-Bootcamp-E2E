# E2E Test using newegg.com platform

In order to run the tests you need to have installed:  

node.js  

yarn

Clone E2E Test repository to your local machine. Then move to the repository's root with package.json file.
Initialize wdio project by running yarn create wdio . (https://webdriver.io/docs/gettingstarted/)
 * Where should your tests be launched? local - for e2e testing of web and mobile applications
 * Where is your automation backend located? On my local machine
 * Which framework do you want to use? Cucumber (https://cucumber.io/)
 * Do you want to use a compiler? No!
 * Do you want WebdriverIO to autogenerate some test files? No
 * Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? No
 * Which reporter do you want to use? spec, allure
 * Do you want to add a service to your test setup? chromedriver
 * What is the base url? http://localhost    
 * Do you want me to run `npm install` Yes

After the project initialization you will be able to run tests by command `yarn bootcamp`