'use strict';

describe('Directive: mainNavigation', function () {
  beforeEach(module('123CompletedWebsiteApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<main-navigation></main-navigation>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the mainNavigation directive');
  }));
});
