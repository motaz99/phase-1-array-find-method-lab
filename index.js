// code your solution here

const superbowlWin = (record) => {
  const winObj = record.find((element) =>
    element.result === "W" ? element : undefined
  );
  return winObj ? winObj.year : undefined;
};
