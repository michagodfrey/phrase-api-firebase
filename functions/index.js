const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const phrases = {
  1: {
    phrase: "Raining cats and dogs",
    meaning: "To be raining heavily",
    example:
      "I don't think we should do the picnic tomorrow, the weather report says it will be raining cats and dogs.",
  },
  2: {
    phrase: "Mad as cut snakes",
    meaning: "Very angry, crazy, eccentric",
    example:
      "Take care in Queensland mate, they're as mad as cut snakes up there.",
  },
  3: {
    phrase: "Have the lion's share",
    meaning: "To get the largest amount of something",
    example:
      "Sarah got the lion's share of the credit for the project but I think other managers did just as much.",
  },
  4: {
    phrase: "Fish out of water",
    meaning: "To be out of one's usual environment or expertise.",
    example:
      "The practical exam didn't go very well, I felt like a fish out of water.",
  },
  5: {
    phrase: "Bull in a china shop",
    meaning: "Clumsy, causing damage with unthinking behaviour",
    example:
      "I wouldn't trust Darren to rearrange the furniture, he's like a bull in a china shop.",
  },
  6: {
    phrase: "Go down the rabbit hole",
    meaning:
      "To enter a strange situation, especially if it gets stranger as it unfolds.",
    example:
      "It was simply a flat tyre, but I went down the rabbit hole before it finally got fixed.",
  },
  7: {
    phrase: "Elephant in the room",
    meaning:
      "Something very important that everone is ignoring or afraid to talk about.",
    example:
      "His drinking problem was the elephant in the room; everyone was afraid to talk about it",
  },
  8: {
    phrase: "Sitting ducks",
    meaning: "Easy targets, vulnerable",
    example:
      "We have no way of defending ourselves here, if the enemy attack we'll be sitting ducks.",
  },
  9: {
    phrase: "Until the cows come home",
    meaning: "Something that won't happen or finish for a long time",
    example: "This is taking too long, we'll be here until the cows come home.",
  },
  10: {
    phrase: "Straight from the horse's mouth",
    meaning:
      "Information directly from the someone with experience or authority.",
    example:
      "I wouldn't have believed it but this was straight from the horse's mouth.",
  },
  11: {
    phrase: "Have bigger fish to fry",
    meaning: "To have more important things to do.",
    example: "Don't worry about that thing yet, we have bigger fish to fry.",
  },
  12: {
    phrase: "Let the cat out of the bag",
    meaning: "To reveal a secret",
    example:
      "It was supposed to be a confidential but someone let the cat out of the bag.",
  },
  13: {
    phrase: "Kill two birds with one stone",
    meaning: "To achieve two things with a single action",
    example:
      "Our energy policy will kiil two birds with one stone by reducing emissions and saving consumers money.",
  },
  14: {
    phrase: "Flogging a dead horse",
    meaning:
      "To keep talking about a subject that has already been discussed or decided.",
    example:
      "Why do you keep bringing that up? You are flogging a dead horse at this point.",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/random-phrase", (req, res) => {
  let phraseKeys = Object.keys(phrases);
  let randomPhrase = phraseKeys[Math.floor(Math.random() * phraseKeys.length)];
  res.json(phrases[randomPhrase]);
});

exports.app = functions.https.onRequest(app);
