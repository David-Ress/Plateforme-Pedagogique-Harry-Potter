const fs = require('fs');
const { exec } = require('child_process');

function getDeps(type) {
  return new Promise((resolve, reject) => {
    exec(`npm list --depth=0 --json --include=${type}`, (err, stdout, stderr) => {
      if (err || stderr) {
        reject(err);
      }
      return resolve(JSON.parse(stdout).dependencies);
    });
  });
}

async function updateDeps() {
  try {
    const devDepsList = await getDeps('dev');
    const depsList = await getDeps('prod');
    const file = fs.readFileSync('package.json');
    const content = JSON.parse(file);

    for (let devDep in content.devDependencies) {
      content.devDependencies[devDep] = `^${devDepsList[devDep].version}`;
    }

    for (let dep in content.dependencies) {
      content.dependencies[dep] = `^${depsList[dep].version}`;
    }

    fs.writeFileSync('package.json', `${JSON.stringify(content, null, '  ')}\n`);
    console.log('Done');
  } catch (error) {
    console.error(error);
  }
}

console.log('Updating...');
updateDeps();
