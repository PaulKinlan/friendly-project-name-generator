const { generate } = require("./lib/generate.js");

test_count_1 = () => {

  const output = generate(1, "-");

  console.assert(output.length === 1, "Length != 1");
}

test_count_2 = () => {

  const output = generate(2, "-");

  console.assert(output.length === 2, "Length != 1");
}

test_count_1_no_separator = () => {

  const output = generate(1);

  console.assert(output.length === 1, "Length != 1");

  console.assert(output[0].indexOf("-"), "Default Separator not included");

}

test_count_1_custom_separator = () => {

  const output = generate(1, "@");

  console.assert(output.length === 1, "Length != 1");

  console.assert(output[0].indexOf("@"), "Custom Separator not included");

}

(() => {
  test_count_1();
  test_count_1_no_separator();
  test_count_1_custom_separator()
  test_count_2();
})();