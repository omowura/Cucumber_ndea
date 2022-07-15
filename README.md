# Java Cumcumber Project

A Cumcumber project: Designing test plans and test cases using Gherkin Syntax

INSTRUCTIONS

1. The following are need to execute this task:
- Java SE
- Maven or Gradle build tool
- IntelliJ IDEA Cucumber for Java plugins
- Open a command prompt and run: mvn test - for success installation

2. Clone the repo:
- Git: https://github.com/omowura/CucumberTask.git OR
- Download a Zip of master manually on your computer

3. Run Test
- The test scripts are runned following these steps:
- Run the registerNewUserAccountStatic.feature first after that use the TestRunner to run the entire scripts. This is because the all other feature files depend on the     static file
- Alternative, you can try to run the entire scripts without considering any particular script first usinf the command prompt:
  C:\Users\omowu\Automation Testing\QA_assignment>mvn clean test
  
  NB: The file directory needs to be changed according to your pc: C:\your file path>mvn clean test
