import figlet from "figlet";
import inquirer from "inquirer";

import fs from "node:fs";
import YAML from "yaml";

console.log(figlet.textSync("Repo Select"));
console.log(figlet.textSync("Manager"));

try {
  const file = fs.readFileSync("../../pnpm-workspace.yaml", "utf8");
  const { packages }: { packages: string[] } = YAML.parse(file);

  const packageList: string[] = packages.map((path) => path.replace("/*", ""));

  const { packageType } = await inquirer.prompt({
    type: "list",
    name: "packageType",
    message: "선택할 패키지 타입을 골라주세요:",
    // TODO: 이건 가능하면 pnpm-workspace를 통해 리스트를 감별해낼 것
    choices: packageList,
    filter(val: string) {
      return val.toLowerCase();
    },
  });
} catch (error) {
  console.error(error);
}
