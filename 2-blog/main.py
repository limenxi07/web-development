import datetime as dt
import json

import requests
from flask import Flask, render_template, request

DATA = 'https://api.npoint.io/479662321b95032774cb'
response = requests.get(DATA).json()

app = Flask(__name__)
year = str(dt.datetime.now().year)

@app.route('/')
def home():
  return render_template('index.html', year=year, posts=response)

@app.route('/about')
def about():
  return render_template('about.html', year=year)

@app.route('/contact', methods=["GET", "POST"])
def contact():
  if request.method == 'POST':
    name = request.form["name"]
    email = request.form["email"]
    phone = request.form["phone"]
    message = request.form["message"]
    return render_template('contact.html', year=year, confirm=True)
  else:
    return render_template('contact.html', year=year, confirm=False)

@app.route('/post/<int:num>')
def post(num):
  return render_template('post.html', year=year, post=response[num-1])

if __name__ == '__main__':
  app.run(debug=True) 
