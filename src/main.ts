import { getOctokit } from "@actions/github";

import { collectDeploymentContext } from "./lib/context.js";
import { getRequiredInput } from "./lib/input.js";

import { run, Step } from "./steps/index.js";

const context = collectDeploymentContext();
console.log(`targeting ${context.owner}/${context.repo}`);

const token = getRequiredInput("token");
const github = getOctokit(token, {
  previews: ["ant-man-preview", "flash-preview"],
});

const step = getRequiredInput("step") as Step;
run(step, github, context);
