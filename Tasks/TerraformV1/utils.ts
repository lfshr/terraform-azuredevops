import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as http from 'http';
import * as axios from 'axios';

// https://releases.hashicorp.com/terraform/0.12.3/terraform_0.12.3_windows_amd64.zip
// https://releases.hashicorp.com/terraform/0.12.3/terraform_0.12.3_linux_amd64.zip
// https://releases.hashicorp.com/terraform/{{version}}/terraform_{{version}}_{{os}}_{{architecture}}.zip


export class TerraformInstaller {

    checkAndInstallTerraform = function(version: string) {
        let tempDir = os.tmpdir()
        let terraformDir: string = path.join(tempDir, 'terraform-azuredevops', 'terraform', version);
        // Only two options are win32 and linux.
        let terraformFileName = os.platform() === 'win32' ? 'terraform.exe': 'terraform';
        let terraformPath = path.join(terraformDir, terraformFileName)

        if (false === fs.existsSync(terraformPath)) {
            let urlos = os.platform() === 'win32' ? 'windows' : 'linux';
            let urlarch = os.arch() === 'x64' ? 'amd64' : 'amd32';
            let zipPath = path.join(terraformDir, 'terraform.zip');
            let url = `https://releases.hashicorp.com/terraform/${version}/terraform_${version}_${urlos}_${urlarch}.zip`
            console.log("Installing terraform...")
            console.log(`Downloading file: ${url}`)

            if (fs.existsSync(zipPath)) {
                // Remove zip
            }

            const file = fs.createWriteStream(zipPath);
            const request = http.get(url, function(response) {
                response.pipe(file);
            });
        }
    }

}
