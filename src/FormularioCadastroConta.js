import React from 'react';
import { Input, Form, Button, InputNumber, DatePicker, Select, notification } from 'antd';
import { cadastrarContaAPagar } from './backend';
import 'antd/dist/antd.css';

const { TextArea } = Input;
const { Option } = Select;

class FormularioCadastroConta extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            // Envia para o backend
            cadastrarContaAPagar(values);

            // Abre uma notificação com o resultado do cadastro
            notification.open({
                message: 'Cadastro efetuado com sucesso'
            });
        }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        
        return (
            <Form layout="vertical" style={{ maxWidth: "500px" }}onSubmit={this.handleSubmit}>
                {/* Descrição */}
                <Form.Item label="Descrição">
                    {getFieldDecorator('descricao', {
                        rules: [{ required: true, message: 'Campo obrigatório' }],
                    })(
                    <TextArea
                        placeholder="Descrição da Conta"
                        autosize={{ minRows: 2, maxRows: 6 }}
                    />)}
                </Form.Item>

                {/* Quem Pagou */}
                <Form.Item label="Quem Pagou">
                    {getFieldDecorator('responsavel', {
                        rules: [{ required: true, message: 'Campo obrigatório' }],
                    })(
                    <Input placeholder="Quem Pagou" />
                    )}
                </Form.Item>

                {/* Valor */}
                <Form.Item label="Valor">
                    {getFieldDecorator('valor', {
                        rules: [{ required: true, message: 'Campo obrigatório' }],
                    })(
                    <InputNumber 
                        min={0}
                        step={0.1} 
                    />)}
                </Form.Item>

                {/* Data de vencimento */}
                <Form.Item label="Data de Vencimento">
                    {getFieldDecorator('dataVencimento', {
                        rules: [{ required: true, message: 'Campo obrigatório' }],
                    })(
                    <DatePicker />
                    )}
                </Form.Item>

                {/* Tempo de Repetição */}
                <Form.Item label="Ciclo de repetição">
                    {getFieldDecorator('cicloRepeticao', {
                        rules: [{ required: true, message: 'Campo obrigatório' }],
                    })(
                    <Select initialValue="1">
                        <Option value={1}>Mensal</Option>
                        <Option value={6}>Semestral</Option>
                        <Option value={12}>Anual</Option>
                    </Select>
                    )}
                </Form.Item>

                {/* Número de repetições */}
                <Form.Item label="Número de Repetições">
                    {getFieldDecorator('numRepeticoes', {
                        rules: [{ required: true, message: 'Campo obrigatório' }],
                    })(
                    <InputNumber min={1} initialValue={1} />
                    )}
                </Form.Item>
                
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Cadastrar
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default FormularioCadastroConta;