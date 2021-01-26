let initAddress = function(){
    d3.select(".button-next-address-from-continue").on("click", function (){
        const addressInput = document.querySelector('#address1');

        if(addressInput.value == null || addressInput.value === ''){
            alert('Merci de saisir votre addresse ou vous localiser')
        }else{
            mySlidr.slide("hour-page");
            initHour();
        }
    });

    d3.select(".button-next-address-from-nevermind").on("click", function (){
        mySlidr.slide("hour-page");
        initHour();
    });
};



new AddressAutocomplete('#address1', function (result) {
    geoAttribute(result.coordinates.lat, result.coordinates.lng);
});

const geoFindMe = async () => {
    const addressInput = document.querySelector('#address1');
    const iconLocalize = document.querySelector('#address-localize');
    const iconLocalizeLoading = document.querySelector('#address-localize-loading');
    const localizeButton = document.querySelector('#localization-button');


    async function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        geoAttribute(latitude, longitude);

        const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&result_type=street_address&key='+GOOGLE_API_KEY);
        const address = await response.json();

        addressInput.value = address['results'][0]['formatted_address'];
        iconLocalize.classList.remove("hidden");
        iconLocalizeLoading.classList.add("hidden");
        localizeButton.disabled = false;
    }

    function error() {
        iconLocalize.classList.remove("hidden");
        iconLocalizeLoading.classList.add("hidden");
        localizeButton.disabled = false;
        alert('Impossible de vous localiser');
    }

    if(!navigator.geolocation) {
        alert('La géolocalisation n\'est pas supportée par votre navigateur');
    } else {
        localizeButton.disabled = true;
        iconLocalize.classList.add("hidden");
        iconLocalizeLoading.classList.remove("hidden");
        navigator.geolocation.getCurrentPosition(success, error);
    }

};

document.querySelector('#localization-button').addEventListener('click', geoFindMe);

const
    range = document.getElementById('localize-range'),
    rangeValue = document.getElementById('rangeValue'),
    setValue = ()=>{
        const
            newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
            newPosition = 10 - (newValue * 0.2) + (range.value - 10)*1.65 ;

        if(range.value === range.min){
            rangeValue.innerHTML = `<span class="font-slider"><${range.value} km</span>`;
        }else if(range.value === range.max){
            rangeValue.innerHTML = `<span class="font-slider">>${range.value} km</span>`;
        }else{
            rangeValue.innerHTML = `<span class="font-slider">${range.value} km</span>`;
        }

        rangeValue.style.left = `calc(${newValue}% + (${newPosition}vw))`;
    };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);
