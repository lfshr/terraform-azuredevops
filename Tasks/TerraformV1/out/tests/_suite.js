"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var assert = __importStar(require("assert"));
var ttm = __importStar(require("azure-pipelines-task-lib/mock-test"));
describe('Sample task tests', function () {
    before(function () {
    });
    after(function () {
    });
    it('should succeed with sample inputs', function (done) {
        var tp = path.join(__dirname, 'success.js');
        var tr = new ttm.MockTestRunner(tp);
        tr.run();
        console.log(tr.succeeded);
        assert.equal(tr.succeeded, true, 'should have succeeded');
        assert.equal(tr.warningIssues.length, 0, 'should have no warnings');
        assert.equal(tr.errorIssues.length, 0, 'should have no errors');
        done();
    }).timeout(1000);
    it('should fail if tool returns 1', function (done) {
        var tp = path.join(__dirname, 'failure.js');
        var tr = new ttm.MockTestRunner(tp);
        tr.run();
        console.log(tr.succeeded);
        assert.equal(tr.succeeded, false, 'should have failed');
        assert.equal(tr.warningIssues, 0, "should have no warnings");
        assert.equal(tr.errorIssues.length, 1, "should have 1 error issue");
        assert.equal(tr.errorIssues[0], 'Bad input was given', 'error issue output');
        assert.equal(tr.stdout.indexOf('Hello bad'), -1, "Should not display Hello bad");
        done();
    }).timeout(1000);
});
//# sourceMappingURL=_suite.js.map