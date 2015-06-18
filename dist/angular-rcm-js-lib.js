/**
 * RcmJsLib Module
 */
angular.module('RcmJsLib', []);

/**
 * rcmGuid Service
 * - Shared service
 */
angular.module('RcmJsLib').service(
    'rcmGuid',
    function () {

        return rcmGuid;
    }
);

/**
 * RcmEventManager Class
 * returns RcmEventManager class
 * - use new RcmEventManager() to instatiate
 */
angular.module('RcmJsLib').factory(
    'RcmEventManager',
    function () {

        return RcmEventManager;
    }
);

/**
 * rcmEventManager Service
 * - Shared service
 */
angular.module('RcmJsLib').service(
    'rcmEventManager',
    function () {

        return new RcmEventManager();
    }
);
