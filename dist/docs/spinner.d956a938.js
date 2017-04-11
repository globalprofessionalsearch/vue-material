webpackJsonp([4],{402:function(e,n,t){t(522);var s=t(1)(t(429),t(488),"data-v-631d0197",null);e.exports=s.exports},429:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{progress:0,progressInterval:null,done:!1,transition:!0}},methods:{startProgress:function(){var e=this;this.progressInterval=window.setInterval((function(){e.progress+=3,e.progress>115&&(e.done=!0,window.clearInterval(e.progressInterval),window.setTimeout((function(){e.done=!1}),3e3))}),100)},restartProgress:function(){var e=this;this.progress=0,this.transition=!1,this.done=!1,window.clearInterval(this.progressInterval),window.setTimeout((function(){e.transition=!0,e.startProgress()}),600)}},mounted:function(){this.startProgress()}},e.exports=exports.default}).call(n,t(0)(e))},453:function(e,n,t){n=e.exports=t(4)(),n.push([e.i,".spinner-demo[data-v-631d0197]{min-height:55px}.complete-example[data-v-631d0197]{width:56px;height:56px;position:relative}.complete-example .md-fab[data-v-631d0197]{margin:0}.complete-example .md-spinner[data-v-631d0197]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}",""])},488:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("page-content",{attrs:{"page-title":"Components - Spinner"}},[t("docs-component",[t("div",{slot:"description"},[t("p",[e._v("Progress and activity indicators are visual indications of an app loading content.")]),e._v(" "),t("p",[e._v("The following classes can be applied to change the color palette:")]),e._v(" "),t("ul",{staticClass:"md-body-2"},[t("li",[t("code",[e._v("md-accent")])]),e._v(" "),t("li",[t("code",[e._v("md-warn")])])])]),e._v(" "),t("div",{slot:"api"},[t("api-table",{attrs:{name:"md-spinner"}},[t("md-table",{slot:"properties"},[t("md-table-header",[t("md-table-row",[t("md-table-head",[e._v("Name")]),e._v(" "),t("md-table-head",[e._v("Type")]),e._v(" "),t("md-table-head",[e._v("Description")])],1)],1),e._v(" "),t("md-table-body",[t("md-table-row",[t("md-table-cell",[e._v("md-size")]),e._v(" "),t("md-table-cell",[t("code",[e._v("Number")])]),e._v(" "),t("md-table-cell",[e._v("The spinner size. Default "),t("code",[e._v("50")])])],1),e._v(" "),t("md-table-row",[t("md-table-cell",[e._v("md-stroke")]),e._v(" "),t("md-table-cell",[t("code",[e._v("Number")])]),e._v(" "),t("md-table-cell",[e._v("The line width. Default "),t("code",[e._v("3.5")])])],1),e._v(" "),t("md-table-row",[t("md-table-cell",[e._v("md-indeterminate")]),e._v(" "),t("md-table-cell",[t("code",[e._v("Boolean")])]),e._v(" "),t("md-table-cell",[e._v("Enable the indeterminate state. Default "),t("code",[e._v("false")])])],1),e._v(" "),t("md-table-row",[t("md-table-cell",[e._v("md-progress")]),e._v(" "),t("md-table-cell",[t("code",[e._v("Number")])]),e._v(" "),t("md-table-cell",[e._v("Define the current progress of the spinner. Default "),t("code",[e._v("0")])])],1)],1)],1)],1)],1),e._v(" "),t("div",{slot:"example"},[t("example-box",{attrs:{"card-title":"Determinate"}},[t("div",{staticClass:"spinner-demo",slot:"demo"},[t("md-button",{staticClass:"md-primary md-raised",nativeOn:{click:function(n){e.restartProgress(n)}}},[e._v("Restart")]),e._v(" "),e.transition?t("md-spinner",{attrs:{"md-progress":e.progress}}):e._e(),e._v(" "),e.transition?t("md-spinner",{staticClass:"md-accent",attrs:{"md-progress":e.progress}}):e._e(),e._v(" "),e.transition?t("md-spinner",{staticClass:"md-warn",attrs:{"md-progress":e.progress}}):e._e()],1),e._v(" "),t("div",{slot:"code"},[t("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-spinner :md-progress="progress"></md-spinner>\n            <md-spinner :md-progress="progress" class="md-accent"></md-spinner>\n            <md-spinner :md-progress="progress" class="md-warn"></md-spinner>\n          ')])],1)]),e._v(" "),t("example-box",{attrs:{"card-title":"Indeterminate"}},[t("div",{staticClass:"spinner-demo",slot:"demo"},[t("md-spinner",{attrs:{"md-indeterminate":""}}),e._v(" "),t("md-spinner",{staticClass:"md-accent",attrs:{"md-indeterminate":""}}),e._v(" "),t("md-spinner",{staticClass:"md-warn",attrs:{"md-indeterminate":""}})],1),e._v(" "),t("div",{slot:"code"},[t("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-spinner md-indeterminate></md-spinner>\n            <md-spinner md-indeterminate class="md-accent"></md-spinner>\n            <md-spinner md-indeterminate class="md-warn"></md-spinner>\n          ')])],1)]),e._v(" "),t("example-box",{attrs:{"card-title":"Sizes"}},[t("div",{staticClass:"spinner-demo",slot:"demo"},[t("md-spinner",{staticClass:"md-accent",attrs:{"md-size":20,"md-indeterminate":""}}),e._v(" "),t("md-spinner",{staticClass:"md-warn",attrs:{"md-size":60,"md-indeterminate":""}}),e._v(" "),t("md-spinner",{attrs:{"md-size":150,"md-indeterminate":""}}),e._v(" "),t("md-spinner",{staticClass:"md-accent",attrs:{"md-size":20,"md-stroke":2.5,"md-indeterminate":""}}),e._v(" "),t("md-spinner",{staticClass:"md-warn",attrs:{"md-size":60,"md-stroke":1.5,"md-indeterminate":""}}),e._v(" "),t("md-spinner",{attrs:{"md-size":150,"md-stroke":1,"md-indeterminate":""}})],1),e._v(" "),t("div",{slot:"code"},[t("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-spinner :md-size="20" md-indeterminate class="md-accent"></md-spinner>\n            <md-spinner :md-size="60" md-indeterminate class="md-warn"></md-spinner>\n            <md-spinner :md-size="150" md-indeterminate></md-spinner>\n\n            <md-spinner :md-size="20" :md-stroke="2" md-indeterminate class="md-accent"></md-spinner>\n            <md-spinner :md-size="60" :md-stroke="1.5" md-indeterminate class="md-warn"></md-spinner>\n            <md-spinner :md-size="150" :md-stroke="1" md-indeterminate></md-spinner>\n          ')])],1)]),e._v(" "),t("example-box",{attrs:{"card-title":"Complete Example"}},[t("div",{slot:"demo"},[t("md-theme",{staticClass:"complete-example",attrs:{"md-name":"orange"}},[t("md-button",{staticClass:"md-fab",class:{"md-primary":e.done},nativeOn:{click:function(n){e.restartProgress(n)}}},[e.done?e._e():t("md-icon",[e._v("cloud_upload")]),e._v(" "),e.done?t("md-icon",[e._v("done")]):e._e()],1),e._v(" "),e.transition&&e.progress<115?t("md-spinner",{attrs:{"md-size":74,"md-stroke":2.2,"md-progress":e.progress}}):e._e()],1)],1),e._v(" "),t("div",{slot:"code"},[t("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-theme class="complete-example" md-name="orange">\n              <md-button class="md-fab" @click.native="restartProgress" :class="{ \'md-primary\': done }">\n                <md-icon v-if="!done">cloud_upload</md-icon>\n                <md-icon v-if="done">done</md-icon>\n              </md-button>\n\n              <md-spinner :md-size="74" :md-stroke="2.2" :md-progress="progress" v-if="transition && progress < 115"></md-spinner>\n            </md-theme>\n          ')]),e._v(" "),t("code-block",{attrs:{lang:"sass"}},[e._v("\n            .complete-example {\n              width: 56px;\n              height: 56px;\n              position: relative;\n\n              .md-fab {\n                margin: 0;\n              }\n\n              .md-spinner {\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n              }\n            }\n          ")]),e._v(" "),t("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                progress: 0,\n                progressInterval: null,\n                done: false,\n                transition: true\n              }),\n              methods: {\n                startProgress() {\n                  this.progressInterval = window.setInterval(() => {\n                    this.progress += 3;\n\n                    if (this.progress > 115) {\n                      this.done = true;\n                      window.clearInterval(this.progressInterval);\n                      window.setTimeout(() => {\n                        this.done = false;\n                      }, 3000);\n                    }\n                  }, 100);\n                },\n                restartProgress() {\n                  this.progress = 0;\n                  this.transition = false;\n                  this.done = false;\n\n                  window.clearInterval(this.progressInterval);\n                  window.setTimeout(() => {\n                    this.transition = true;\n                    this.startProgress();\n                  }, 600);\n                }\n              }\n            };\n          ")])],1)])],1)])],1)},staticRenderFns:[]}},522:function(e,n,t){var s=t(453);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t(5)("eca73376",s,!0)}});