from flask import Flask, Response, request, jsonify, render_template

app = Flask(__name__)
 
# トップページ
@app.route("/")
def index():
    return render_template('index.html')