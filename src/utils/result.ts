export function encodeEgogramResult(answers: (number | null)[]): string {
  const stringifiedAnswers = answers.map((a) =>
    a === null ? "null" : a.toString()
  );
  const joinedAnswers = stringifiedAnswers.join("");

  return encodeURI(Buffer.from(joinedAnswers).toString("base64"));
}

export function decodeEgogramResult(encoded: string): (number | null)[] {
  const decoded = Buffer.from(decodeURI(encoded), "base64").toString();

  return decoded
    .split("")
    .map((a) => (a === "" ? null : parseInt(a)))
    .filter((a) => !isNaN(a ?? NaN));
}
