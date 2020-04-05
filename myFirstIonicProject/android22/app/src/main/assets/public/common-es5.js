(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateC2e2e1f4Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
      if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
      }

      if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
      }

      const el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

      if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
      }

      if (componentProps) {
        Object.assign(el, componentProps);
      }

      container.appendChild(el);

      if (el.componentOnReady) {
        await el.componentOnReady();
      }

      return el;
    };

    const detachComponent = (delegate, element) => {
      if (element) {
        if (delegate) {
          const container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticC8f1473eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    const hapticSelection = () => {
      const engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    const hapticSelectionStart = () => {
      const engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    const hapticSelectionChanged = () => {
      const engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    const hapticSelectionEnd = () => {
      const engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-1469ea79.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-1469ea79.js ***!
    \*************************************************************/

  /*! exports provided: d, g, l, s, t */

  /***/
  function node_modulesIonicCoreDistEsmIndex1469ea79Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return deepReady;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getIonPageElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "l", function () {
      return lifecycle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return setPageHidden;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "t", function () {
      return transition;
    });
    /* harmony import */


    var _core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-0a8d4d2e.js */
    "./node_modules/@ionic/core/dist/esm/core-0a8d4d2e.js");
    /* harmony import */


    var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constants-3c3e1099.js */
    "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");

    const iosTransitionAnimation = () => __webpack_require__.e(
    /*! import() | ios-transition-b4752795-js */
    "ios-transition-b4752795-js").then(__webpack_require__.bind(null,
    /*! ./ios.transition-b4752795.js */
    "./node_modules/@ionic/core/dist/esm/ios.transition-b4752795.js"));

    const mdTransitionAnimation = () => __webpack_require__.e(
    /*! import() | md-transition-5ee3c425-js */
    "md-transition-5ee3c425-js").then(__webpack_require__.bind(null,
    /*! ./md.transition-5ee3c425.js */
    "./node_modules/@ionic/core/dist/esm/md.transition-5ee3c425.js"));

    const transition = opts => {
      return new Promise((resolve, reject) => {
        Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
          beforeTransition(opts);
          runTransition(opts).then(result => {
            if (result.animation) {
              result.animation.destroy();
            }

            afterTransition(opts);
            resolve(result);
          }, error => {
            afterTransition(opts);
            reject(error);
          });
        });
      });
    };

    const beforeTransition = opts => {
      const enteringEl = opts.enteringEl;
      const leavingEl = opts.leavingEl;
      setZIndex(enteringEl, leavingEl, opts.direction);

      if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
      } else {
        enteringEl.classList.remove('can-go-back');
      }

      setPageHidden(enteringEl, false);

      if (leavingEl) {
        setPageHidden(leavingEl, false);
      }
    };

    const runTransition = async opts => {
      const animationBuilder = await getAnimationBuilder(opts);
      const ani = animationBuilder ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation

      return ani;
    };

    const afterTransition = opts => {
      const enteringEl = opts.enteringEl;
      const leavingEl = opts.leavingEl;
      enteringEl.classList.remove('ion-page-invisible');

      if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
      }
    };

    const getAnimationBuilder = async opts => {
      if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
      }

      if (opts.animationBuilder) {
        return opts.animationBuilder;
      }

      const getAnimation = opts.mode === 'ios' ? (await iosTransitionAnimation()).iosTransitionAnimation : (await mdTransitionAnimation()).mdTransitionAnimation;
      return getAnimation;
    };

    const animation = async (animationBuilder, opts) => {
      await waitForReady(opts, true);
      const trans = animationBuilder(opts.baseEl, opts);
      fireWillEvents(opts.enteringEl, opts.leavingEl);
      const didComplete = await playTransition(trans, opts);

      if (opts.progressCallback) {
        opts.progressCallback(undefined);
      }

      if (didComplete) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
      }

      return {
        hasCompleted: didComplete,
        animation: trans
      };
    };

    const noAnimation = async opts => {
      const enteringEl = opts.enteringEl;
      const leavingEl = opts.leavingEl;
      await waitForReady(opts, false);
      fireWillEvents(enteringEl, leavingEl);
      fireDidEvents(enteringEl, leavingEl);
      return {
        hasCompleted: true
      };
    };

    const waitForReady = async (opts, defaultDeep) => {
      const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
      const promises = deep ? [deepReady(opts.enteringEl), deepReady(opts.leavingEl)] : [shallowReady(opts.enteringEl), shallowReady(opts.leavingEl)];
      await Promise.all(promises);
      await notifyViewReady(opts.viewIsReady, opts.enteringEl);
    };

    const notifyViewReady = async (viewIsReady, enteringEl) => {
      if (viewIsReady) {
        await viewIsReady(enteringEl);
      }
    };

    const playTransition = (trans, opts) => {
      const progressCallback = opts.progressCallback;
      const promise = new Promise(resolve => {
        trans.onFinish(currentStep => resolve(currentStep === 1));
      }); // cool, let's do this, start the transition

      if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
      } else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
      } // create a callback for when the animation is done


      return promise;
    };

    const fireWillEvents = (enteringEl, leavingEl) => {
      lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
      lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
    };

    const fireDidEvents = (enteringEl, leavingEl) => {
      lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
      lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
    };

    const lifecycle = (el, eventName) => {
      if (el) {
        const ev = new CustomEvent(eventName, {
          bubbles: false,
          cancelable: false
        });
        el.dispatchEvent(ev);
      }
    };

    const shallowReady = el => {
      if (el && el.componentOnReady) {
        return el.componentOnReady();
      }

      return Promise.resolve();
    };

    const deepReady = async el => {
      const element = el;

      if (element) {
        if (element.componentOnReady != null) {
          const stencilEl = await element.componentOnReady();

          if (stencilEl != null) {
            return;
          }
        }

        await Promise.all(Array.from(element.children).map(deepReady));
      }
    };

    const setPageHidden = (el, hidden) => {
      if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
      } else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
      }
    };

    const setZIndex = (enteringEl, leavingEl, direction) => {
      if (enteringEl !== undefined) {
        enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
      }

      if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
      }
    };

    const getIonPageElement = element => {
      if (element.classList.contains('ion-page')) {
        return element;
      }

      const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');

      if (ionPage) {
        return ionPage;
      } // idk, return the original element so at least something animates and we don't have a null pointer


      return element;
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
    \*************************************************************/

  /*! exports provided: s */

  /***/
  function node_modulesIonicCoreDistEsmIndex3476b023Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return sanitizeDOMString;
    });
    /**
     * Does a simple sanitization of all elements
     * in an untrusted string
     */


    const sanitizeDOMString = untrustedString => {
      try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
          return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */


        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */

        blockedTags.forEach(blockedTag => {
          const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

          for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
            const element = getElementsToRemove[elementIndex];

            if (element.parentNode) {
              element.parentNode.removeChild(element);
            } else {
              documentFragment.removeChild(element);
            }
            /**
             * We still need to sanitize
             * the children of this element
             * as they are left behind
             */


            const childElements = getElementChildren(element);
            /* tslint:disable-next-line */

            for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
              sanitizeElement(childElements[childIndex]);
            }
          }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes

        const dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */

        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
          sanitizeElement(dfChildren[childIndex]);
        } // Append document fragment to div


        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

        const getInnerDiv = fragmentDiv.querySelector('div');
        return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
      } catch (err) {
        console.error(err);
        return '';
      }
    };
    /**
     * Clean up current element based on allowed attributes
     * and then recursively dig down into any child elements to
     * clean those up as well
     */


    const sanitizeElement = element => {
      // IE uses childNodes, so ignore nodes that are not elements
      if (element.nodeType && element.nodeType !== 1) {
        return;
      }

      for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name; // remove non-allowed attribs

        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
          element.removeAttribute(attributeName);
          continue;
        } // clean up any allowed attribs
        // that attempt to do any JS funny-business


        const attributeValue = attribute.value;
        /* tslint:disable-next-line */

        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
          element.removeAttribute(attributeName);
        }
      }
      /**
       * Sanitize any nested children
       */


      const childElements = getElementChildren(element);
      /* tslint:disable-next-line */

      for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
      }
    };
    /**
     * IE doesn't always support .children
     * so we revert to .childNodes instead
     */


    const getElementChildren = el => {
      return el.children != null ? el.children : el.childNodes;
    };

    const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
    const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigs28520d80Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    const spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
          const animationDelay = "".concat(dur * index / total - dur, "ms");
          const angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
          const step = index / total;
          const animationDelay = "".concat(dur * step - dur, "ms");
          const angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
          const animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
          const transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          const animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
          const transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          const animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    const SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme18cbe2ccJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    const hostContext = (selector, el) => {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    const createColorClasses = color => {
      return typeof color === 'string' && color.length > 0 ? {
        'ion-color': true,
        ["ion-color-".concat(color)]: true
      } : undefined;
    };

    const getClassList = classes => {
      if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
      }

      return [];
    };

    const getClassMap = classes => {
      const map = {};
      getClassList(classes).forEach(c => map[c] = true);
      return map;
    };

    const SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    const openURL = async (url, ev, direction) => {
      if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');

        if (router) {
          if (ev != null) {
            ev.preventDefault();
          }

          return router.push(url, direction);
        }
      }

      return false;
    };
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/places/place-add/place-add.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/place-add/place-add.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlacesPlaceAddPlaceAddPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add a New Place</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-card>\n        <ion-card-content>\n          <ion-input type=\"text\" placeholder=\"Write a Title\" #title>\n          </ion-input>\n          <ion-input\n            type=\"text\"\n            placeholder=\"http://imagewebexamplesite.com\"\n            #imageURL\n          >\n          </ion-input>\n        </ion-card-content>\n        <ion-button color=\"primary\" (click)=\"saveNewPlace(title, imageURL)\">\n          Save\n        </ion-button>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/places/place-detail/place-detail.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/place-detail/place-detail.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlacesPlaceDetailPlaceDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{place.title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"danger\" (click)=\"deletePlace()\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-img [src]=\"place.imageURL\"> </ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col> <h1 class=\"ion-text-center\">{{place.title}}</h1></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list\n          *ngIf=\"place.comments && place.comments.length > 0; else noComments\"\n        >\n          <ion-item *ngFor=\"let comment of place.comments\">\n            {{comment}}\n          </ion-item>\n        </ion-list>\n        <ng-template #noComments>\n          <ion-text>\n            <p class=\"ion-text-center\">No comments yet.</p>\n          </ion-text>\n        </ng-template>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/places/place-add/place-add-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/places/place-add/place-add-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: PlaceAddPageRoutingModule */

  /***/
  function srcAppPlacesPlaceAddPlaceAddRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceAddPageRoutingModule", function () {
      return PlaceAddPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _place_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./place-add.page */
    "./src/app/places/place-add/place-add.page.ts");

    const routes = [{
      path: '',
      component: _place_add_page__WEBPACK_IMPORTED_MODULE_3__["PlaceAddPage"]
    }];
    let PlaceAddPageRoutingModule = class PlaceAddPageRoutingModule {};
    PlaceAddPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlaceAddPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/places/place-add/place-add.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/places/place-add/place-add.module.ts ***!
    \******************************************************/

  /*! exports provided: PlaceAddPageModule */

  /***/
  function srcAppPlacesPlaceAddPlaceAddModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceAddPageModule", function () {
      return PlaceAddPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _place_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./place-add-routing.module */
    "./src/app/places/place-add/place-add-routing.module.ts");
    /* harmony import */


    var _place_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./place-add.page */
    "./src/app/places/place-add/place-add.page.ts");

    let PlaceAddPageModule = class PlaceAddPageModule {};
    PlaceAddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _place_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaceAddPageRoutingModule"]],
      declarations: [_place_add_page__WEBPACK_IMPORTED_MODULE_6__["PlaceAddPage"]]
    })], PlaceAddPageModule);
    /***/
  },

  /***/
  "./src/app/places/place-add/place-add.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/places/place-add/place-add.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlacesPlaceAddPlaceAddPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9wbGFjZS1hZGQvcGxhY2UtYWRkLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/places/place-add/place-add.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/places/place-add/place-add.page.ts ***!
    \****************************************************/

  /*! exports provided: PlaceAddPage */

  /***/
  function srcAppPlacesPlaceAddPlaceAddPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceAddPage", function () {
      return PlaceAddPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../places.service */
    "./src/app/places/places.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let PlaceAddPage = class PlaceAddPage {
      constructor(placesService, router) {
        this.placesService = placesService;
        this.router = router;
      }

      ngOnInit() {}

      saveNewPlace(title, imageURL) {
        this.placesService.getAddPlace(title.value, imageURL.value);
        this.router.navigate(["/places"]);
      }

    };

    PlaceAddPage.ctorParameters = () => [{
      type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    PlaceAddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-place-add",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./place-add.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/places/place-add/place-add.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./place-add.page.scss */
      "./src/app/places/place-add/place-add.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], PlaceAddPage);
    /***/
  },

  /***/
  "./src/app/places/place-detail/place-detail-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/places/place-detail/place-detail-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: PlaceDetailPageRoutingModule */

  /***/
  function srcAppPlacesPlaceDetailPlaceDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceDetailPageRoutingModule", function () {
      return PlaceDetailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _place_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./place-detail.page */
    "./src/app/places/place-detail/place-detail.page.ts");

    const routes = [{
      path: '',
      component: _place_detail_page__WEBPACK_IMPORTED_MODULE_3__["PlaceDetailPage"]
    }];
    let PlaceDetailPageRoutingModule = class PlaceDetailPageRoutingModule {};
    PlaceDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlaceDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/places/place-detail/place-detail.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/places/place-detail/place-detail.module.ts ***!
    \************************************************************/

  /*! exports provided: PlaceDetailPageModule */

  /***/
  function srcAppPlacesPlaceDetailPlaceDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceDetailPageModule", function () {
      return PlaceDetailPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./place-detail-routing.module */
    "./src/app/places/place-detail/place-detail-routing.module.ts");
    /* harmony import */


    var _place_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./place-detail.page */
    "./src/app/places/place-detail/place-detail.page.ts");

    let PlaceDetailPageModule = class PlaceDetailPageModule {};
    PlaceDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaceDetailPageRoutingModule"]],
      declarations: [_place_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlaceDetailPage"]]
    })], PlaceDetailPageModule);
    /***/
  },

  /***/
  "./src/app/places/place-detail/place-detail.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/places/place-detail/place-detail.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlacesPlaceDetailPlaceDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9wbGFjZS1kZXRhaWwvcGxhY2UtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/places/place-detail/place-detail.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/places/place-detail/place-detail.page.ts ***!
    \**********************************************************/

  /*! exports provided: PlaceDetailPage */

  /***/
  function srcAppPlacesPlaceDetailPlaceDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceDetailPage", function () {
      return PlaceDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../places.service */
    "./src/app/places/places.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let PlaceDetailPage = class PlaceDetailPage {
      constructor(activatedRoute, placesService, router, alertCtrl) {
        this.activatedRoute = activatedRoute;
        this.placesService = placesService;
        this.router = router;
        this.alertCtrl = alertCtrl;
      }

      ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
          // redirect
          const recipeId = paramMap.get("placeId");
          this.place = this.placesService.getPlace(recipeId);
        });
      }

      deletePlace() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alertElement = yield this.alertCtrl.create({
            header: "Are you sure, you want to delete it?",
            message: "Be careful",
            buttons: [{
              text: "Cancel",
              role: "cancel"
            }, {
              text: "Delete",
              handler: () => {
                this.placesService.deletePlace(this.place.id);
                this.router.navigate(["/places"]);
              }
            }]
          });
          yield alertElement.present();
        });
      }

    };

    PlaceDetailPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
    }];

    PlaceDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-place-detail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./place-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/places/place-detail/place-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./place-detail.page.scss */
      "./src/app/places/place-detail/place-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], PlaceDetailPage);
    /***/
  },

  /***/
  "./src/app/places/places.service.ts":
  /*!******************************************!*\
    !*** ./src/app/places/places.service.ts ***!
    \******************************************/

  /*! exports provided: PlacesService */

  /***/
  function srcAppPlacesPlacesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlacesService", function () {
      return PlacesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let PlacesService = class PlacesService {
      constructor() {
        this.places = [{
          id: "1",
          title: "Eiffel Tower",
          imageURL: "https://cdn.getyourguide.com/img/tour_img-2422815-146.jpg",
          comments: ["Awesome place", "wonderful experience"]
        }, {
          id: "2",
          title: "Statue of liberty",
          imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg",
          comments: ["Awesome place", "wonderful experience"]
        }, {
          id: "3",
          title: "Awesome place",
          imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg",
          comments: []
        }];
      }

      getPlace(placeId) {
        return Object.assign({}, this.places.find(place => {
          return place.id === placeId;
        }));
      }

      getPlaces() {
        return [...this.places];
      }

      getAddPlace(title, imageURL) {
        this.places.push({
          title,
          imageURL,
          comments: [],
          id: this.places.length + 1 + ""
        });
      }

      deletePlace(placeId) {
        this.places = this.places.filter(place => {
          return place.id !== placeId;
        });
      }

    };
    PlacesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PlacesService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map