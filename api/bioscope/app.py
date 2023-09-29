from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Some rand text'
CORS(app)
# CORS(app, origins="http://192.168.109.62:3000")

from . import endpoints
