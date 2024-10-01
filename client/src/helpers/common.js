export const hp = (percentage) => {
  const deviceHeight = window.innerHeight;
  return (percentage * deviceHeight) / 100;
};

export const wp = (percentage) => {
  const deviceWidth = window.innerWidth;
  return (percentage * deviceWidth) / 100;
};
