function updateMetadata(sample){
    var sampleURL = `/metadata/${sample}`
    Plotly.d3.json(sampleURL,function(error,response){
        if (error) return console.log(error);
        console.log(response);
        var data = response[0];
        console.log(data)
        var metaList = document.getElementById('sampleMetadata');
        metaList.innerHTML = '';
        var metaItems = [["Sample","SAMPLEID"],["Ethnicity","ETHNICITY"],["Gender","GENDER"],["Age","AGE"],
            ["Weekly Wash Frequency","WFREQ"],["Type (Innie/Outie)","BBTYPE"],["Country","COUNTRY012"],["Dog Owner","DOG"],["Cat Owner","CAT"]];
        console.log(metaList)
        for(i=0; i<metaItems.length; i++){
            var newLi = document.createElement('li');
            newLi.innerHTML = `${metaItems[i][0]}: ${data[metaItems[i][1]]}`;
            metaList.appendChild(newLi);
        };
    });
};