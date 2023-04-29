export const formatTimeNumber = (num: number) => {
  return num < 10 ? `0${num}` : num;
}

export const parseCodes = (data: string[] | null) => {
  if (!data) {
    return ""
  }

  return data.toString()

}
export const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
