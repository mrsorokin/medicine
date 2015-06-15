ymaps.ready(function () {

    geoMap = new ymaps.Map('map', {
        center: [66.47, 93.46],
        type: "yandex#map",
        zoom: 3
    });
    geoMap.controls.add('zoomControl');

    var lastCollection = 0,
        lastActiveRegion = 0;

    var lng = 'ru',
        contr = 'RU',
        level = '0';
    if (lastCollection) {
        geoMap.geoObjects.remove(lastCollection);
    }
    ymaps.regions.load(contr, {
        lang: lng,
        quality: level
    }).then(function (result) {
        lastCollection = result.geoObjects;

        lastCollection.each(function (reg) {

            switch (reg.properties.get('osmId')) {

                case '81997':{  reg.options.set('fillColor', 'ff2600');  break; }
case '115134':{  reg.options.set('fillColor', 'ff2600');  break; }
case '115136':{  reg.options.set('fillColor', 'ff2600');  break; }
case '102269':{  reg.options.set('fillColor', 'ff2600');  break; }
case '151233':{  reg.options.set('fillColor', 'ff8600');  break; }
case '72193':{  reg.options.set('fillColor', 'ff8600');  break; }
case '109877':{  reg.options.set('fillColor', 'ff2600');  break; }
case '110032':{  reg.options.set('fillColor', 'ff8600');  break; }
case '155262':{  reg.options.set('fillColor', 'ff2600');  break; }
case '253252':{  reg.options.set('fillColor', 'ff8600');  break; }
case '77665':{  reg.options.set('fillColor', 'ff2600');  break; }
case '176095':{  reg.options.set('fillColor', 'ff8600');  break; }
case '81993':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '81996':{  reg.options.set('fillColor', 'ff8600');  break; }
case '140294':{  reg.options.set('fillColor', 'ff8600');  break; }
case '145194':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '108081':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '112819':{  reg.options.set('fillColor', 'ff8600');  break; }
case '72194':{  reg.options.set('fillColor', 'ffd600');  break; }
case '72180':{  reg.options.set('fillColor', 'ff8600');  break; }
case '151234':{  reg.options.set('fillColor', 'ffd600');  break; }
case '115135':{  reg.options.set('fillColor', 'ffd600');  break; }
case '85617':{  reg.options.set('fillColor', 'ff8600');  break; }
case '79379':{  reg.options.set('fillColor', 'ff8600');  break; }
case '72192':{  reg.options.set('fillColor', 'ffd600');  break; }
case '77669':{  reg.options.set('fillColor', 'ffd600');  break; }
case '2099216':{  reg.options.set('fillColor', 'ff8600');  break; }
case '140291':{  reg.options.set('fillColor', 'ffd600');  break; }
case '140295':{  reg.options.set('fillColor', 'ff8600');  break; }
case '140290':{  reg.options.set('fillColor', 'ff8600');  break; }
case '72182':{  reg.options.set('fillColor', 'ffd600');  break; }
case '79374':{  reg.options.set('fillColor', 'ffd600');  break; }
case '81995':{  reg.options.set('fillColor', 'ff8600');  break; }
case '77687':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '145454':{  reg.options.set('fillColor', 'ff8600');  break; }
case '109876':{  reg.options.set('fillColor', 'ffd600');  break; }
case '190090':{  reg.options.set('fillColor', 'ffd600');  break; }
case '109879':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '72195':{  reg.options.set('fillColor', 'ffd600');  break; }
case '151225':{  reg.options.set('fillColor', 'ff8600');  break; }
case '115114':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '72224':{  reg.options.set('fillColor', 'ff8600');  break; }
case '72169':{  reg.options.set('fillColor', 'ffd600');  break; }
case '81994':{  reg.options.set('fillColor', 'ffd600');  break; }
case '145729':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '151223':{  reg.options.set('fillColor', 'ffd600');  break; }
case '85963':{  reg.options.set('fillColor', 'ff8600');  break; }
case '253256':{  reg.options.set('fillColor', 'ffd600');  break; }
case '2095259':{  reg.options.set('fillColor', 'ff8600');  break; }
case '108082':{  reg.options.set('fillColor', 'ffd600');  break; }
case '85606':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '80513':{  reg.options.set('fillColor', 'ffd600');  break; }
case '103906':{  reg.options.set('fillColor', 'ff8600');  break; }
case '89331':{  reg.options.set('fillColor', 'ffd600');  break; }
case '77677':{  reg.options.set('fillColor', 'ffd600');  break; }
case '394235':{  reg.options.set('fillColor', 'ffd600');  break; }
case '51490':{  reg.options.set('fillColor', 'ffd600');  break; }
case '144763':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '190911':{  reg.options.set('fillColor', 'ffd600');  break; }
case '109878':{  reg.options.set('fillColor', '09ff00');  break; }
case '72181':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '144764':{  reg.options.set('fillColor', 'ff8600');  break; }
case '147166':{  reg.options.set('fillColor', 'ffd600');  break; }
case '108083':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '140292':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '337422':{  reg.options.set('fillColor', 'ff8600');  break; }
case '72223':{  reg.options.set('fillColor', 'ffd600');  break; }
case '83184':{  reg.options.set('fillColor', '09ff00');  break; }
case '115106':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '71950':{  reg.options.set('fillColor', 'ffd600');  break; }
case '140337':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '145730':{  reg.options.set('fillColor', '09ff00');  break; }
case '72196':{  reg.options.set('fillColor', 'ffd600');  break; }
case '115100':{  reg.options.set('fillColor', 'ff2600');  break; }
case '393980':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '145195':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '151228':{  reg.options.set('fillColor', '09ff00');  break; }
case '147167':{  reg.options.set('fillColor', 'd9ff00');  break; }
case '151231':{  reg.options.set('fillColor', 'ff8600');  break; }
case '140296':{  reg.options.set('fillColor', 'ffd600');  break; }
case '191706':{  reg.options.set('fillColor', 'ffd600');  break; }
case '274048':{  reg.options.set('fillColor', 'd9ff00');  break; }



                /* poiuytre*/

            }
        });


        lastCollection.options.set({
            zIndex: 1,
            zIndexHover: 1,
            draggable: false
        });


        lastCollection.events.add('click', function (event) {
            //var region = event.get('target');
            //console.log(region.properties.get('name') + ' -> ' + region.properties.get('osmId'));

            var target = event.get('target');
            if (lastActiveRegion) {
                lastActiveRegion.options.set('preset', '')
            }
            lastActiveRegion = target;
            lastActiveRegion.options.set('preset', {
                strokeWidth: 3,
                fillColor: 'F99',
                strokeColor: '9f9'
            });
        });

        geoMap.geoObjects.add(lastCollection);


    }, function () {
        //alert('no response');
    });

});
