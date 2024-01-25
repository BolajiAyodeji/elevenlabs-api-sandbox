import requests
import os

from dotenv import load_dotenv

load_dotenv()


def get_all_res(type):
    response = requests.get(
        f"https://api.elevenlabs.io/v1/{type}",
        headers={
            "Content-Type": "application/json",
            "xi-api-key": os.getenv("ELEVENLABS_API_KEY"),
        },
    )
    data = response.json()
    print(f"ALL {type.upper()}", data)


# get_all_res("models")
# get_all_res("voices")


def generate_audio():
    voice_id = "CYw3kZ02Hs0563khs1Fj"

    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": os.getenv("ELEVENLABS_API_KEY"),
    }

    options = {
        "text": "Hi, I'm Bolaji Ayodeji.",
        "model_id": "eleven_multilingual_v2",
        "voice_settings": {"stability": 0.5, "similarity_boost": 0.5}
        # "pronunciation_dictionary_locators": [
        #     {"pronunciation_dictionary_id": "<string>", "version_id": "<string>"}
        # ],
    }

    response = requests.post(
        f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}",
        json=options,
        headers=headers,
    )
    print(response.json())


generate_audio()
