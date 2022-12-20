var url = "https://chelyshkov.ru/skyeng-tutor-api";

function fetchRandomWord() {
    var response = $http.get(url + "/words/random");
    if (response.isOk) {
        return response.data;
    } else {
        return null;
    }
}

function postLearned(meaningId) {
    var response = $http.post(
        url + "/words:learn",
        {
            dataType: 'json',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                meaningId: meaningId,
            },
        }
    );
    
    return response.isOk;
}