import requests, os

from dotenv import load_dotenv

load_dotenv()


def getAllRes(type):
    response = requests.get(
        f"https://api.elevenlabs.io/v1/{type}",
        headers={
            "Content-Type": "application/json",
            "xi-api-key": os.getenv("ELEVENLABS_API_KEY"),
        },
    )
    data = response.json()
    print(f"ALL {type.upper()}", data)


# getAllRes("models")
# getAllRes("voices")


def generateAudio():
    voiceId = "CYw3kZ02Hs0563khs1Fj"

    response = requests.post(
        f"https://api.elevenlabs.io/v1/text-to-speech/{voiceId}",
        headers={
            "Accept": "audio/mpeg",
            "Content-Type": "application/json",
            "xi-api-key": os.getenv("ELEVENLABS_API_KEY"),
        },
        json={
            "text": "Hi, I'm Bolaji Ayodeji.",
            "model_id": "eleven_multilingual_v2",
            "voice_settings": {"stability": 0.5, "similarity_boost": 0.5},
        },
    )
    with open("audio-py.mp3", "wb") as audio_file:
        audio_file.write(response.content)
    print("Audio file saved successfully!")


generateAudio()
