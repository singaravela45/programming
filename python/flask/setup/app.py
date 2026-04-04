from flask import Flask,render_template,redirect,request
from flask_sqlalchemy import SQLAlchemy
app=Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///user.db" #creating a db
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app) #connects Flask + DB

class Table(db.Model):
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
        email_id=request.form['email'],
        phone_num=request.form['phone'])
        try:
            db.session.add(newtask)
            db.session.commit()
            return redirect("/")
        except Exception as e:
            print(f"error:{e}")
            return f"error:{e}"
    else :
        tasks=Table.query.order_by(Table.user_id).all()
        return render_template("base.html",tasks=tasks)

@app.route("/delete/<int:id>")
def delete(user_id:int):
    delete_task=Table.query.get_or_404(user_id)
    try:
        db.session.delete(delete_task)
        db.session.commit()
        return redirect("/")
    except Exception as e:
        return f"error{e}"
@app.route("/")
def edit(user_id:int):
    task=Table.query.get_or_404(user_id)
    if request.method=="POST":
        task.content=request.form[""]
if __name__ == "__main__":
    app.run(debug=True)