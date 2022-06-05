import datetime as dt
import requests
from flask import Flask, render_template, url_for
DATA = 'https://api.npoint.io/b0b4fad21e8f3536771e'
response = requests.get(DATA).json()

app = Flask(__name__)
year = str(dt.datetime.now().year)

@app.route('/')
def home():
  return render_template('index.html', year=year, posts=response)

@app.route('/about')
def about():
  return render_template('about.html', year=year)

@app.route('/contact')
def contact():
  return render_template('contact.html', year=year)

if __name__ == '__main__':
  # app.run(debug=True) 
  pass
