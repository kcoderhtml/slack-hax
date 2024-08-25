console.log("Hello via Bun!");

const formData = new FormData();
formData.append("token", process.env.SLACK_TOKEN!);
formData.append(
  "step",
  JSON.stringify({
    id: "1e00e4b4-e114-4d78-8cdc-291b121e1a56",
    function_id: "Fn0107",
    inputs: {
      channel_ids: { value: ["C07445ZSW2K"], hidden: false, locked: false },
      user_ids: {
        value: ["{{inputs.Ft07JEHSP658__user_id}}"],
        hidden: false,
        locked: false,
      },
    },
  })
);
formData.append("workflow_id", "Wf07JT80C1BK");

const response = await fetch(
  "https://hackclub.slack.com/api/functions.workflows.steps.update",
  {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64; rv:129.0) Gecko/20100101 Firefox/129.0",
    },
    body: formData,
    method: "POST",
  }
).then((r) => r.json());

console.log(response);
