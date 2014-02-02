'use strict';

describe('Controller: AcknowledgmentsCtrl', function () {

  // load the controller's module
  beforeEach(module('123CompletedWebsiteApp'));

  var AcknowledgmentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AcknowledgmentsCtrl = $controller('AcknowledgmentsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
