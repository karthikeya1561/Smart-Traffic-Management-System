from flask import Blueprint
from models.Transactions import Transactions

first = Blueprint("first", __name__,static_folder="static",template_folder="template")

@first.route('/home')
def Home():
    const = Transactions()
    data = const.get_data()
    return data

