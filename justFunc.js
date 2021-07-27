function whoWin(map) {

    for (let i = 0; i < map.size - 1; i++) {
        if (map.get(i) !== map.get(i + 1)){
        
            for (let i = 0; i < map.size - 1; i++) {
                let winner = 0;
                let luser = 0;

                if ((map.get(i) === 1 && map.get(i + 1) === 3) || (map.get(i) === 3 && map.get(i + 1) === 1)) {
                    winner = i;
                    luser = i + 1;
                }
                
                else {
                    winner = i + 1;
                    luser = i;	
                }

                clients[winner].write('You Won!\n');
                clients[luser].write('You Lost!\n');
            }
            return 1;
        }		
    }

    clients.forEach(client => {
        client.write('Draw\n');
    })
    return 1;
}