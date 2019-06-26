"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var os = __importStar(require("os"));
// https://releases.hashicorp.com/terraform/0.12.3/terraform_0.12.3_windows_amd64.zip
// https://releases.hashicorp.com/terraform/0.12.3/terraform_0.12.3_linux_amd64.zip
// https://releases.hashicorp.com/terraform/{{version}}/terraform_{{version}}_{{os}}_{{architecture}}.zip
var Installer = /** @class */ (function () {
    function Installer() {
        this.checkAndInstallTerraform = function (version) {
            var tempDir = os.tmpdir();
            var terraformDir = path.join(tempDir, 'terraform-azuredevops', 'terraform', version);
            // Only two options are win32 and linux.
            var terraformFileName = os.platform() === 'win32' ? 'terraform.exe' : 'terraform';
            var terraformPath = path.join(terraformDir, terraformFileName);
            if (false === fs.existsSync(terraformPath)) {
                var urlos = os.platform() === 'win32' ? 'windows' : 'linux';
                var urlarch = os.arch() === 'x64' ? 'amd64' : 'amd32';
                var url = "https://releases.hashicorp.com/terraform/" + version + "/terraform_" + version + "_" + urlos + "_" + urlarch + ".zip";
                console.log("Installing terraform...");
                console.log("Downloading file: " + url);
            }
        };
    }
    return Installer;
}());
exports.Installer = Installer;
//# sourceMappingURL=install.js.map