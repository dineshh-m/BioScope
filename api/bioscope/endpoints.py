from .app import app
from flask import jsonify
from .load_env import getenv
import requests

headers = {
        "accept": "application/json",
        "Authorization": getenv("auth")
}


def fetch_genres():
    url = "https://api.themoviedb.org/3/genre/movie/list?language=en"

    response = requests.get(url, headers=headers).json()
    gen_array = response["genres"]
    genres = {}
    for genre in gen_array:
        genres[genre["id"]] = genre["name"]
    
    return genres

genres = fetch_genres()


def find_genres(genres_ids):
    genres_arr = []
    for genre_id in genres_ids:
        if genres.get(genre_id):
            genres_arr.append(genres.get(genre_id))
    
    return genres_arr



def fetch_data(url):
    results = requests.get(url=url, headers=headers).json()['results']

    return results

def fetch_movies(url):
    results = fetch_data(url)
    response = {}
    movies = []
    count = 0

    for result in results:
        count += 1
        movie = {}
        movie['title'] = result['title']
        movie['backdrop_path'] = f'https://image.tmdb.org/t/p/original{result["backdrop_path"]}'
        movie['poster_path'] = f'https://image.tmdb.org/t/p/original{result["poster_path"]}'
        movie['overview'] = result['overview']
        movie['genres'] = find_genres(result['genre_ids'])
        movies.append(movie)

    response['count'] = count
    response['poster_movies'] = movies

    return jsonify(response)

def fetch_tv(url):
    response = {}
    results = fetch_data(url)
    print(results)
    tvs = []
    count = 0
    for result in results:
        count += 1
        tv = {}
        tv['title'] = result['name']
        tv['backdrop_path'] = f'https://image.tmdb.org/t/p/original{result["backdrop_path"]}'
        tv['poster_path'] = f'https://image.tmdb.org/t/p/original{result["poster_path"]}'
        tv['overview'] = result['overview']
        tv['genres'] = find_genres(result['genre_ids'])
        tvs.append(tv)

    response['count'] = count
    response['poster_movies'] = tvs


    return jsonify(response)


def fetch_people(name):
    url = f"https://api.themoviedb.org/3/search/person?query={name}&include_adult=false&language=en-US&page=1"
    response = {}
    
    results = requests.get(url=url, headers=headers).json()['results']
    peoples = []

    for result in results:
        people = {}
        people['name'] = result['name']
        people['poster_path'] =  f'https://image.tmdb.org/t/p/original/{result["profile_path"]}' if result['profile_path'] else None
        peoples.append(people)

    response['poster_movies'] = peoples

    return jsonify(response)

@app.route("/")
def home():
    return "Hello, world"

@app.route('/api/home')
def index():
    url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"

    return fetch_movies(url)

@app.route("/api/popular/tv")
def series():
    url = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"


    return fetch_tv(url)

@app.route("/api/movie/top_rated")
def top_movies():
    url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"

    return fetch_movies(url)

@app.route("/api/tv/top_rated")
def top_series():
    url = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"

    return fetch_tv(url)
    

@app.route("/api/search/movie/<moviename>")
def search_movie(moviename):
    response = {}
    url = f"https://api.themoviedb.org/3/search/movie?query={moviename}&include_adult=false&language=en-US&page=1"

    return fetch_movies(url)


@app.route("/api/search/tv/<tvname>")
def search_tv(tvname):
    url = f"https://api.themoviedb.org/3/search/tv?query={tvname}&include_adult=false&language=en-US&page=1"

    return fetch_tv(url)


@app.route("/api/search/people/<name>")
def search_people(name):

    return fetch_people(name)

