function main(){
    _amod.log('Loaded Script Main');

    var element = document.getElementById('mapContainer');

    var key = 'AIzaSyAMlWlPy-A1OsoZmnCIT7BvU1HvtM052D4';
    var location = 'Rizal+Park,Manila+PH';
    var size = _amod.getPageSize();

    var iframeSrc =
    `
    <iframe
        width="${(size.w * 0.9).toString()}"
        height="${(size.h * 0.9).toString()}"
        style="border:0"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=${key}&q=${location}">
    </iframe>
    `;

    element.innerHTML = iframeSrc;
}

if ( typeof _amod == 'object' ) {
    main();
}