window.addEventListener('DOMContentLoaded', () => {
    getVisitorCount();
})

const functionApi = '';

const getVisitorCount = () => {
    let count = 30;
    fetch(functionApi).then(respose => {
        return response.json
    }).then(respose =>{
        console.log("Website called function API")
        count = respose.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}