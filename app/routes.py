from flask import Flask, render_template, request
import sqlite3, json

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/character")
def character():
    return render_template("character.html")


@app.route("/adventure_town")
def adventure_town():
    return render_template("adventure_town.html")

@app.route("/database")
def database():
    with open("app/static/backgrounds.json") as f:
        backgrounds = json.load(f)
    with open("app/static/items.json") as f:
        items = json.load(f)
    with open("app/static/traits.json") as f:
        traits = json.load(f)
    return render_template("database.html", backgrounds=backgrounds, items=items, traits=traits)


@app.route("/map")
def map():
    return render_template("map.html")

@app.route("/library")
def library():
    return render_template("library.html")

@app.route("/discord")
def discord():
    return render_template("discord.html")
