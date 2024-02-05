function camelize(str) { 
  let strSplited = str.split('-', )
    
  
  if(strSplited[0] !== '' ) {
     
    let maped = strSplited.map( item => (item[0].toUpperCase() + item.slice(1) ) )
  
  
    let joined = maped.join('')
  
    return joined[0].toLowerCase() + joined.slice(1)
      
  } else {
      strSplited.splice(0, 1)

      maped = strSplited.map( item => (item[0].toUpperCase() + item.slice(1) ) )

      joined = maped.join('')
    
      return joined
  }
}