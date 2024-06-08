const { execSync } = require("child_process");

test("output is Hola Mundo", () => {
  const output = execSync("node src/holaMundo.js").toString().trim();
  expect(output).toBe("Hola Mundo");
});