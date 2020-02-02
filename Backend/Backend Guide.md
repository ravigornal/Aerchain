# Backend Guide

```
After cloning follow the steps to setup

1. Create virtual environment with Pyenv/virtualenv for python
2. pip install Flask
```



### To start the server

```
export FLASK_ENV=development
export FLASK_APP=server.py
flask run
```



### To Install MongoDB

```
sudo apt update
sudo apt install -y mongodb
sudo service mongod start
mongo
```



### To migrate the database

```
1. show dbs
2. use aerchain
3. show collections
4. db.parentreference.find().pretty()
```





### Database Structure

![Structure](https://raw.github.com/Voronenko/Storing_TreeView_Structures_WithMongoDB/master/images/categories_small.png)

###### Image Source : Codementor.io