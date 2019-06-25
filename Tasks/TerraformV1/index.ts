import tl = require('azure-pipelines-task-lib/task')

var hasbin = require('hasbin')

if (false == hasbin.sync('terraform'))



async function run() {
    try {
        const inputString: string = tl.getInput("samplestring", true);
        if (inputString == 'bad') {
            tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
            return;
        }

        console.log('Hello', inputString);
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.Message)
    }
}

run();