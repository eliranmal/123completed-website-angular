'use strict';

describe('Directive: acknowledgments', function () {
  beforeEach(module('123CompletedWebsiteApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<acknowledgments></acknowledgments>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the acknowledgments directive');
  }));
});
