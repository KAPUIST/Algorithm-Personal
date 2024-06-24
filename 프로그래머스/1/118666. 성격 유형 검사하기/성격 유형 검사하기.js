function solution(survey, choices) {

    let scores = {
        'R': 0, 'T': 0,
        'C': 0, 'F': 0,
        'J': 0, 'M': 0,
        'A': 0, 'N': 0
    };
    let scoreMap = {
        1: 3, 
        2: 2, 
        3: 1, 
        4: 0,
        5: 1,  
        6: 2,  
        7: 3   
    };

    for (let i = 0; i < survey.length; i++) {
        let [disagree, agree] = survey[i].split(''); 
        let choice = choices[i];

        if (choice <= 3) {  
            scores[disagree] += scoreMap[choice];
        } else if (choice >= 5) {  
            scores[agree] += scoreMap[choice];
        }
    }

    let result = '';
    result += (scores['R'] >= scores['T']) ? 'R' : 'T';
    result += (scores['C'] >= scores['F']) ? 'C' : 'F';
    result += (scores['J'] >= scores['M']) ? 'J' : 'M';
    result += (scores['A'] >= scores['N']) ? 'A' : 'N';

    return result;
}
