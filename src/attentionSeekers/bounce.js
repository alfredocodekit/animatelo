/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.bounce = function (selector, options) {
        var keyframeset = [
            {
                "transform": "translate3d(0,0,0)",
                "offset": "0",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "transform": "translate3d(0,0,0)",
                "offset": "0.2",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "transform": "translate3d(0, -30px, 0)",
                "offset": "0.4",
                "easing": "cubic-bezier(0.755, 0.050, 0.855, 0.060)"
            },
            {
                "transform": "translate3d(0, -30px, 0)",
                "offset": "0.43",
                "easing": "cubic-bezier(0.755, 0.050, 0.855, 0.060)"
            },
            {
                "transform": "translate3d(0,0,0)",
                "offset": "0.53",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "transform": "translate3d(0, -15px, 0)",
                "offset": "0.7",
                "easing": "cubic-bezier(0.755, 0.050, 0.855, 0.060)"
            },
            {
                "transform": "translate3d(0,0,0)",
                "offset": "0.8",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            },
            {
                "transform": "translate3d(0,-4px,0)",
                "offset": "0.9",
                "easing": "ease"
            },
            {
                "transform": "translate3d(0,0,0)",
                "offset": "1",
                "easing": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
