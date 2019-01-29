const testFormatter = result => {
  const prier = [
    {
      _attr: {
        version: "1"
      }
    }
  ];
  const testExecutionResults = result.testResults.map(getTestExecutionResult);

  const executions = prier.concat(testExecutionResults);
  return {
    testExecutions: executions
  };
};

const getTestExecutionResult = testData => {
  const prier = [{ _attr: { path: testData.testFilePath } }];
  const testCases = testData.testResults.map(getTestCase);
  return {
    file: prier.concat(testCases)
  };
};

const getTestCase = testCase => {
  const prier = [
    {
      _attr: {
        name: testCase.fullName || testCase.title,
        duration: testCase.duration || 0
      }
    }
  ];

  if (testCase.status !== "failed") {
    return {
      testCase: prier
    };
  } else {
    const failedTestCase = prier.concat({
      failure: {
        _attr: {
          message: "Error"
        }
      }
    });
    return {
      testCase: failedTestCase
    };
  }
};

module.exports = testFormatter;
