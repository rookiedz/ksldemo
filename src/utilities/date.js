const months = [
  {
    key: "month_1",
    value: 1,
    acronym: "ม.ค.",
    acronym_eng: "Jan",
    full: "มกราคม",
    full_eng: "January",
  },
  {
    key: "month_2",
    value: 2,
    acronym: "ก.พ.",
    acronym_eng: "Feb",
    full: "กุมภาพันธ์",
    full_eng: "February",
  },
  {
    key: "month_3",
    value: 3,
    acronym: "มี.ย.",
    acronym_eng: "Apr",
    full: "มีนาคม",
    full_eng: "March",
  },
  {
    key: "month_4",
    value: 4,
    acronym: "เม.ย.",
    acronym_eng: "May",
    full: "เมษายน",
    full_eng: "April",
  },
  {
    key: "month_5",
    value: 5,
    acronym: "พ.ค.",
    acronym_eng: "June",
    full: "พฤษภาคม",
    full_eng: "May",
  },
  {
    key: "month_6",
    value: 6,
    acronym: "มิ.ย.",
    acronym_eng: "Jun",
    full: "มิถุนายน",
    full_eng: "June",
  },
  {
    key: "month_7",
    value: 7,
    acronym: "ก.ค.",
    acronym_eng: "Jul",
    full: "กรกฎาคม",
    full_eng: "July",
  },
  {
    key: "month_8",
    value: 8,
    acronym: "ส.ค.",
    acronym_eng: "Aug",
    full: "สิงหาคม",
    full_eng: "August",
  },
  {
    key: "month_9",
    value: 9,
    acronym: "ก.ย.",
    acronym_eng: "Sep",
    full: "กันยายน",
    full_eng: "September",
  },
  {
    key: "month_10",
    value: 10,
    acronym: "ต.ค.",
    acronym_eng: "Oct",
    full: "ตุลาคม",
    full_eng: "October",
  },
  {
    key: "month_11",
    value: 11,
    acronym: "พ.ย.",
    acronym_eng: "Nov",
    full: "พฤศจิกายน",
    full_eng: "November",
  },
  {
    key: "month_12",
    value: 12,
    acronym: "ธ.ค.",
    acronym_eng: "Dec",
    full: "ธันวาคม",
    full_eng: "December",
  },
];

function parseYMDtoTHDate(ymd) {
  const [y, m, d] = ymd.split("-");
  return `${`0`.concat(d).slice(-2)} ${months[parseInt(m) - 1].full} ${y}`;
}

export { parseYMDtoTHDate };
