import type { IncomingMessage, ServerResponse } from "http";
import axios from "axios";

const ENDPOINT = "http://localhost:8080/todos";

const API_HEAD = {
  headers: {
    // access_tokenは本来環境変数にするものではないです。力尽きました。ごめんなさい。
    "X-Api-Version": "2020-06-15",
    accept: "application/json",
  },
};

export default async (req: IncomingMessage, res: ServerResponse) => {
  if (req.method != "GET") {
    console.log(req.method);
    res.statusCode = 448;
    res.end();
  }

  let data: Array<any>;
  await axios.get(`${ENDPOINT}`).then((res) => {
    data = res.data;
  });

  const json = JSON.stringify(data);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  console.log(data);
  res.end(json);
};
