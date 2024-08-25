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
      Cookie: `utm=%7B%7D; b=.664b361ec72b83efa171b1003287b3ee; ssb_instance_id=f7fd8100-c66d-49aa-8e2b-fb461f91a998; OptanonConsent=isGpcEnabled=1&datestamp=Sun+Aug+25+2024+13%3A36%3A57+GMT-0400+(Eastern+Daylight+Time)&version=202402.1.0&browserGpcFlag=1&isIABGlobal=false&hosts=&consentId=ea92d818-f691-45d2-a667-5414c74d3e6a&interactionCount=2&isAnonUser=1&landingPath=NotLandingPage&groups=1%3A1%2C3%3A1%2C2%3A1%2C4%3A0&AwaitingReconsent=false&geolocation=%3B; _lc2_fpi=e00b11ac9c9b--01j3exjw7zh8jmbgqrfdqkw162; _lc2_fpi_me…ct_page=1; OptanonAlertBoxClosed=2024-07-25T00:53:19.824Z; tz=-240; web_cache_last_updatedc4e4e9bc280f7567b9a3e67d319b735e=1724589147373; shown_download_ssb_modal=1; show_download_ssb_banner=1; no_download_ssb_banner=1; d-s=1721868798; x=664b361ec72b83efa171b1003287b3ee.1724607379; uc=xoxd-nzuWviqoVRuY%2B64CDHUqZTVlgBUXsNpk6UHEmlmluWEUelUbr%2FYWkh7iNXsVcUjAI7LkW%2F1GyVOfPGjhRr5yzAcTdsK%2Bk3wvW3FyoawPogCHcr1NVZmrdGyQJ2qgWWXz3IBtb%2BYHo0vFTplrOkrkYQC6NnnL4Ou0i8UR18HX%2B8zCCRhWY1nc6TVlXfNVTtjZFP%2FGKk71TnM%3D`,
    },
    body: formData,
    method: "POST",
  }
).then((r) => r.json());

console.log(response);
