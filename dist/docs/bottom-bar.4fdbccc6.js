webpackJsonp([13],{382:function(t,e,o){o(530);var m=o(1)(o(415),o(499),"data-v-e0487734",null);t.exports=m.exports},415:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{playground:{theme:"brown"}}},methods:{setTheme:function(t){this.playground.theme=t}}},t.exports=exports.default}).call(e,o(0)(t))},461:function(t,e,o){e=t.exports=o(4)(),e.push([t.i,".md-bottom-bar[data-v-e0487734]{position:absolute;right:0;bottom:0;left:0}.phone-viewport[data-v-e0487734]{width:320px;height:150px;margin-right:16px;display:inline-block;position:relative;overflow:hidden;background-color:#ededed}",""])},499:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("page-content",{attrs:{"page-title":"Components - Bottom Bar"}},[o("docs-component",[o("div",{slot:"description"},[o("p",[t._v("Bottom navigation bars make it easy to explore and switch between top-level views in a single tap.")]),t._v(" "),o("p",[t._v("The following classes can be applied to change the color palette:")]),t._v(" "),o("ul",{staticClass:"md-body-2"},[o("li",[o("code",[t._v("md-accent")])]),t._v(" "),o("li",[o("code",[t._v("md-warn")])]),t._v(" "),o("li",[o("code",[t._v("md-transparent")])])])]),t._v(" "),o("div",{slot:"api"},[o("api-table",{attrs:{name:"md-bottom-bar"}},[o("md-table",{slot:"properties"},[o("md-table-header",[o("md-table-row",[o("md-table-head",[t._v("Name")]),t._v(" "),o("md-table-head",[t._v("Type")]),t._v(" "),o("md-table-head",[t._v("Description")])],1)],1),t._v(" "),o("md-table-body",[o("md-table-row",[o("md-table-cell",[t._v("md-shift")]),t._v(" "),o("md-table-cell",[o("code",[t._v("Boolean")])]),t._v(" "),o("md-table-cell",[t._v("Enable the shifting variant. Default "),o("code",[t._v("false")])])],1)],1)],1),t._v(" "),o("md-table",{slot:"events"},[o("md-table-header",[o("md-table-row",[o("md-table-head",[t._v("Name")]),t._v(" "),o("md-table-head",[t._v("Value")]),t._v(" "),o("md-table-head",[t._v("Description")])],1)],1),t._v(" "),o("md-table-body",[o("md-table-row",[o("md-table-cell",[t._v("change")]),t._v(" "),o("md-table-cell",[t._v("Receive the item index")]),t._v(" "),o("md-table-cell",[t._v("Triggered when an item is activated.")])],1)],1)],1)],1),t._v(" "),o("api-table",{attrs:{name:"md-bottom-bar-item"}},[o("md-table",{slot:"properties"},[o("md-table-header",[o("md-table-row",[o("md-table-head",[t._v("Name")]),t._v(" "),o("md-table-head",[t._v("Type")]),t._v(" "),o("md-table-head",[t._v("Description")])],1)],1),t._v(" "),o("md-table-body",[o("md-table-row",[o("md-table-cell",[t._v("md-icon")]),t._v(" "),o("md-table-cell",[o("code",[t._v("String")])]),t._v(" "),o("md-table-cell",[t._v("Icon name on the "),o("a",{attrs:{href:"https://material.io/icons/",target:"_blank",rel:"noopener"}},[t._v("Material Icons")]),t._v(" docs.")])],1),t._v(" "),o("md-table-row",[o("md-table-cell",[t._v("md-icon-src")]),t._v(" "),o("md-table-cell",[o("code",[t._v("String")])]),t._v(" "),o("md-table-cell",[t._v("Set icon src url. See "),o("a",{attrs:{href:"#/components/Icon"}},[t._v("Icon ")]),t._v(" component for more details.")])],1),t._v(" "),o("md-table-row",[o("md-table-cell",[t._v("md-iconset")]),t._v(" "),o("md-table-cell",[o("code",[t._v("String")])]),t._v(" "),o("md-table-cell",[t._v("Set the 3rd party iconset to use. See "),o("a",{attrs:{href:"#/components/Icon"}},[t._v("Icon ")]),t._v(" component for more details.")])],1),t._v(" "),o("md-table-row",[o("md-table-cell",[t._v("md-active")]),t._v(" "),o("md-table-cell",[o("code",[t._v("Boolean")])]),t._v(" "),o("md-table-cell",[t._v("Set initial selection. Default "),o("code",[t._v("false")])])],1),t._v(" "),o("md-table-row",[o("md-table-cell",[t._v("href")]),t._v(" "),o("md-table-cell",[o("code",[t._v("String")])]),t._v(" "),o("md-table-cell",[t._v("Create a anchor on the item - In this case the generated tag will be "),o("code",[t._v("<a>")]),t._v(".")])],1),t._v(" "),o("md-table-row",[o("md-table-cell",[t._v("disabled")]),t._v(" "),o("md-table-cell",[o("code",[t._v("Boolean")])]),t._v(" "),o("md-table-cell",[t._v("Disable the item and prevent its actions. Default "),o("code",[t._v("false")])])],1)],1)],1)],1)],1),t._v(" "),o("div",{slot:"example"},[o("example-box",{attrs:{"card-title":"Default"}},[o("div",{slot:"demo"},[o("div",{staticClass:"phone-viewport"},[o("md-bottom-bar",[o("md-bottom-bar-item",{attrs:{"md-icon":"history"}},[t._v("Recents")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-icon":"favorite","md-active":""}},[t._v("Favorites")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-icon":"near_me"}},[t._v("Nearby")])],1)],1)]),t._v(" "),o("div",{slot:"code"},[o("code-block",{attrs:{lang:"xml"}},[t._v('\n            <md-bottom-bar>\n              <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>\n              <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>\n              <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>\n            </md-bottom-bar>\n          ')])],1)]),t._v(" "),o("example-box",{attrs:{"card-title":"Using SVG"}},[o("div",{slot:"demo"},[o("div",{staticClass:"phone-viewport"},[o("md-bottom-bar",[o("md-bottom-bar-item",{attrs:{"md-icon-src":"assets/icon-home.svg"}},[t._v("Recents")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-icon-src":"assets/icon-home.svg","md-active":""}},[t._v("Favorites")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-icon-src":"assets/icon-home.svg"}},[t._v("Nearby")])],1)],1)]),t._v(" "),o("div",{slot:"code"},[o("code-block",{attrs:{lang:"xml"}},[t._v('\n            <md-bottom-bar>\n              <md-bottom-bar-item md-icon-src="assets/icon-home.svg">Recents</md-bottom-bar-item>\n              <md-bottom-bar-item md-icon-src="assets/icon-home.svg" md-active>Favorites</md-bottom-bar-item>\n              <md-bottom-bar-item md-icon-src="assets/icon-home.svg">Nearby</md-bottom-bar-item>\n            </md-bottom-bar>\n          ')])],1)]),t._v(" "),o("example-box",{attrs:{"card-title":"Using Iconsets"}},[o("div",{slot:"demo"},[o("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css"}}),t._v(" "),o("div",[t._v("This example uses "),o("a",{attrs:{href:"http://simplelineicons.com/",target:"simple_line"}},[t._v("Simple Line Icons")])]),t._v(" "),o("div",{staticClass:"phone-viewport"},[o("md-bottom-bar",[o("md-bottom-bar-item",{attrs:{"md-iconset":"icon-speedometer"}},[t._v("Recents")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-iconset":"icon-heart","md-active":""}},[t._v("Favorites")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-iconset":"icon-cursor"}},[t._v("Nearby")])],1)],1)]),t._v(" "),o("div",{slot:"code"},[o("code-block",{attrs:{lang:"xml"}},[t._v('\n            <md-bottom-bar>\n              <md-bottom-bar-item md-iconset="icon-speedometer">Recents</md-bottom-bar-item>\n              <md-bottom-bar-item md-iconset="icon-heart" md-active>Favorites</md-bottom-bar-item>\n              <md-bottom-bar-item md-iconset="icon-cursor">Nearby</md-bottom-bar-item>\n            </md-bottom-bar>\n          ')])],1)]),t._v(" "),o("example-box",{attrs:{"card-title":"Shifting"}},[o("div",{slot:"demo"},[o("div",{staticClass:"phone-viewport"},[o("md-bottom-bar",{attrs:{"md-shift":""}},[o("md-bottom-bar-item",{attrs:{"md-icon":"ondemand_video"}},[t._v("Movies")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-icon":"music_note"}},[t._v("Music")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-icon":"books","md-active":""}},[t._v("Books")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-icon":"photo"}},[t._v("Pictures")])],1)],1)]),t._v(" "),o("div",{slot:"code"},[o("code-block",{attrs:{lang:"xml"}},[t._v('\n            <md-bottom-bar md-shift>\n              <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>\n              <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>\n              <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>\n              <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>\n            </md-bottom-bar>\n          ')])],1)]),t._v(" "),o("example-box",{attrs:{"card-title":"Themes"}},[o("div",{slot:"demo"},[o("div",{staticClass:"phone-viewport"},[o("md-bottom-bar",{attrs:{"md-theme":"teal"}},[o("md-bottom-bar-item",{attrs:{"md-icon":"history"}},[t._v("Recents")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-icon":"favorite","md-active":""}},[t._v("Favorites")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-icon":"near_me"}},[t._v("Nearby")])],1)],1),t._v(" "),o("div",{staticClass:"phone-viewport"},[o("md-bottom-bar",{attrs:{"md-shift":"","md-theme":"indigo"}},[o("md-bottom-bar-item",{attrs:{"md-icon":"ondemand_video"}},[t._v("Movies")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-icon":"music_note"}},[t._v("Music")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-icon":"books","md-active":""}},[t._v("Books")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-icon":"photo"}},[t._v("Pictures")])],1)],1)]),t._v(" "),o("div",{slot:"code"},[o("code-block",{attrs:{lang:"xml"}},[t._v('\n            <div class="phone-viewport">\n              <md-bottom-bar md-theme="teal">\n                <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>\n                <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>\n                <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>\n              </md-bottom-bar>\n            </div>\n\n            <div class="phone-viewport">\n              <md-bottom-bar md-shift md-theme="indigo">\n                <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>\n                <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>\n                <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>\n                <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>\n              </md-bottom-bar>\n            </div>\n          ')])],1)]),t._v(" "),o("example-box",{attrs:{"card-title":"Dynamic Theme Example"}},[o("div",{slot:"demo"},[o("div",{staticClass:"phone-viewport"},[o("md-bottom-bar",{attrs:{"md-shift":"","md-theme":t.playground.theme}},[o("md-bottom-bar-item",{attrs:{"md-icon":"ondemand_video"},nativeOn:{click:function(e){t.setTheme("blue")}}},[t._v("Movies")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-icon":"music_note"},nativeOn:{click:function(e){t.setTheme("teal")}}},[t._v("Music")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-icon":"books","md-active":""},nativeOn:{click:function(e){t.setTheme("brown")}}},[t._v("Books")]),t._v(" "),o("md-bottom-bar-item",{attrs:{"md-icon":"photo"},nativeOn:{click:function(e){t.setTheme("indigo")}}},[t._v("Pictures")])],1)],1)]),t._v(" "),o("div",{slot:"code"},[o("code-block",{attrs:{lang:"xml"}},[t._v('\n            <md-theme :md-name="playground.theme">\n              <md-bottom-bar md-shift>\n                <md-bottom-bar-item @click.native="setTheme(\'blue\')" md-icon="ondemand_video">Movies</md-bottom-bar-item>\n                <md-bottom-bar-item @click.native="setTheme(\'teal\')" md-icon="music_note">Music</md-bottom-bar-item>\n                <md-bottom-bar-item @click.native="setTheme(\'brown\')" md-icon="books" md-active>Books</md-bottom-bar-item>\n                <md-bottom-bar-item @click.native="setTheme(\'indigo\')" md-icon="photo">Pictures</md-bottom-bar-item>\n              </md-bottom-bar>\n            </div>\n          ')]),t._v(" "),o("code-block",{attrs:{lang:"javascript"}},[t._v("\n            export default {\n              data() {\n                return {\n                  playground: {\n                    theme: 'brown'\n                  }\n                };\n              },\n              methods: {\n                setTheme(theme) {\n                  this.playground.theme = theme;\n                }\n              }\n            };\n          ")])],1)])],1)])],1)},staticRenderFns:[]}},530:function(t,e,o){var m=o(461);"string"==typeof m&&(m=[[t.i,m,""]]),m.locals&&(t.exports=m.locals);o(5)("2a0291d2",m,!0)}});