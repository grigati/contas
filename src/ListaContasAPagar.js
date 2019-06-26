import React from 'react';
import { Table } from 'antd';
import { ordenarContasAPagar } from './backend';

const { Column } = Table;

class ListaContasAPagar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contas: null
        }
    }

    componentDidMount() {
        // Busca lista de contas a pagar do backend
        const contas = ordenarContasAPagar();
        this.setState({ contas: contas });
    }

    render() {
        if (!this.state.contas)
            return null;

        return (
            <Table dataSource={this.state.contas} rowKey={conta => conta.id}>
                <Column title="Descrição" dataIndex="descricao" key="descricao" />
                <Column title="Quem Pagou a Conta" dataIndex="responsavel" key="responsavel" />
                <Column 
                    title="Valor" 
                    dataIndex="valor" 
                    key="valor" 
                    render={valor => (
                        <span>
                            {valor.toLocaleString("pt-BR", { 
                                minimumFractionDigits: 2, 
                                style: 'currency', 
                                currency: 'BRL'
                            })}
                        </span>
                    )}
                />
                <Column 
                    title="Data de Vencimento" 
                    dataIndex="dataVencimento" 
                    key="dataVencimento"
                    render={dataVencimento => (
                        <span>
                            {new Date(dataVencimento).toLocaleDateString() }
                        </span>
                    )} />
                <Column 
                    title="Ciclo de Repetição" 
                    dataIndex="cicloRepeticao" 
                    key="cicloRepeticao"
                    render={ciclo => (
                        <span>
                            {(ciclo === 1) ? 
                                "Mensal" 
                                : (ciclo === 6) ? "Semestral" : "Anual" 
                            }
                        </span>
                    )} /> />
            </Table>
        );
    } 
}

export default ListaContasAPagar;