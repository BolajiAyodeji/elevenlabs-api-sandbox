import os
from elevenlabs import set_api_key, voices, generate, play, stream
from dotenv import load_dotenv

load_dotenv()

set_api_key(os.getenv("ELEVENLABS_API_KEY"))

# Get all voices
voices = voices()
# print(voices)

# Generate audio
audio = generate(
    text="Hello! 你好! Hola! नमस्ते! Bonjour! こんにちは! مرحبا! 안녕하세요! Ciao! Cześć! Привіт! வணக்கம்! I'm Bolaji Ayodeji.",
    voice="Dave",
    model="eleven_multilingual_v2",
)
print("Playing audio...")
play(audio)

# Stream audio
audio_stream = generate(
    text="Hello! 你好! Hola! नमस्ते! Bonjour! こんにちは! مرحبا! 안녕하세요! Ciao! Cześć! Привіт! வணக்கம்! I'm Bolaji Ayodeji.",
    stream=True,
)

print("Streaming audio...")
stream(audio_stream)
