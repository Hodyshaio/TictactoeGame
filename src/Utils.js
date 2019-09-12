const Utils = {
    isGameOver:function(board){
               return board.every( (item) => item !== ' ')
    },
    // option 1 => Regex
    wonVersion2:function(board){ 
         const WINNERS =  [
             /([^\s])..\1..\1../,
             /.([^\s])..\1..\1./,
             /..([^\s])..\1..\1/,
             /([^\s])\1\1....../,
             /...([^\s])\1\1.../,
             /......([^\s])\1\1/,
             /([^\s])...\1...\1/,
             /..([^\s]).\1.\1../,   
          ];
         console.log(board); 
         const strBoard = board.join('');
         for(let i=0;i < WINNERS.length;i++)
         {
             if(WINNERS[i].test(strBoard)){
                      return strBoard.match(WINNERS[i])[1];
             }
         }       
         return false;
    },
    // option 2 => Array
    won:function(board){
    let list = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];  
    for( let i = 0; i < list.length ; i++){
            const [ a , b , c ] = list[i];
            if( board[a] != ' ' && board[a] === board[b] && 
            board[a] === board[c]){
                return board[a];
            }
    }
    return false;
    }            
}

export default Utils;