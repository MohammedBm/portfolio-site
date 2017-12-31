webpackJsonp([0x7e2e2b00503eb400],{"./node_modules/react-forecast/dist/react-forecast.js":function(e,t,a){"use strict";var r=a("./node_modules/react/react.js");e.exports=r.createClass({displayName:"Forecast",getDefaultProps:function(){return{height:245,width:"100%"}},render:function(){var e="//forecast.io/embed/#lat="+this.props.latitude+"&lon="+this.props.longitude+"&name="+this.props.name||"&color="+this.props.color||"&font="+this.props.font||"&units="+this.props.unit||"";return r.createElement("iframe",{type:"text/html",height:this.props.height,width:this.props.width,frameBorder:"0",src:e})}})},"./src/components/ForecastPlug.js":function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a("./node_modules/react/react.js"),i=r(l),c=a("./node_modules/react-forecast/dist/react-forecast.js"),u=r(c),d=function(e){function t(){return s(this,t),o(this,e.apply(this,arguments))}return n(t,e),t.prototype.render=function(){return i.default.createElement("div",null,i.default.createElement(u.default,{units:"ca",latitude:51.5074,longitude:.1278,name:"London"}))},t}(i.default.Component);t.default=d,e.exports=t.default},"./src/components/WeatherTile.js":function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a("./node_modules/react/react.js"),i=r(l),c=a("./node_modules/prop-types/index.js"),u=r(c),d=function(e){function t(){return s(this,t),o(this,e.apply(this,arguments))}return n(t,e),t.prototype.render=function(){return i.default.createElement("a",{className:"w-20-ns w-50-m w-100 dib pa3-ns pa2 ph2 no-underline",download:"AwesomeImage.svg",href:this.props.weather},i.default.createElement("img",{className:"pointer pv2-ns pv1",src:this.props.weather}),i.default.createElement("p",{className:"code  tc"},this.props.name))},t}(i.default.Component);d.propTypes={name:u.default.string.isRequired,weather:u.default.string.isRequired},t.default=d,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/Jimmy/Documents/jciclitira.com/portfolio-site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/Jimmy/Documents/jciclitira.com/portfolio-site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Jimmy/Documents/jciclitira.com/portfolio-site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/Jimmy/Documents/jciclitira.com/portfolio-site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/Jimmy/Documents/jciclitira.com/portfolio-site/node_modules/babel-preset-stage-0/lib/index.js","/Users/Jimmy/Documents/jciclitira.com/portfolio-site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/Weather.js':function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=a("./node_modules/react/react.js"),o=r(s),n=a("./src/components/ForecastPlug.js"),l=r(n),i=a("./src/components/WeatherTile.js"),c=r(i),u=function(){return o.default.createElement("div",{className:"pt5"},o.default.createElement("div",{className:"vh-100"},o.default.createElement("div",{className:"mw7 db center "},o.default.createElement("div",null,o.default.createElement("h2",{className:"dib ml2 code"},"Material Weather icons"),o.default.createElement("a",{className:"fr mt3 pt1 mr3",download:!0,href:"http://jciclitira.com/sketch-files/weather-icons.sketch"},o.default.createElement("img",{className:"h1 dib",src:"images/tools/sketch.svg",alt:"Sketch icon"}),o.default.createElement("h4",{className:"dib v-top ma0 pl3 code"},"Sketch download"))),o.default.createElement(l.default,null),o.default.createElement(c.default,{weather:"images/weather/weather-icon-1.svg"}),o.default.createElement(c.default,{weather:"images/weather/weather-icon-2.svg"}),o.default.createElement(c.default,{weather:"images/weather/weather-icon-3.svg"}),o.default.createElement(c.default,{weather:"images/weather/weather-icon-4.svg"}),o.default.createElement(c.default,{weather:"images/weather/weather-icon-5.svg"}),o.default.createElement(c.default,{weather:"images/weather/weather-icon-6.svg"}),o.default.createElement(c.default,{weather:"images/weather/weather-icon-7.svg"}),o.default.createElement(c.default,{weather:"images/weather/weather-icon-8.svg"}),o.default.createElement(c.default,{weather:"images/weather/weather-icon-9.svg"}),o.default.createElement(c.default,{weather:"images/weather/weather-icon-10.svg"}),o.default.createElement(c.default,{weather:"images/weather/weather-icon-11.svg"}),o.default.createElement(c.default,{weather:"images/weather/weather-icon-12.svg"}),o.default.createElement(c.default,{weather:"images/weather/weather-icon-13.svg"}),o.default.createElement(c.default,{weather:"images/weather/weather-icon-14.svg"}),o.default.createElement(c.default,{weather:"images/weather/weather-icon-15.svg"}),o.default.createElement(c.default,{weather:"images/weather/weather-icon-16.svg"}))))};t.default=u,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-weather-js-63cd47ef64dc84f65587.js.map