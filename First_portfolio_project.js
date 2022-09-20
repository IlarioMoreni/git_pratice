const mySentences= ['it`s sunny.', 'it rains.', 'it snows.'];
let selectedSentence = ' ';
let prefearedWeather;
let mySelectedSentences2;
let i;


const ranSentences= (mySentences) => {
    i = Math.floor(Math.random()*mySentences.length);
    return selectedSentence = mySentences[i];
} 


const pWFunction = (mySentences,selectedSentence) => {
    while (selectedSentence===mySentences[i]){
        i = Math.floor(Math.random()*mySentences.length);
    }
    return prefearedWeather= mySentences[i];
}



ranSentences(mySentences);
pWFunction(mySentences, selectedSentence);

const lastSentence= (selectedSentence)=>{
    if (selectedSentence==mySentences[0]){
        return mySelectedSentences2= 'going for a walk'
    } else if (selectedSentence==mySentences[1] || selectedSentence==mySentences[2]){
        return mySelectedSentences2= 'stay at home'
    }
}

lastSentence(selectedSentence);
console.log(selectedSentence);
console.log(`i don't like this weather i prefear when ${prefearedWeather}`);
console.log(`For now i decide to ${mySelectedSentences2}`);