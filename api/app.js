require("dotenv").config();

async function getAllRes(type) {
  const response = await fetch(`https://api.elevenlabs.io/v1/${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "xi-api-key": process.env.ELEVENLABS_API_KEY,
    },
  });
  const data = await response.json();
  console.log(`ALL ${type.toUpperCase()}`, data);
}

// getAllRes("models");
// getAllRes("voices");

function generateAudio() {
  const voice_id = "CYw3kZ02Hs0563khs1Fj";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "xi-api-key": process.env.ELEVENLABS_API_KEY,
    },
    body: {
      text: "Hi, I'm Bolaji Ayodeji.",
      model_id: "eleven_multilingual_v2",
      voice_settings: {
        similarity_boost: 0.5,
        stability: 0.5,
      },
      // pronunciation_dictionary_locators: [
      //   { pronunciation_dictionary_id: "<string>", version_id: "<string>" },
      // ],
    },
  };

  fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice_id}`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

generateAudio();
