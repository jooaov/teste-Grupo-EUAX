function FormataStringData (data) {
  const ano = data.split('-')[0]
  const mes = data.split('-')[1]
  const dia = data.split('-')[2]

  return ('0' + dia).slice(-2) + '/' + ('0' + mes).slice(-2) + '/' + ano
}

function FormataStringDataDoDB (data) {
  const dia = data.split('/')[0]
  const mes = data.split('/')[1]
  const ano = data.split('/')[2]

  return ano + '-' + ('0' + mes).slice(-2) + '-' + ('0' + dia).slice(-2)
}

// usar no formato DD/MM/AAAA
function CompararDatas (dataInicial, dataFinal) {
  if (dataInicial.length !== 10 || dataFinal.length !== 10) {
    return true
  }
  const d1 = new Date(dataInicial)
  const d2 = new Date(dataFinal)
  return d1 > d2
}
export { FormataStringData, FormataStringDataDoDB, CompararDatas }
