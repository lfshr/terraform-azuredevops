import * as tl from 'azure-pipelines-task-lib/task'
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';
import { TerraformInstaller } from './utils'

const version = tl.getInput('terraformversion', true);
const install = new TerraformInstaller()

try {
    install.checkAndInstallTerraform(version)
} catch (err) {
    tl.setResult(tl.TaskResult.Failed, err.Message);
}

// async function run() {
//     try {
//         const inputString: string = tl.getInput("samplestring", true);
//         if (inputString == 'bad') {
//             tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
//             return;
//         }

//         console.log('Hello', inputString);
//     }
//     catch (err) {
//         tl.setResult(tl.TaskResult.Failed, err.Message)
//     }
// }

// run();