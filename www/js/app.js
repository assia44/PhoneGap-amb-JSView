window.addEventListener('load', function() {
    /*	
			Declare views
	
			Aquí podem afegir diferents pàgines html , indicar on estan i el nom del controller ( mirar controller.js )
	
	*/
    $JSView.declareView({ 
        viewA: {
            url: '/inici',
            template: 'views/viewA.html',
            controller: 'inici'
        },
        viewB: {
            url: '/sol',
            template: 'views/viewB.html',
            controller: 'sol'
        },
        viewC: {
            url: '/mercuri',
            template: 'views/viewC.html',
            controller: 'mercuri'
        }
    });
     
    /*Declare modal*/
    $JSView.declareModal({
        modalA: {
            url: '/modalA',
            template: 'views/modalA.html',
            controller: 'modalA'
        }
    });
     
    /*Designar la pàgina inicial*/
    $JSView
        .initView('inici');
 
}, false);
