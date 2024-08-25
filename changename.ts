console.log("Hello via Bun!");

const formData = new FormData();
formData.append("token", process.env.SLACK_TOKEN!);
formData.append("workflow_id", "Wf07JBNTGRRT");
formData.append("title", "i");
formData.append("description", ".");

const response = await fetch(
  "https://hackclub.slack.com/api/functions.workflows.update",
  {
    headers: {
      Cookie: process.env.SLACK_COOKIE!,
    },
    body: formData,
    method: "POST",
  }
).then((r) => r.json());

console.log(response);
