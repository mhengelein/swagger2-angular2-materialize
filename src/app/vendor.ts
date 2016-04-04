// Polyfills
import 'core-js';
require('zone.js/dist/zone');

require('zone.js/dist/long-stack-trace-zone');

var $ = jQuery = require('jquery/dist/jquery');
window['jQuery'] = $;

// Angular 2
import 'angular2/platform/browser';
import 'angular2/platform/common_dom';
import 'angular2/core';
import 'angular2/common';
import 'angular2/http';
import 'angular2/router';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';

// Twitter Bootstrap
import 'bootstrap/dist/js/bootstrap';

//TypeScript
import 'typescript/lib/typescript';

//Lodash
import 'lodash/lodash';

// Materialize css
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';

// Highlight
import 'highlight.js/styles/default.css';
var hljs = require('highlight.js/lib/highlight');
require('highlight.js/lib/index');
window.hljs = hljs;

window.vkbeautify = require('vkbeautify');