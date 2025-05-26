const findKeyByValue = function (List , Show){
 for(let items in List) {
  if(Show === List[items]){
    return items
  }
}
return undefined
}

module.exports = findKeyByValue;