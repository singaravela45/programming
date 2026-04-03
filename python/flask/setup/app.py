from flask import Flask,render_template
import flask_mysqldb from MySQL
app=Flask(__name__)
@app.route("/home")
def index():
    return render_template("base.html")
if __name__ == "__main__":
    app.run(debug=True)~