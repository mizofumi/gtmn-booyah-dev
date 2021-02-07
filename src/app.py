from flask import Flask, Response, request, jsonify, render_template

app = Flask(__name__, static_folder='./frontend/dist/static',
            template_folder='./frontend/dist')

# トップページ


@app.route("/", defaults={'path': ''})
@app.route("/<path:path>")
def index(path):
    return render_template('index.html')
