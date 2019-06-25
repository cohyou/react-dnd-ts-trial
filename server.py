import flask

app = flask.Flask(__name__)

@app.route('/')
def dl():
    from pathlib import Path
    resp = flask.Response(Path('d.csv').open().read())
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

@app.route('/ts')
def dl2():
    from pathlib import Path
    resp = flask.Response(Path('tsconfig.json').open().read())
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

@app.route('/csv')
def dl3():
    from pathlib import Path
    resp = flask.Response(Path('d.csv').open().read())
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

app.run()

