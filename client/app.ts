require("dotenv").config();
import { ElevenLabsClient, play, stream } from "elevenlabs";

const elevenlabs = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY,
});

async function getAllRes() {
  const models = await elevenlabs.models.getAll();
  console.log("ALL MODELS", models);

  const voices = await elevenlabs.voices.getAll();
  console.log("ALL VOICES", voices);
}

async function generateAudio() {
  const audio = await elevenlabs.generate({
    voice: "Dave",
    text: "Hello! 你好! Hola! नमस्ते! Bonjour! こんにちは! مرحبا! 안녕하세요! Ciao! Cześć! Привіт! வணக்கம்! I'm Bolaji Ayodeji.",
    model_id: "eleven_multilingual_v2",
  });
  console.log("Playing audio...");
  await play(audio);
}

async function streamAudio() {
  const audio = await elevenlabs.generate({
    stream: true,
    voice: "Rachel",
    text: "My name is... Bolaji Ayodeji.",
    model_id: "eleven_multilingual_v2",
  });
  console.log("Streaming audio...");
  stream(audio);
}

generateAudio();
streamAudio();
