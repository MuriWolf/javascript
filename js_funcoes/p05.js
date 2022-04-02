// funcoes recursivas (chamam elas mesmas)

function chirp( n ) {
    if( n < 1 || isNaN( n ) ) return;
    return n <= 1 ? 'chirp' : chirp( n - 1 ) + '-chirp';
  }

  
  function fatorial(n) {
      return n <= 1 ? 1 : fatorial(n-1) * n
    }   
    
console.log(chirp(4))
console.log(fatorial(5))

