import React from 'react';
import FormularioCadastroConta from './FormularioCadastroConta';
import { Form } from 'antd';
import ListaContasAPagar from './ListaContasAPagar';

function App() {
  const Formulario = Form.create({})(FormularioCadastroConta);

  return (
    <div>
      <ListaContasAPagar />
      <Formulario />
    </div>
  );
}

export default App;
