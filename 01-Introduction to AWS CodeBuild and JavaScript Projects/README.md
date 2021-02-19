## Learning Objectives

### Introducing PowerShell Gallery

* JavaScript is cross-platform and open source
* Build back-end applications and REST APIs with Node.js
* Build front-end browser-based applications
* Use frameworks like Next.js to combine and simplify the power of front/back-end development
* NPM Registry (JavaScript) is a package registry where modules can be shared, similar to PyPi (Python), NuGet (C# .NET), PowerShell Gallery

### Introducing AWS CodeBuild Service

* Using a managed build service frees you to focus on building your code
* PowerShell modules may have automated tests to perform
* Build service starts fresh each time, and avoids "works on my machine"
* CodeBuild provides base images running Amazon Linux 2 and Ubuntu 18.04 LTS and Windows Server 2019
* Only pay for the minutes you use the service

### Use Cases for JavaScript Modules

* Wrappers around REST APIs (ie. PSGitHub), if no official SDK available
* Develop front-end frameworks
* Build data processing pipelines either locally or in that run in the cloud
* Open source projects are an excellent thing to put on your resume!

### What You'll Learn

* Create a simple JavaScript module in source control - AWS CodeCommit
* Set up AWS CodeBuild project using managed container image provided by AWS
* `buildspec.yml` controls the entire build / test / deploy process, so we'll construct that from scratch
* Generate NPM token and securely inject into AWS CodeBuild project