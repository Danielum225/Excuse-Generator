window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let possetion = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let image;

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    pronoun[proIndx] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    when[whenIndex] +
    " "
  );
};
