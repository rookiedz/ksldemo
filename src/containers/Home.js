import React, { useEffect, useState } from "react";
import { TextField } from "../components/ui/inputs";
import { getAward, roundAward } from "../services/award";

export default function Home() {
  const [rounds, setRounds] = useState([]);
  const [award, setAward] = useState(null);
  async function loadRounds() {
    const data = await roundAward();
    setRounds(data.data);
  }
  async function loadAward(round_no) {
    const data = await getAward(round_no);
    setAward(data.data);
  }
  function handleAward(round_no) {
    loadAward(round_no);
  }
  useEffect(() => {
    let isMounded = true;
    if (isMounded) {
      loadRounds();
    }
    return () => {
      isMounded = false;
    };
  }, []);
  return (
    <>
      <main className="flex">
        <div>
          <TextField />
        </div>
      </main>
    </>
  );
}
