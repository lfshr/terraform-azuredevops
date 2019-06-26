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
var install_1 = require("./utils/install");
var version = tl.getInput('terraformversion', true);
var install = new install_1.Installer();
install.checkAndInstallTerraform(version);
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