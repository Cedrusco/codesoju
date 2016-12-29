'use strict';
var yeoman = require('yeoman-generator'),
    html_wiring = require('html-wiring');

module.exports = yeoman.Base.extend({

    writing: function () {

        var isInstalled = false;

        /* Search and install DFXIO dependency */
        var package_file = JSON.parse(html_wiring.readFileAsString('package.json'));
        if (!package_file.dependencies['dfxio']) {

            this.log('Adding dfxio as a dependency...');

            package_file.dependencies['dfxio'] = '*';
            html_wiring.writeFileFromString(JSON.stringify(package_file, null, '\t'), 'package.json');
    
        } else {

            isInstalled = true;
            this.log('dfxio is already registered as a dependency...');
    
        }

         /* Initialize dfxio in the current app */
        if (!isInstalled) {

            /* Update app.js */
            this.log( 'Updating app.js...' );
            var app_file = html_wiring.readFileAsString('server/app.js');

            var re = /\'use strict\';\n/g;
            var subst = '\'use strict\'\nvar dfxio = require(\'dfxio\');\n';
            app_file = app_file.replace(re, subst);

            re = /app.listen/;
            subst =  'app.use(dfxio);\n' +
                'app.use(express.static(path.join(__dirname, \'../dfxio_components\')));\napp.listen';
            app_file = app_file.replace(re, subst);

            html_wiring.writeFileFromString(app_file, 'server/app.js');

            /* Update index.html */
            this.log( 'Updating index.html...' );
            var index_file = html_wiring.readFileAsString('server/views/index.html');
            re = /<script src="scripts.js">/;
            subst =  '<script src="/dfxio-static/client_scripts/inject.js"></script>\n\t\t<script src="scripts.js">';
            index_file = index_file.replace(re, subst);

            html_wiring.writeFileFromString(index_file, 'server/views/index.html');

            /* Add the dfxio components directory */
            this.directory('dfxio_components', this.destinationRoot() + '/dfxio_components');

            this.log( 'dfxio has been installed properly in your application' );
    
        }

    }
});
