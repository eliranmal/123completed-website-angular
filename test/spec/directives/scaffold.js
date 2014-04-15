'use strict';

describe('Directive: scaffold', function () {
  beforeEach(module('123CompletedWebsiteApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<scaffold></scaffold>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the scaffold directive');
  }));
});
