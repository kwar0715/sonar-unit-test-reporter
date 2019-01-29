# Sonar Unit Test Reporter

Show unit test result in sonarqube window

## Install

use npm

``` npm install sonar-unit-test-repoter  ```

use yarn
``` yarn add -D sonar-unit-test-repoter```

## Configure

change jest configuration file

```
{
"testResultsProcessor": "sonar-unit-test-repoter"
}
```

change sonar property file

```
sonar.genericcoverage.unitTestReportPaths=coverage/unit-tests.xml
```

### pre-requisits

npm version : 9

<p align="center">
  <img src="https://github.com/kwar0715/sonar-unit-test-reporter/blob/master/image.png"/>
</p>
