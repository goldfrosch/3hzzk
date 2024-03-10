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

  const selectDir: string[] = [];
  // TODO: 추후 root 디렉토리 기반으로 접근하게 끔 수정
  fs.readdirSync(`../../${packageType}`).forEach((dir) => {
    const files = fs.readdirSync(`../../${packageType}/${dir}`);

    for (const file of files) {
      if (file === "package.json") {
        selectDir.push(dir);
        break;
      }
    }
  });

  const { theme } = await inquirer.prompt({
    type: "list",
    name: "theme",
    message: "repo를 선택하세요:",
    // TODO 패키지 타입을 기반으로 디렉토리 탐색 후 packages/[packageType]안의 디렉토리를 탐색 후 노출시켜줌 (바로 안에 package.json이 있을 것)
    // 가능하면 캐싱 처리해도 좋음 (디렉토리 탐색이 시간이 좀 걸릴 경우에)
    choices: selectDir,
  });
} catch (error) {
  console.error(error);
}
