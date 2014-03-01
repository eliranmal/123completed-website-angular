'use strict';

angular.module('123CompletedWebsiteApp')
    .directive('mainNavigation', function ($resource) {
        return {
            template: '<nav id="main-nav"></nav>',
            restrict: 'E',
            replace: true,
            link: function (scope, element, attrs) {

                function buildNavigationTree (el, nodes, toplevel) {

                    if (!nodes.length) {
                        return;
                    }

                    var list = angular.element('<ul></ul>');
                    if (toplevel) {
                        list.addClass('list-inline pull-right');
                    } else {
//                        list.addClass('list-unstyled')
                    }
                    el.append(list);

                    angular.forEach(nodes, function (n) {
                        var listItem = angular.element('<li></li>');
                        var anchor = angular.element('<a tabindex="' + n.tabindex + '">' + n.label + '</a>');
                        listItem.append(anchor);
                        n.link && anchor.attr('href', n.link);

                        if (n.children && n.children.length) {
                            // recursive call for nested levels
                            buildNavigationTree(listItem, n.children);
                        }

                        list.append(listItem);
                    });
                }

                scope.$watch('model', function (newValue) {
                    newValue && buildNavigationTree(element, newValue, true);
                });

            },
            controller: function ($scope) {

                var scope,
                    engagementModels = [],
                    services,
                    modelTabIndex = 31;

                scope = {
                    model: [
                        {
                            label: 'Services',
//                            link: '/services.html',
                            tabindex: 11,
                            children: [
                                {
                                    label: 'Global Services',
                                    link: '/global-services.html',
                                    tabindex: 21
                                },
                                {
                                    label: 'Engagement Models',
                                    link: '/engagement-models.html',
                                    tabindex: 22,
                                    children: engagementModels
                                }

                            ]
                        },
                        {
                            label: 'Training',
                            link: '/training.html',
                            tabindex: 12
                        },
                        {
                            label: 'Business Relations',
                            link: '/business-relations.html',
                            tabindex: 13
                        },
                        {
                            label: 'Management',
                            link: '/staff.html',
                            tabindex: 14
                        },
                        {
                            label: 'Contact',
                            link: '/contact-us.html',
                            tabindex: 15
                        }
                    ]
                };

                $resource('data/services.json').get(function (d) {

                    services = d.services;
                    services && angular.forEach(services, function (s) {
                        engagementModels.push({
                            label: s.shortTitle,
                            link: '/engagement-models.html#' + s.id,
                            tabindex: modelTabIndex++
                        });
                    });

                    angular.extend($scope, scope);
                });

            }
        };
    });
