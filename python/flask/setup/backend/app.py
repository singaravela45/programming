from flask import Flask,render_template,redirect,request
from flask_sqlalchemy import SQLAlchemy
import os   
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app=Flask(__name__,template_folder=os.path.join(BASE_DIR, "../frontend/templates"))
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///user.db" #creating a db
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app) #connects Flask + DB

class Table(db.Model):
    __tablename__="users"
    user_id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(20),nullable=False)
    email_id=db.Column(db.String(20),nullable=False)
    phone_num=db.Column(db.String(15))
    def __repr__(self)->str:
            return f"Task {self.user_id}"

@app.route("/",methods=["GET","POST"])
def index():
    if request.method=="POST":
        newtask = Table(
        name=request.form['name'],
        email_id=request.form['email_id'],
        phone_num=request.form['phone_num'])
        try:
            db.session.add(newtask)
            db.session.commit()
            return redirect("/")
        except Exception as e:
            print(f"error:{e}")
            return f"error:{e}"
    else :
        tasks=Table.query.order_by(Table.user_id).all()
        return render_template("index.html",tasks=tasks)

@app.route("/delete/<int:user_id>")
def delete(user_id:int):
    delete_task=Table.query.get_or_404(user_id)
    try:
        db.session.delete(delete_task)
        db.session.commit()
        return redirect("/")
    except Exception as e:
        return f"error{e}"

@app.route("/edit/<int:user_id>",methods=["GET","POST"])
def edit(user_id:int):
    task=Table.query.get_or_404(user_id)
    if request.method=="POST":
        task.name=request.form['name']
        task.email_id=request.form['email_id']
        task.phone_num=request.form['phone_num']
        try:
            db.session.commit()
            return redirect("/")
        except Exception as e:
            return f"error : {e}"
    else :
        return render_template("edit.html", task=task)

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(host="0.0.0.0", port=5000, debug=True)