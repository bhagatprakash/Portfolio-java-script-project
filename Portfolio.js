// , "you Tuber", "Web Devloper"
let str = "Web Devloper";

let text = document.getElementById("text");

function print(index) {
  console.log(index);
  if (index === str.length) return;

  setTimeout(() => {
    console.log(str[index]);
    text.innerText += `${str[index]}`;
    print(index + 1);
  }, 1000);
}

print(0);
