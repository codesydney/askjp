from flask import Flask, render_template, flash, redirect, url_for, Markup, request
from llama_index import GPTSimpleVectorIndex, Document, SimpleDirectoryReader
import os

app = Flask(__name__)

# Querying the index
#response = index.query("Should we sign each page when certifying an affidavit?")
#print(response)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/handle_question', methods=['POST'])
def handle_question():
    index = GPTSimpleVectorIndex.load_from_disk('index.json')
    answer = index.query(request.form['question'])
    return render_template('result.html', answer=answer)
 
# 404 error handler
@app.errorhandler(404)
def page_not_found(e):
    return render_template('errors/404.html'), 404

# 500 error handler
@app.errorhandler(500)
def internal_server_error(e):
    return render_template('errors/500.html'), 500

