window.addEventListener('DOMContentLoaded', () => {
    getVisitCount();
})

const functionApiUrl = 'https://get-resume-counter.azurewebsites.net/api/GetResumeCounter?code=MlbebPC_vFNIR76VdqXEdavYvKOwE9EWHFwRECOvfdieAzFugv9wTQ==';
const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API")
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}