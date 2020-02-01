from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import request, make_response, jsonify

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb://localhost:27017/aerchain"
mongo = PyMongo(app)

# READ LEVEL1 (IT SHOULD SHOWS LEVEL1)
@app.route('/level1')
def Level1():
    level1 = mongo.db.parentreference.find({'parent' : 'null'})
    return dumps(level1)

# WRITE LEVEL1 
@app.route('/writelevel1', methods = ['POST'])
def writeLevel1():
    name = request.json['name']
    category = {'name' : name, 'parent' : 'null'}
    count = mongo.db.parentreference.find(category).count()
    if(count == 0):
        mongo.db.parentreference.insert_one(category)
        return {'status' : 200}
    else:
        return{'message':"Category Already Exist"}

# ---------***********--------*********------------
# LEVEL 2
# READ LEVEL2 (IT SHOULD SHOW LEVEL2)
@app.route('/level2/<parent>')
def Level2(parent):
    level2 = mongo.db.parentreference.find({'parent' : parent})
    return dumps(level2)

# WRITE LEVEL2 
@app.route('/writelevel2/<parent>', methods = ['POST'])
def writeLevel2(parent):
    brand_name = request.json['brand_name']
    brand = {'brand_name' : brand_name, 'parent' : parent}
    count = mongo.db.parentreference.find(brand).count()
    if(count == 0):
        mongo.db.parentreference.insert_one(brand)
        return {'status' : 200}
    else:
        return{"message":"Brand Already Exist"}

# ---------***********--------*********------------
# LEVEL 3
# READ LEVEL3 (IT SHOULD SHOW LEVEL3)
@app.route('/level3/<parent>')
def Level3(parent):
    level3 = mongo.db.parentreference.find({'parent' : parent})
    return dumps(level3)

# WRITE LEVEL3 
@app.route('/writelevel3/<parent>', methods = ['POST'])
def writeLevel3(parent):
    name = request.json['name']
    color = request.json['color']
    price = request.json['price']
    manufacturer = request.json['manufacturer']
    dimension= request.json['dimension']
    category = {'name' : name, 'color':color,'price':price,'manufacturer':manufacturer,'dimension':dimension,'parent' : parent}
    count = mongo.db.parentreference.find(category).count()
    if(count == 0):
        mongo.db.parentreference.insert_one(category)
        return {'status' : 200}
    else:
        return{"message":"Product Alredy Exist"}