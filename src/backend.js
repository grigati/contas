// Simula as chamadas ao backend

/* Campos da conta:
 * - descricao
 * - responsavel (quem pagou a conta)
 * - valor
 * - data de vencimento
 * - ciclo de repeticao (em meses)
 * - número de repetições
 */
export function cadastrarContaAPagar(conta) {
    console.log('Valores recebidos: ', conta);
}

/* Chama o backend para marcar a conta como paga.
 * A data de vencimento deve ser atualizada de acordo com o ciclo
 * e o número de repetições deve ser decrementado em um
 */
export function pagarConta() { }

// Busca lista de próximas contas a pagar
export function buscarContasAPagar() {
    return [
        {   
            id: 1,
            cicloRepeticao: 1,
            dataVencimento: "2019-06-28",
            descricao: "Aluguel",
            numRepeticoes: 24,
            responsavel: "Otávio Sales",
            valor: 2000
        },
        {
            id: 2,
            cicloRepeticao: 6,
            dataVencimento: "2019-07-10",
            descricao: "Serviços de Manutenção",
            numRepeticoes: 4,
            responsavel: "Antônia Gomes",
            valor: 150.28
        },
        {
            id: 3,
            cicloRepeticao: 1,
            dataVencimento: "2019-07-15",
            descricao: "Telefone",
            numRepeticoes: 12,
            responsavel: "Emily Santos",
            valor: 250
        },
        {
            id: 4,
            cicloRepeticao: 12,
            dataVencimento: "2020-07-01",
            descricao: "IPTU",
            numRepeticoes: 3,
            responsavel: "Antônia Gomes",
            valor: 100
        }
    ];
}

// Organiza e ordena as contas para a visualização
export function ordenarContasAPagar() {
    const contas = buscarContasAPagar();
    let retorno = [];

    for (let i in contas) {
        const conta = contas[i];
        const { cicloRepeticao, dataVencimento, numRepeticoes } = conta;

        // Adiciona conta com a data de vencimento atualizada à lista que será retornada
        for (let repeticao=0; repeticao<numRepeticoes; repeticao++) {
            // Atualiza a data de acordo com o ciclo de repetição
            let data = new Date(dataVencimento);
            data.setMonth(data.getMonth() + cicloRepeticao*repeticao);

            // Passa para o formato yyyy-MM-dd
            let novoVencimento = data.toISOString().slice(0, 10);

            const novaConta = {
                ...conta,
                id: `conta-${conta.id}-${novoVencimento}`,
                dataVencimento: novoVencimento
            }

            retorno.push(novaConta);
        }
    }

    // Ordena as contas por data de vencimento
    retorno.sort((a, b) => ((a.dataVencimento > b.dataVencimento) ? 1 : -1));

    return retorno;
}