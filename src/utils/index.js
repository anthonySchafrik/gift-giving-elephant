export const generateRandomNumber = number => {
  let randomNumber = Math.random() * (number - 0) + 0;

  return Math.floor(randomNumber);
};

export const groupFilter = (group, personOne, personTwo) => {
  return group.filter(user => {
    return user.id !== personOne.id && user.id !== personTwo.id;
  });
};
