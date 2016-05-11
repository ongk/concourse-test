(function () {
  'use strict';

  describe('concourse-test', function () {
    var ctrl;

    beforeEach(module('concourse-test'));

    beforeEach(inject(function ($injector) {
      var $controller = $injector.get('$controller');
      ctrl = $controller('indexController', {});
    }));

    it('should be defined', function () {
      expect(ctrl).toBeDefined();
    });

    it('should have data defined', function () {
      expect(ctrl.data).toBeDefined();
    });
  });

})();
