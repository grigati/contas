import React from 'react';
import FormularioCadastroConta from './FormularioCadastroConta';
import { Form, Button, Modal } from 'antd';
import ListaContasAPagar from './ListaContasAPagar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mostrarModal: false
    }
  }

  abrirModal = () => {
    this.setState({
      mostrarModal: true,
    });
  };

  fecharModal = () => {
    this.setState({
      mostrarModal: false,
    });
  };

  render () {
    const CadastroConta = Form.create({})(FormularioCadastroConta);

    return (
      <div>
        {/* Cadastro de contas */}
        <Modal
          title="Cadastrar Conta a Pagar"
          style={{ top: "1em" }}
          visible={this.state.mostrarModal}
          onCancel={this.fecharModal}
          footer={null}
        >
          <CadastroConta />
        </Modal>

        {/* Botão para abrir modal de cadastrar compras */}
        <div style={{ display: "flex" }}>
          <Button type="primary" style={{ margin: "20px auto" }} onClick={this.abrirModal}>
            Cadastrar Conta a Pagar
          </Button>
        </div>

        <ListaContasAPagar />
      </div>
    );
  }
}

export default App;
