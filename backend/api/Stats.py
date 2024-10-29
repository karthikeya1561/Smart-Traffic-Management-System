from flask import Blueprint

second = Blueprint("second", __name__,static_folder="static",template_folder="template")

@second.route('/dash')
def Test():
    return "Test 2"