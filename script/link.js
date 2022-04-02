const {
  symlinkSync,
  existsSync,
  mkdirSync,
  rmSync,
  readFileSync,
  writeFileSync,
  unlinkSync,
} = require("fs");
const { resolve } = require("path");

const tasks = [
  {
    source: "lowcode-engine/packages/designer/src",
    target: "bootstrap/node_modules/@alilc/lowcode-designer",
  },
  {
    source: "lowcode-engine/packages/shell/src",
    target: "bootstrap/node_modules/@alilc/lowcode-shell",
  },
  {
    source: "lowcode-engine/packages/types/src",
    target: "bootstrap/node_modules/@alilc/lowcode-types",
  },
  {
    source: "lowcode-engine/packages/utils/src",
    target: "bootstrap/node_modules/@alilc/lowcode-utils",
  },

  {
    source: "lowcode-engine/packages/engine/src",
    target: "bootstrap/node_modules/@alilc/lowcode-engine",
  },
  {
    source: "lowcode-engine-ext/src",
    target: "bootstrap/node_modules/@alilc/lowcode-engine-ext",
  },
  {
    source: "lowcode-engine/packages/editor-core/src",
    target: "bootstrap/node_modules/@alilc/lowcode-editor-core",
  },
  {
    source: "lowcode-engine/packages/editor-skeleton/src",
    target: "bootstrap/node_modules/@alilc/lowcode-editor-skeleton",
  },
  {
    source: "lowcode-tools/packages/lowcode-plugin-inject/src",
    target: "bootstrap/node_modules/@alilc/lowcode-plugin-inject",
    noLink: true,
  },
];

function changePackageModule(target) {
  const packageFilePath = resolve("packages", target, "package.json");
  const data = JSON.parse(readFileSync(packageFilePath));
  data.main = "src";
  data.module = "src";
  data.typings = "src";

  writeFileSync(packageFilePath, JSON.stringify(data, null, 2));
}

function createSrcSymlink(task) {
  const { source, target, noLink } = task;
  const sourcePath = resolve("./packages", source);
  const targetDir = resolve("./packages", target);
  const targetPath = resolve(targetDir, "src");
  if (!noLink) {
    if (!existsSync(targetDir)) {
      mkdirSync(targetDir, { recursive: true });
    }

    if (existsSync(targetPath)) {
      unlinkSync(targetPath);
    }

    symlinkSync(sourcePath, targetPath);
  }
}

//   function createPackageJson(task) {
//     const { source, target } = task;
//     const sourcePath = resolve('./packages', source, 'package.json');
//     const targetPath = resolve(
//       './packages',
//       target,
//       'node_modules',
//       '@ralc',
//       source,
//       'package.json',
//     );

//     if (existsSync(targetPath)) {
//       rmSync(targetPath);
//     }

//     const data = JSON.parse(readFileSync(sourcePath));
//     data.main = 'src';
//     data.module = 'src';
//     data.typings = 'src';

//     writeFileSync(targetPath, JSON.stringify(data, null, 2));
//   }

tasks.forEach((task) => {
  const { source, target } = task;

  createSrcSymlink(task);
  // createPackageJson(task);
  changePackageModule(target);

  console.log(`已在 ${target} 下建立 ${source} 的软链接`);
});
