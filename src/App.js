import React from 'react';
import FormularioCadastroConta from './FormularioCadastroConta';
import { Form } from 'antd';

function App() {
  const Formulario = Form.create({})(FormularioCadastroConta);

  return (
    <div>
      <Formulario />
    </div>
  );
}

export default App;
