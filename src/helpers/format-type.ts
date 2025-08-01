const formatType = (type:string):string => {
    let color:string;

    switch(type){
        case 'Feu':
            color = 'red lighten-1';
            break;
        case 'Eau':
            color = 'red lighten-1';
            break;
        case 'Feu':
            color = 'blue lighten-1';
            break;
        case 'Plante':
            color = 'green lighten-1';
            break;
        case 'Insecte':
            color = 'yellow lighten-1';
            break;
        case 'Normal':
            color = 'grey lighten-1';
            break;
        case 'Vol':
            color = 'blue lighten-3';
            break;
        case 'Poison':
            color = 'deep-purple accent-1';
            break;
        case 'Fée':
            color = 'pink lighten-4';
            break;
        case 'Psy':
            color = 'teal accent-1';
            break;
        case 'Electrik':
            color = 'blue darken-4';
            break;
        case 'Combat':
            color = 'amber darken-4';
            break;
        default:
            color = 'grey';
    }

    return `chip ${color}`
}

export default formatType;