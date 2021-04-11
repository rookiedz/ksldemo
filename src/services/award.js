import { bdg } from "./http";
async function roundAward() {
  const res = await bdg.get("/lottery-draws");
  return res.data;
}
async function getAward(round_no) {
  const res = await bdg.get("/");
  return res.data;
}

export { roundAward, getAward };
