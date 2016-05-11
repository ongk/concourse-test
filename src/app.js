(function () {
  'use strict';

  angular
    .module('concourse-test', [])
    .controller('indexController', IndexController);

  IndexController.$inject = [];

  function IndexController() {
    this.data = {
      title: 'This is the title',
      body: 'This is the body'
    };
  }

})();
