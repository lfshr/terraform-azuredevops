import * as tl from 'azure-pipelines-task-lib/task'
import * as path from 'path';
import * as os from 'os';

const tempDir = os.tmpdir()
const terraformVersion: string = tl.getInput('terraformVersion', true);
console.log(tempDir)
const terraformDir: string = path.join(tempDir, 'terraform-azuredevops', 'terraform', terraformVersion);
console.log(`Terraform directory: ${terraformDir}`);

// Does terraform exist already?


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