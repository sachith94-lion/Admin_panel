function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userdetails-userdetails-module-ngfactory"], {
  /***/
  "./src/app/userdetails/userdetails-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/userdetails/userdetails-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: UserdetailsRoutingModule, ɵ0 */

  /***/
  function srcAppUserdetailsUserdetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdetailsRoutingModule", function () {
      return UserdetailsRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _userdetails_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./userdetails.component */
    "./src/app/userdetails/userdetails.component.ts");

    var ɵ0 = {
      breadcrumb: 'Users Details'
    };
    var routes = [{
      path: '',
      component: _userdetails_component__WEBPACK_IMPORTED_MODULE_1__["UserdetailsComponent"],
      data: ɵ0
    }];

    var UserdetailsRoutingModule = function UserdetailsRoutingModule() {
      _classCallCheck(this, UserdetailsRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/userdetails/userdetails.component.ngfactory.js":
  /*!****************************************************************!*\
    !*** ./src/app/userdetails/userdetails.component.ngfactory.js ***!
    \****************************************************************/

  /*! exports provided: RenderType_UserdetailsComponent, View_UserdetailsComponent_0, View_UserdetailsComponent_Host_0, UserdetailsComponentNgFactory */

  /***/
  function srcAppUserdetailsUserdetailsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_UserdetailsComponent", function () {
      return RenderType_UserdetailsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_UserdetailsComponent_0", function () {
      return View_UserdetailsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_UserdetailsComponent_Host_0", function () {
      return View_UserdetailsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdetailsComponentNgFactory", function () {
      return UserdetailsComponentNgFactory;
    });
    /* harmony import */


    var _userdetails_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./userdetails.component.scss.shim.ngstyle */
    "./src/app/userdetails/userdetails.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../node_modules/ngx-spinner/ngx-spinner.ngfactory */
    "./node_modules/ngx-spinner/ngx-spinner.ngfactory.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _userdetails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./userdetails.component */
    "./src/app/userdetails/userdetails.component.ts");
    /* harmony import */


    var _services_apis_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_UserdetailsComponent = [_userdetails_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_UserdetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_UserdetailsComponent,
      data: {}
    });

    function View_UserdetailsComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [","]))], null, null);
    }

    function View_UserdetailsComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "border_bottom"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " X ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_2 = _v.parent.context.index != _v.parent.parent.context.$implicit.order.length;

        _ck(_v, 3, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.name;
        var currVal_1 = _v.parent.context.$implicit.quantiy;

        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }

    function View_UserdetailsComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "flex_titles"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [["class", "sub_name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" - ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "p", [["class", "sub_name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _v.context.$implicit.name;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.getCurrency();

        var currVal_2 = _v.context.$implicit.value;

        _ck(_v, 4, 0, currVal_1, currVal_2);
      });
    }

    function View_UserdetailsComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "subNames"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [["class", "food_title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " X ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var currVal_2 = _v.context.$implicit.item;

        _ck(_v, 4, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.name;
        var currVal_1 = _v.parent.context.$implicit.selectedItem[_v.context.index].total;

        _ck(_v, 2, 0, currVal_0, currVal_1);
      });
    }

    function View_UserdetailsComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var currVal_0 = !_v.context.$implicit.selectedItem || !_v.context.$implicit.selectedItem.length;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.selectedItem;

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_UserdetailsComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "p", [["class", "head_gray"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).transform("Discount"));

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_UserdetailsComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "small_lbl"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", "", " "]))], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _co.getCurrency();

        var currVal_1 = _v.parent.context.$implicit.dicount;

        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }

    function View_UserdetailsComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "status_detail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "deliver_div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("Delivered"));

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_UserdetailsComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "status_detail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "deliver_div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("Your Order is"));

        var currVal_1 = _v.parent.context.$implicit.status;

        _ck(_v, 2, 0, currVal_0, currVal_1);
      });
    }

    function View_UserdetailsComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "status_detail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "deliver_div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("Your Order is"));

        var currVal_1 = _v.parent.context.$implicit.status;

        _ck(_v, 2, 0, currVal_0, currVal_1);
      });
    }

    function View_UserdetailsComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 36, "div", [["class", "card_div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "resto_detail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "div", [["class", "back_image"]], [[4, "backgroundImage", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["style", "margin-left: 20px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [["class", "res_name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "p", [["class", "res_location"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "div", [["class", "line_div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 20, "div", [["class", "order_detail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "p", [["class", "head_gray"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "div", [["class", "small_lbl"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "p", [["class", "head_gray"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "p", [["class", "small_lbl"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 2, "p", [["class", "head_gray"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "p", [["class", "small_lbl"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](29, null, ["", "", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 0, "div", [["class", "line_div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_4 = _v.context.$implicit.order;

        _ck(_v, 15, 0, currVal_4);

        var currVal_7 = _v.context.$implicit.appliedCoupon;

        _ck(_v, 22, 0, currVal_7);

        var currVal_8 = _v.context.$implicit.appliedCoupon;

        _ck(_v, 24, 0, currVal_8);

        var currVal_12 = _v.context.$implicit.status == "completed" || _v.context.$implicit.status == "delivered";

        _ck(_v, 32, 0, currVal_12);

        var currVal_13 = _v.context.$implicit.status == "rejected" || _v.context.$implicit.status == "cancel";

        _ck(_v, 34, 0, currVal_13);

        var currVal_14 = _v.context.$implicit.status == "created" || _v.context.$implicit.status == "ongoing" || _v.context.$implicit.status === "accepted";

        _ck(_v, 36, 0, currVal_14);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "url(" + _v.context.$implicit.vid.cover + ")";

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.vid.name;

        _ck(_v, 5, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.vid.address;

        _ck(_v, 7, 0, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).transform("ITEMS"));

        _ck(_v, 11, 0, currVal_3);

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).transform("ORDERED ON"));

        _ck(_v, 17, 0, currVal_5);

        var currVal_6 = _co.getDate(_v.context.$implicit.time);

        _ck(_v, 20, 0, currVal_6);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 26, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).transform("TOTAL AMOUNT"));

        _ck(_v, 26, 0, currVal_9);

        var currVal_10 = _co.getCurrency();

        var currVal_11 = _v.context.$implicit.grandTotal;

        _ck(_v, 29, 0, currVal_10, currVal_11);
      });
    }

    function View_UserdetailsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "orders"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.myOrders;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_UserdetailsComponent_14(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "p", [["class", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", " ", " ", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.title;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.house;
        var currVal_2 = _v.context.$implicit.landmark;
        var currVal_3 = _v.context.$implicit.address;

        _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3);
      });
    }

    function View_UserdetailsComponent_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "address"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.myaddress;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_UserdetailsComponent_16(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "row"], ["style", "border-bottom: 1px solid lightgray;padding: 10px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["alt", ""], ["height", "100"], ["onError", "this.src='assets/icon.png'"], ["width", "100"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "div", [["class", "col-md-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [["style", "font-weight: bold;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "]))], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.cover, "");

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.vid.name;

        _ck(_v, 5, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.descriptions;

        _ck(_v, 6, 0, currVal_2);
      });
    }

    function View_UserdetailsComponent_15(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "review"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.reviews;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_UserdetailsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "ngx-spinner", [["color", "#e74c3c"], ["type", "ball-pulse-sync"]], null, null, null, _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NgxSpinnerComponent_0"], _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NgxSpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"], [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        color: [0, "color"],
        type: [1, "type"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "p", [["style", "font-size: 20px; color: #e74c3c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 61, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 60, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 59, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 3, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 54, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 29, "div", [["class", "col-xl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 28, "div", [["class", "user-card-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 27, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "div", [["class", "top-card text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "img", [["alt", ""], ["class", "img-responsive"], ["onError", "this.src='assets/icon.png'"], ["style", "height: 100px;width: 100px;border-radius: 50%;"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "div", [["class", "card-contain text-center p-t-40"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "h5", [["class", "text-capitalize p-b-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "p", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 19, "div", [["class", "card-data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 18, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 5, "div", [["class", "col-4 b-r-default text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "p", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](27, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](30, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 5, "div", [["class", "col-4 b-r-default text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 2, "p", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](33, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](36, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 5, "div", [["class", "col-4 b-r-default text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 2, "p", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](39, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](42, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 23, "div", [["class", "col-xl-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 22, "div", [["class", "user-card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 21, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 20, "ngb-tabset", [], null, null, null, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_NgbTabset_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_NgbTabset"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 2146304, null, 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabset"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetConfig"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        tabs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 5, "ngb-tab", [["title", "Orders"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 2113536, [[1, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTab"], [], {
        title: [0, "title"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        titleTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        contentTpls: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_UserdetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, [[3, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 5, "ngb-tab", [["title", "Address"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 2113536, [[1, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTab"], [], {
        title: [0, "title"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        titleTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        contentTpls: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_UserdetailsComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, [[5, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 5, "ngb-tab", [["title", "Reviews"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 2113536, [[1, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTab"], [], {
        title: [0, "title"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        titleTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        contentTpls: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_UserdetailsComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, [[7, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) {
        var currVal_0 = "#e74c3c";
        var currVal_1 = "ball-pulse-sync";

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_13 = "Orders";

        _ck(_v, 50, 0, currVal_13);

        var currVal_14 = "Address";

        _ck(_v, 56, 0, currVal_14);

        var currVal_15 = "Reviews";

        _ck(_v, 62, 0, currVal_15);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).transform("Please wait..."));

        _ck(_v, 3, 0, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).transform("User Details"));

        _ck(_v, 10, 0, currVal_3);

        var currVal_4 = _co.photo;

        _ck(_v, 17, 0, currVal_4);

        var currVal_5 = _co.name;

        _ck(_v, 20, 0, currVal_5);

        var currVal_6 = _co.email;

        _ck(_v, 22, 0, currVal_6);

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 27, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).transform("Orders"));

        _ck(_v, 27, 0, currVal_7);

        var currVal_8 = _co.myOrders.length;

        _ck(_v, 30, 0, currVal_8);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 33, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).transform("Address"));

        _ck(_v, 33, 0, currVal_9);

        var currVal_10 = _co.myaddress.length;

        _ck(_v, 36, 0, currVal_10);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 39, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).transform("Reviews"));

        _ck(_v, 39, 0, currVal_11);

        var currVal_12 = _co.reviews.length;

        _ck(_v, 42, 0, currVal_12);
      });
    }

    function View_UserdetailsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-userdetails", [], null, null, null, View_UserdetailsComponent_0, RenderType_UserdetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _userdetails_component__WEBPACK_IMPORTED_MODULE_8__["UserdetailsComponent"], [_services_apis_service__WEBPACK_IMPORTED_MODULE_9__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var UserdetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-userdetails", _userdetails_component__WEBPACK_IMPORTED_MODULE_8__["UserdetailsComponent"], View_UserdetailsComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/userdetails/userdetails.component.scss.shim.ngstyle.js":
  /*!************************************************************************!*\
    !*** ./src/app/userdetails/userdetails.component.scss.shim.ngstyle.js ***!
    \************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppUserdetailsUserdetailsComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".orders[_ngcontent-%COMP%] {\n  height: 60vh;\n  overflow: scroll;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding: 15px;\n  margin-top: 20px;\n  border: 0.5px solid lightgray;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .line_div[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .back_image[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n  min-width: 50px;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .res_name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .res_location[_ngcontent-%COMP%] {\n  color: lightgray;\n  font-size: 14px;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .head_gray[_ngcontent-%COMP%] {\n  color: lightgray;\n  font-size: 13px;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .small_lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .border_bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed lightgray;\n  padding: 5px 0px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .food_title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .flex_titles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .flex_titles[_ngcontent-%COMP%]   .sub_name[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n}\n.orders[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .status_detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: lightgray;\n  font-size: 14px;\n}\n.address[_ngcontent-%COMP%] {\n  height: 60vh;\n  overflow: scroll;\n}\n.address[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  position: relative;\n  border-bottom: 1px solid lightgray;\n  overflow-x: auto;\n}\n.address[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.address[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.address[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .scroll-item[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.address[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n  font-size: 0.8rem;\n}\n.address[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: lightgray;\n  font-size: 0.7rem;\n}\n.address[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .moreIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 1px;\n}\n.review[_ngcontent-%COMP%] {\n  height: 60vh;\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmRldGFpbHMvQzpcXFVzZXJzXFxTYWNoaXRoXFxpb25pYzVGb29kQXBwRnVsbFxcQXBwX2NvZGVcXGhlcm9rdVxcQWRtaW5fcGFuZWwvc3JjXFxhcHBcXHVzZXJkZXRhaWxzXFx1c2VyZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlcmRldGFpbHMvdXNlcmRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ0VSO0FERFE7RUFDSSxXQUFBO0FDR1o7QUREUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDR1o7QUREUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDR1o7QUREWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDR2hCO0FEQVk7RUFDSSxnQkFBQTtBQ0VoQjtBREFZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDRWhCO0FER1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNEaEI7QURJWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0ZoQjtBRElZO0VBQ0ksbUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZoQjtBRElZO0VBQ0ksbUNBQUE7RUFDQSxtQkFBQTtBQ0ZoQjtBREdnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0RwQjtBREdnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDRHBCO0FERW9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQXhCO0FES1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0haO0FEUUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRE1JO0VBSUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUNQUjtBRENRO0VBQ0ksV0FBQTtBQ0NaO0FES1E7RUFDSSxhQUFBO0FDSFo7QURLUTtFQUNJLGNBQUE7QUNIWjtBREtRO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNIWjtBREtRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0haO0FES1E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDSFo7QURPQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvdXNlcmRldGFpbHMvdXNlcmRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXJze1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIC5jYXJkX2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgICAgICAubGluZV9kaXZ7XG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlc3RvX2RldGFpbHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJlc19uYW1le1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVzX2xvY2F0aW9ue1xuICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9yZGVyX2RldGFpbHtcbiAgICAgICAgICAgIC5oZWFkX2dyYXl7XG4gICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm9yZGVyX2JvdHRvbXtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdWJOYW1lc3tcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIC5mb29kX3RpdGxle1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmxleF90aXRsZXN7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgLnN1Yl9uYW1le1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXR1c19kZXRhaWx7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hZGRyZXNze1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIC5saXN0e1xuICAgICAgICBwe1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5zY3JvbGwtaXRlbSB7XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5uYW1le1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5tb3JlSWNvbntcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5yZXZpZXd7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG4iLCIub3JkZXJzIHtcbiAgaGVpZ2h0OiA2MHZoO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLm9yZGVycyAuY2FyZF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5vcmRlcnMgLmNhcmRfZGl2IHAge1xuICBtYXJnaW46IDBweDtcbn1cbi5vcmRlcnMgLmNhcmRfZGl2IC5saW5lX2RpdiB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm9yZGVycyAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub3JkZXJzIC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cbi5vcmRlcnMgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLnJlc19uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5vcmRlcnMgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLnJlc19sb2NhdGlvbiB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5vcmRlcnMgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLmhlYWRfZ3JheSB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5vcmRlcnMgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5vcmRlcnMgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLmJvcmRlcl9ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5vcmRlcnMgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLnN1Yk5hbWVzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4ub3JkZXJzIC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5zdWJOYW1lcyAuZm9vZF90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ub3JkZXJzIC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5zdWJOYW1lcyAuZmxleF90aXRsZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ub3JkZXJzIC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5zdWJOYW1lcyAuZmxleF90aXRsZXMgLnN1Yl9uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm9yZGVycyAuY2FyZF9kaXYgLnN0YXR1c19kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmFkZHJlc3Mge1xuICBoZWlnaHQ6IDYwdmg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG4uYWRkcmVzcyAubGlzdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5hZGRyZXNzIC5saXN0IHAge1xuICBtYXJnaW46IDBweDtcbn1cbi5hZGRyZXNzIC5saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYWRkcmVzcyAubGlzdCAuc2Nyb2xsLWl0ZW0ge1xuICBmbGV4OiAwIDAgYXV0bztcbn1cbi5hZGRyZXNzIC5saXN0IC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmFkZHJlc3MgLmxpc3QgLm5hbWUge1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbi5hZGRyZXNzIC5saXN0IC5tb3JlSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAxcHg7XG59XG5cbi5yZXZpZXcge1xuICBoZWlnaHQ6IDYwdmg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/userdetails/userdetails.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/userdetails/userdetails.component.ts ***!
    \******************************************************/

  /*! exports provided: UserdetailsComponent */

  /***/
  function srcAppUserdetailsUserdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdetailsComponent", function () {
      return UserdetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);

    var UserdetailsComponent = /*#__PURE__*/function () {
      function UserdetailsComponent(api, route) {
        var _this = this;

        _classCallCheck(this, UserdetailsComponent);

        this.api = api;
        this.route = route;
        this.myOrders = [];
        this.myaddress = [];
        this.reviews = [];
        this.name = '';
        this.email = '';
        this.photo = '';
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.id) {
            _this.id = data.id;

            _this.getProfile();

            _this.getMyOrders();

            _this.getAddress();
          }
        });
      }

      _createClass(UserdetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this2 = this;

          this.api.getMyProfile(this.id).then(function (data) {
            console.log('userdata', data);

            if (data) {
              _this2.name = data.fullname;
              _this2.photo = data && data.cover ? data.cover : 'assets/icon.png';
              _this2.email = data.email;

              _this2.api.getMyReviews(data.uid).then(function (reviews) {
                console.log(reviews);
                _this2.reviews = reviews;
              }, function (error) {
                console.log(error);
              })["catch"](function (error) {
                console.log(error);
              });
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getAddress",
        value: function getAddress() {
          var _this3 = this;

          this.api.getMyAddress(this.id).then(function (data) {
            console.log('my address', data);

            if (data) {
              _this3.myaddress = data;
            }
          }, function (error) {
            console.log(error);
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getMyOrders",
        value: function getMyOrders() {
          var _this4 = this;

          this.api.getMyOrders(this.id).then(function (data) {
            console.log('my orders', data);

            if (data && data.length) {
              data.forEach(function (element) {
                element.time = new Date(element.time);
              });
              data.sort(function (a, b) {
                return b.time - a.time;
              });
              _this4.myOrders = data;

              _this4.myOrders.forEach(function (element) {
                element.order = JSON.parse(element.order);
              });

              console.log('my order==>', _this4.myOrders);
            }
          }, function (error) {
            console.log(error);
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_1__(date).format('llll');
        }
      }, {
        key: "getCurrency",
        value: function getCurrency() {
          return this.api.getCurrecySymbol();
        }
      }]);

      return UserdetailsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/userdetails/userdetails.module.ngfactory.js":
  /*!*************************************************************!*\
    !*** ./src/app/userdetails/userdetails.module.ngfactory.js ***!
    \*************************************************************/

  /*! exports provided: UserdetailsModuleNgFactory */

  /***/
  function srcAppUserdetailsUserdetailsModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdetailsModuleNgFactory", function () {
      return UserdetailsModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _userdetails_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./userdetails.module */
    "./src/app/userdetails/userdetails.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _userdetails_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./userdetails.component.ngfactory */
    "./src/app/userdetails/userdetails.component.ngfactory.js");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-toasty/src/toasty.service */
    "./node_modules/ng2-toasty/src/toasty.service.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular2-notifications/dist/src/simple-notifications/services/notifications.service */
    "./node_modules/angular2-notifications/dist/src/simple-notifications/services/notifications.service.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! css-animator/angular/animation.service */
    "./node_modules/css-animator/angular/animation.service.js");
    /* harmony import */


    var css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @nicky-lenaers/ngx-scroll-to */
    "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../shared/menu-items/menu-items */
    "./src/app/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../shared/todo/todo.service */
    "./src/app/shared/todo/todo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _userdetails_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./userdetails-routing.module */
    "./src/app/userdetails/userdetails-routing.module.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ng2_toasty__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng2-toasty */
    "./node_modules/ng2-toasty/index.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! angular2-notifications/dist/src/simple-notifications.module */
    "./node_modules/angular2-notifications/dist/src/simple-notifications.module.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! css-animator/angular/animator.module */
    "./node_modules/css-animator/angular/animator.module.js");
    /* harmony import */


    var css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */


    var ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ng-click-outside/lib/click-outside.module */
    "./node_modules/ng-click-outside/lib/click-outside.module.js");
    /* harmony import */


    var ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _userdetails_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./userdetails.component */
    "./src/app/userdetails/userdetails.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var UserdetailsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_userdetails_module__WEBPACK_IMPORTED_MODULE_1__["UserdetailsModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _userdetails_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["UserdetailsComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵsNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyService"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["toastyServiceFactory"], [ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"], angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__["AnimationService"], css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__["AnimationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToService"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToService"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵd"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_12__["MapsAPILoader"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["LazyMapsAPILoader"], [[2, _agm_core__WEBPACK_IMPORTED_MODULE_12__["LAZY_MAPS_API_CONFIG"]], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵd"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_13__["MenuItems"], _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_13__["MenuItems"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_14__["TodoService"], _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_14__["TodoService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _userdetails_routing_module__WEBPACK_IMPORTED_MODULE_16__["UserdetailsRoutingModule"], _userdetails_routing_module__WEBPACK_IMPORTED_MODULE_16__["UserdetailsRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_toasty__WEBPACK_IMPORTED_MODULE_18__["ToastyModule"], ng2_toasty__WEBPACK_IMPORTED_MODULE_18__["ToastyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19__["SimpleNotificationsModule"], angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19__["SimpleNotificationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20__["AnimatorModule"], css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20__["AnimatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21__["ClickOutsideModule"], ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21__["ClickOutsideModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_23__["NgxSkeletonLoaderModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_23__["NgxSkeletonLoaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _userdetails_module__WEBPACK_IMPORTED_MODULE_1__["UserdetailsModule"], _userdetails_module__WEBPACK_IMPORTED_MODULE_1__["UserdetailsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], function () {
        return [[{
          path: "",
          component: _userdetails_component__WEBPACK_IMPORTED_MODULE_26__["UserdetailsComponent"],
          data: _userdetails_routing_module__WEBPACK_IMPORTED_MODULE_16__["ɵ0"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _agm_core__WEBPACK_IMPORTED_MODULE_12__["LAZY_MAPS_API_CONFIG"], {
        apiKey: "AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk"
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PERFECT_SCROLLBAR_CONFIG"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["ɵ0"], [])]);
    });
    /***/

  },

  /***/
  "./src/app/userdetails/userdetails.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/userdetails/userdetails.module.ts ***!
    \***************************************************/

  /*! exports provided: UserdetailsModule */

  /***/
  function srcAppUserdetailsUserdetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdetailsModule", function () {
      return UserdetailsModule;
    });

    var UserdetailsModule = function UserdetailsModule() {
      _classCallCheck(this, UserdetailsModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=userdetails-userdetails-module-ngfactory-es5.js.map