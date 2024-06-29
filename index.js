import * as core from '@actions/core';

try {
    const name = core.getInput('name');
    const outputValue = `Hello ${name}`;
    core.setOutput('greeting', outputValue);
} catch (error) {
    core.setFailed(err);
}
