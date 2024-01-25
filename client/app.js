require("dotenv").config();
import { ElevenLabsClient, play, stream } from "elevenlabs";

const elevenlabs = new ElevenLabsClient({
  apiKey, // Defaults to process.env.ELEVENLABS_API_KEY
});

const models = await elevenlabs.models.getAll();
const voices = await elevenlabs.voices.getAll();

// console.log("ALL MODELS", models);
// console.log("ALL VOICES", voices);

const audio = await elevenlabs.generate({
  voice: "Dave",
  text: "Hello! 你好! Hola! नमस्ते! Bonjour! こんにちは! مرحبا! 안녕하세요! Ciao! Cześć! Привіт! வணக்கம்! I'm Bolaji Ayodeji.",
  model_id: "eleven_multilingual_v2",
});
print("Playing audio...");
await play(audio);

const audioStream = await elevenlabs.generate({
  stream: true,
  voice: "Rachel",
  text: "My name is... Bolaji Ayodeji.",
  model_id: "eleven_multilingual_v2",
});
print("Streaming audio...");
stream(audioStream);
