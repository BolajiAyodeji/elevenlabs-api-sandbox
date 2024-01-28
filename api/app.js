require("dotenv").config();
const fetch = require("node-fetch");
const fs = require("fs").promises;

function getAllRes(type) {
  fetch(`https://api.elevenlabs.io/v1/${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "xi-api-key": process.env.ELEVENLABS_API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(`ALL ${type.toUpperCase()}`, data));
}

// getAllRes("models");
// getAllRes("voices");

async function generateAudio() {
  const voiceId = "CYw3kZ02Hs0563khs1Fj";

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    {
      method: "POST",
      headers: {
        Accept: "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": process.env.ELEVENLABS_API_KEY,
      },
      body: JSON.stringify({
        model_id: "eleven_multilingual_v2",
        text: "Hi, I'm Bolaji Ayodeji.",
        voice_settings: { similarity_boost: 0.5, stability: 0.5 },
      }),
    }
  );

  await fs.writeFile("audio-js.mp3", await response.buffer(), "binary");
  console.log("Audio file saved successfully!");
}

generateAudio();
