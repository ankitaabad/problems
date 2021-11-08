const my_pick = (remaining_match_sticks) =>{
    //write your code here
    
    return random_no(remaining_match_sticks);
}

const game = () =>{
    let remaining_match_sticks = 21;
    let computer_turn = false;
    while(remaining_match_sticks > 0){
        computer_turn = !computer_turn;
        console.log(`remaining sticks: ${remaining_match_sticks}`);
        console.log('***************');
        let pick = computer_turn ? random_no(remaining_match_sticks) : my_pick(remaining_match_sticks);
        let whose_turn = computer_turn ? 'Computer Pick: ': 'My Pick';
        console.log(`${whose_turn}: ${pick}`);
        if(![1,2,3,4].includes(pick) || pick > remaining_match_sticks){
            console.log('You Lose! You are not following the rules of the game');
            return;
        }
        remaining_match_sticks -= pick;
    }
    const result = computer_turn ? 'You win': 'You Lose'
    console.log(result);
}

const random_no = (bound) =>{
    const result = Math.floor(Math.random()*4)
    if(result > 0 && result<= bound){
        return result;
    }
    return random_no(bound);
}                              
game()
