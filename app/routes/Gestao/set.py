from app.models import *
from app.Forms import *

from typing import Type
from flask_wtf import FlaskForm

def config_form(form) -> Type[FlaskForm]:
    
    form.empresa.choices.extend(
        [(query.nome_empresa, query.nome_empresa) for query in Empresa.query.all()])
    form.departamento.choices.extend(
        [(query.departamento, query.departamento) for query in Departamento.query.all()])
    form.cargo.choices.extend(
        [(query.cargo, query.cargo) for query in Cargos.query.all()])
    
    return form