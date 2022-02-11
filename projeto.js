const prompt = require('prompt-sync')()

console.clear
console.log()

/// VARIAVEIS BÁSICAS & OBJETOS \\\
var status = {
    dinheiro: 50,
    prazoMax: 20,
    valor: 5000,
    dataInicial: 01
}
var diaAtual = 0;

/// ARRAYS \\\
opcoes = [
    '[1] Vender objetos pessoais de casa',
    '[2] Pedir dinheiro emprestado para os pais',
    '[3] Vender água na rua (Pode lucrar ou perder, caso as vendas não sejam lucrativas) - Custo: 25.00 e possivel faturamento: 100.00',
    '[4] Trabalhar como garçon - 250.00 ']
opcoesVenda = [
    '[1] Kit de livros da sua estante - R$ 150,00',
    '[2] Caixa de som antiga - R$ 80,00',
    '[3] Todos os jogos do seu videogame - R$ 500,00' ]

/// FUNÇÕES DO GAME \\\
function diaadia() {
    diaAtual = diaAtual + 1
    console.log(`Dia ${diaAtual}:`)
}

// INICIO DO GAME 

let nome = prompt('Qual é o seu nome? ')
console.log()
console.log(`${nome}, você fez uma entrevista para uma vaga de emprego para Desenvolvedor Web Full-Stack na cidade de Lisboa, Portugal e passou. Porém você 
precisa de ${status.valor} para arcar com os custos da viagem e atualmente tem ${status.dinheiro} em sua conta bancária.`)
console.log()
let escolha = +prompt('Você vai aceitar e tentar conseguir a grana [1], ou vai desistir da vaga? [2] - ')
console.log()

if (escolha == 1) {
    console.log(`Então você vai precisar conseguir ${status.valor} até o dia ${status.prazoMax}, para isso você terá que escolher: `)
    console.log()

    for (i = status.prazoMax; status.dataInicial <= status.prazoMax; status.dataInicial++) {
    

    diaadia()

    for (let i of opcoes) {
      console.log(i)
    }

    console.log()
    console.log()
    let escolha1 = +prompt('Qual você escolhe? ')
    console.log()

    if (escolha1 == 1) { 
        console.log()
        for (let i of opcoesVenda) {
            console.log(i)
        }
        console.log()
    if ((opcoesVenda[0] == 'Você já vendeu os livros') && (opcoesVenda[1] == 'Você já vendeu a caixa') && (opcoesVenda[2] == 'Você já vendeu os games')){
        console.log()
        console.log('Você já vendeu todos os itens e não tem mais nada. Você perdeu um dia por ter esquecido disso')
            console.log('Digite 0 para voltar.')
        }
        console.log()
        var escolha2 = +prompt('Qual item você venderá? ')
        console.log()
    if (escolha2 == 1) {
        opcoesVenda.splice(0, 1, 'Você já vendeu os livros')
        
        status.dinheiro = status.dinheiro + 150
        console.log()
        restante = status.valor - status.dinheiro
        console.log(`Você vendeu um item e agora tem ${status.dinheiro} na sua conta corrente. Faltam ${restante} para bater sua meta`)
        console.log()
} else if (escolha2 == 2) {
        opcoesVenda.splice(1, 1, 'Você já vendeu a caixa')
        status.dinheiro = status.dinheiro + 80
        restante = status.valor - status.dinheiro 
        console.log(`Você vendeu um item e agora tem ${status.dinheiro} na sua conta corrente. Faltam ${restante} para bater sua meta`)
        console.log()
} else if (escolha2 == 3) {
        opcoesVenda.splice(2, 1, 'Você já vendeu os games')
        status.dinheiro = status.dinheiro + 500
        console.log()
        restante = status.valor - status.dinheiro
        console.log(`Você vendeu todos os seus jogos e agora tem ${status.dinheiro} na sua conta corrente. Faltam ${restante} para bater sua meta`) } 
} else if (escolha1 == 2) {
        var dinheiroEmprestado = Math.trunc(Math.random()* 2000)
        status.dinheiro = status.dinheiro + dinheiroEmprestado
        restante = status.valor - status.dinheiro
        opcoes.splice(1, 1, '[ ] Você já pediu dinheiro para seus pais e eles não tem mais como ajudar.')
        console.log(`Seus pais tinham ${dinheiroEmprestado} para emprestar e agora você tem ${status.dinheiro}. Faltam ${restante} para bater sua meta`)
        console.log()
} else if (escolha1 == 3) {
        var agua = Math.floor(Math.random() * 10);

        if ((agua == 1) || (agua == 4) || (agua == 9)) {
        status.dinheiro = status.dinheiro - 25
        restante = status.valor - status.dinheiro
        console.log(`Você foi vender, porém não conseguiu nenhuma venda e teve um prejuizo de 25,00, agora tem na sua conta ${status.dinheiro}  e faltam ${restante} para bater sua meta`)
} else {
            status.dinheiro = status.dinheiro + 100
            restante = status.valor - status.dinheiro
            console.log(`Você foi vender água na rua e conseguiu vender TUDO! Agora tem ${status.dinheiro} e faltam ${status.dinheiro} para bater sua meta`)
        } 
} else if (escolha1 == 4) {
        var garcon = Math.floor(Math.random() * 10);
        if ((garcon == 1) || (garcon == 4) || (garcon == 9)) {
            console.log()
            console.log('Você foi no restaurante, porém seu outro garçon chegou em primeiro lugar e você não conseguiu nada.')
            console.log()
        } else {
        status.dinheiro = status.dinheiro + 250
        restante = status.valor - status.dinheiro
        console.log(`Você trabalhou como garçon no restaurante da esquina e ganhou R$ 250,00, agora tem ${status.dinheiro} na sua conta corrente. Faltam ${restante} para bater sua meta`)
        console.log()
    }
}}

    //// RESULTADO FINAL \\\\

    console.log(`${nome}, você conseguiu um valor total de ${status.dinheiro}`)
    if (status.dinheiro == status.valor) {
        console.log('Você conseguiu o dinheiro e já pode fazer a viagem!')
    } else if (status.dinheiro > status.valor) {console.log('Você conseguiu mais do que precisava e poderá gastar quando chegar lá')}
    else if (status.dinheiro < status.valor) {
        console.log('Infelizmente o prazo passou e você não conseguiu a vaga, podia ter feito melhor, não?!')
    }

/// DESISTENCIA DA VAGA

} else if (escolha == 2) {

    console.log('-----')
    console.log()
    console.log(`${nome}, você está desistindo de um grande sonho, tem certeza disso? Poxa, que pena. Então é isso, um dia surge outra oportunidade.`)
    console.log()}

