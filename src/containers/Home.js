import React, { useEffect, useState } from "react";
import { getAward, roundAward } from "../services/award";
import { genKey, parseYMDtoTHDate } from "../utilities";

export default function Home() {
  const [rounds, setRounds] = useState([]);
  const [awards, setAwards] = useState(null);
  function compare(first, second) {
    if (parseInt(first.id) > parseInt(second.id)) {
      return -1;
    }
    if (parseInt(first.id) < parseInt(second.id)) {
      return 1;
    }
    return 0;
  }
  async function loadRounds() {
    const data = await roundAward();
    setRounds(data.data.sort(compare));
  }
  async function loadAward(round_no) {
    const data = await getAward(round_no);
    setAwards(data.data);
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
      <main className="flex flex-grow">
        <div
          className="flex flex-col w-80 shadow-md"
          style={{ minWidth: "240px" }}
        >
          <div className="flex">
            <ul className="w-full my-1">
              {rounds.map((round) => (
                <li
                  key={genKey(`round_${round.id}`)}
                  className="py-2 px-3 hover:bg-primary hover:text-white cursor-pointer"
                  onClick={() => handleAward(round.id)}
                >
                  {parseYMDtoTHDate(round.name)}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-auto overflow-y-auto">
          <div className="flex">
            <ul>
              {awards &&
                awards.map((award) => (
                  <li>
                    <div>
                      <div>{award.alias}</div>
                      <div className="flex flex-wrap">
                        {award.numbers &&
                          award.numbers.map((number) => (
                            <div className="px-3">{number}</div>
                          ))}
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
