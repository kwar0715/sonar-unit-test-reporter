"use strict";

const fs = require("fs");
const path = require("path");
const xml = require("xml");
const testFormatter = require("./testFormat");

const { COVERAGE_DIR, XML_FILE, INDENTATION } = require("./constats");

module.exports = results => {
  const formattedJson = testFormatter(results);

  const xmlFile = xml(formattedJson, {
    declaration: true,
    indent: "  "
  });

  if (!fs.existsSync(COVERAGE_DIR)) {
    fs.mkdirSync(COVERAGE_DIR);
  }

  const filepath = path.join(COVERAGE_DIR, XML_FILE);
  fs.writeFileSync(filepath, xmlFile);
  return results;
};
