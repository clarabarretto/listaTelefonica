angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, uppercaseFilter, lowercaseFilter) {
    $scope.app = "Lista Telefônica"
    $scope.contatos = [
        { nome: uppercaseFilter("Clara"), telefone: "987645298", data: new Date(), operadora: { nome: 'oi', codigo: 14 }, cor: "#27187E" },
        { nome:  uppercaseFilter("Mané"), telefone: "976235298", data: new Date(), operadora: { nome: 'gvt', codigo: 14 }, cor: "#AEB8FE" },
        { nome:  uppercaseFilter("tonio"), telefone: "987643448", data: new Date(), operadora: { nome: 'vivo', codigo: 14 }, cor: "#FF8600" },
        { nome:  uppercaseFilter("Arruda"), telefone: "998773837", data: new Date(), operadora: { nome: 'oi', codigo: 14 }, cor: "#27187E" },
    ]
    $scope.operadoras = [
        { nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 },
        { nome: "Vivo", codigo: 15, categoria: "Celular",  preco: 5 },
        { nome: "Tim", codigo: 41, categoria: "Celular",  preco: 3 },
        { nome: "Gvt", codigo: 25, categoria: "Fixo",  preco: 9 },
        { nome: "embratel", codigo: 21, categoria: "Fixo",  preco: 3 },
    ]
    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato))
        delete $scope.contato
        $scope.contatoForm.$setPristine()
    }
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato
        })
    }
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado
        })
    }
    $scope.ordenarPor = function (campo){
        $scope.criterioDeOrdenacao = campo
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao

    }
})