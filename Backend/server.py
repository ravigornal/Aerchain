from flask import Flask, json, jsonify, request, make_response
import jwt
import hashlib
import os
from datetime import datetime
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask_pymongo import PyMongo
import math
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb://localhost:27017/Aerchain"
mongo = PyMongo(app)


@app.route("/createbrand", methods = ['POST'])
def createbrand():
    brand = request.json['brand']
    response = mongo.db.brands.find({"brand":brand}).count()

    if(response != 0):
        return({"message":"Brand is already exist"})
    else:
        new_brand = mongo.db.brands.insert({"brand":brand})
        return({"Success":"Brand Added Successfully"})

@app.route("/createbrand", methods = ['POST'])
def createbrand():
    brand = request.json['brand']
    response = mongo.db.brands.find({"brand":brand}).count()

    if(response != 0):
        return({"message":"Brand is already exist"})
    else:
        new_brand = mongo.db.brands.insert({"brand":brand})
        return({"Success":"Brand Added Successfully"})
   

if(__name__ == "__main__"):
    app.run()