
const listaVeiculo = []

listaVeiculo.push(
    {
    id: 1,
    nome: "Gol",
    categoria: "Volkswagen",
    preco: 15000,
    },
    {
    id:2,
    nome: "Fit",
    categoria:"Honda",
    preco: 45000
 });

listaVeiculo.push ({
    id: 3,
    nome: "Eclipse",
    categoria: "Mitsubishi",
    preco: 1500000,
    });

let proximoId = 1
function inserirVeiculo  ( nome, categoria,preco){
  const veiculo = {
    id: proximoId,
    nome: nome,
    categoria: categoria,
    preco:preco
  };

  listaVeiculo.push(veiculo);
  proximoId++


}
inserirVeiculo("Civic", "Honda", 70000)
inserirVeiculo("Corolla", "Toyota", 90000)
inserirVeiculo("Etios","Toyota",50000)

proximoId = 4

console.log(listaVeiculo);