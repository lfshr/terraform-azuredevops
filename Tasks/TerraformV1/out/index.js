"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var tl = __importStar(require("azure-pipelines-task-lib/task"));
var path = __importStar(require("path"));
var os = __importStar(require("os"));
var tempDir = os.tmpdir();
var terraformVersion = tl.getInput('terraformVersion', true);
console.log(tempDir);
var terraformPath = path.join(tempDir, 'terraform-azuredevops', 'terraform', terraformVersion);
console.log(terraformPath);
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
//# sourceMappingURL=index.js.map