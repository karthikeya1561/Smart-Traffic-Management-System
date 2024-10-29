from flask import Flask
from blueprints.Blueprints import AllBlueprints

app = Flask(__name__)

for blueprint, prefix in AllBlueprints:
        app.register_blueprint(blueprint, url_prefix=prefix)
        

if __name__ == "__main__":
    app.run(debug=True)