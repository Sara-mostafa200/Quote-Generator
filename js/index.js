quote = [
  {
    text: "“My mother always used to say: The older you get, the better you get, unless you’re a banana.”",
    name: " —Rose",
  },
  {
    text: " “If I’m not back in five minutes, just wait longer.” ",
    name: " —Ace Ventura",
  },
  {
    text: " “Be yourself; everyone else is already taken.” ",
    name: " ― Oscar Wilde",
  },
  {
    text: "  “A day without sunshine is like, you know, night.” ",
    name: " —Steve Martin",
  },
  {
    text: "  “Accept who you are. Unless you’re a serial killer.” ",
    name: " —Ellen DeGeneres",
  },
  {
    text: " “I prefer not to think before speaking. I like being as surprised as everyone else by what comes out of my mouth.” ",
    name: " —Anonymous",
  },
  {
    text: " “I like my money where I can see it: hanging in my closet.”",
    name: "—Carrie",
  },
  {
    text: "“Anyone can do any amount of work, provided it isn’t the work he is supposed to be doing at that moment.”",
    name: " —Robert Benchley",
  },
];

var list = [];

function show() {
  if (list.length == 0) {
    list = list.concat(quote);
  }
  var randomIndex = Math.floor(Math.random() * list.length);

  var cartona = `<h2 class="my-2 ">${list[randomIndex].text}</h2>
        <p class="fst-italic fs-5 ms-auto ">${list[randomIndex].name}</p>`;

  document.getElementById("demo").innerHTML = cartona;

  list.splice(randomIndex, 1);
}
