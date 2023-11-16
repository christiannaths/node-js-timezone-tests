const fs = require("fs");
const util = require("util");
const { render } = require("mustache");
const { toPercent } = require("./utils/number.js");
const { createHierarchy } = require("./utils/object.js");
const pageTemplate = require("./templates/pageTemplate.js");
const summaryTemplate = require("./templates/summaryTemplate.js");
const testTemplate = require("./templates/testTemplate.js");
const { groupBy, uniqBy, first, tail } = require("lodash");

console.inspect = (myObject) =>
  console.log(
    util.inspect(myObject, { showHidden: false, depth: null, colors: true })
  );

function renderEntries(entries, level = "###", indent = "") {
  return entries
    .flatMap(([title, obj]) => {
      const subEntries = Object.entries(obj).filter(([key]) => key !== "tests");

      const output = [
        render(testTemplate.header, {
          title: indent ? indent + " " + title : title,
          level,
        }),
      ];

      if (obj.tests) {
        output.push(
          obj.tests.flatMap((test) =>
            render(testTemplate.row, {
              title: test.title,
              status:
                test.status === "passed"
                  ? "✅"
                  : test.status === "skipped"
                  ? "🟡"
                  : "❌",
            })
          )
        );
      }

      if (subEntries.length > 0) {
        output.push([
          "\n<section>\n",
          ...renderEntries(subEntries, level + "#", indent),
          "\n</section>\n",
        ]);
      }

      return output.flat();
    })
    .join("");
}

class DocumentTestHooksReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
    this.outputFile = "./README.md";
  }

  onRunStart() {
    fs.writeFileSync(this.outputFile, render(pageTemplate.header));
  }

  onTestResult(_test, testResult) {
    const hierarchy = createHierarchy(
      testResult.testResults,
      "tests",
      "ancestorTitles"
    );

    const output = renderEntries(Object.entries(hierarchy));

    fs.appendFileSync(
      this.outputFile,
      "\n\n<section>\n\n" + output + "\n\n</section>\n\n"
    );
  }

  onRunComplete(test, runResults) {
    const numFailedTests = runResults.numFailedTests;
    const numPassedTests = runResults.numPassedTests;
    const numTotalTests = numFailedTests + numPassedTests;
    const percentFailedTests = toPercent(numFailedTests / numTotalTests);
    const percentPassedTests = toPercent(numPassedTests / numTotalTests);

    const summaryResults = {
      numFailedTests,
      numPassedTests,
      percentFailedTests,
      percentPassedTests,
    };

    const output = render(summaryTemplate, summaryResults);
    fs.appendFileSync(this.outputFile, output);
    fs.appendFileSync(this.outputFile, render(pageTemplate.footer));
  }
}

module.exports = DocumentTestHooksReporter;
