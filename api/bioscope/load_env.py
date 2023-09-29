import dotenv
import os

env_path = os.path.join('.env')

dotenv.load_dotenv(env_path)

def getenv(var):
    return os.getenv(var)
