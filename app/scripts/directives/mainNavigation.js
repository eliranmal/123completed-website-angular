'use strict';

angular.module('123CompletedWebsiteApp')
    .directive('mainNavigation', function () {
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
                    }
                    el.append(list);

                    angular.forEach(nodes, function (n) {
                        var listItem = angular.element(
                            '<li>' +
                                '<a tabindex="' + n.tabindex + '" href="' + n.link + '">' + n.label + '</a>' +
                            '</li>'
                        );

                        if (n.children && n.children.length) {
                            // recursive call for nested levels
                            buildNavigationTree(listItem, n.children);
                        }

                        list.append(listItem);
                    });
                }

                buildNavigationTree(element, scope.model, true);

            },
            controller: function ($scope) {

                angular.extend($scope, {
                    model: [
                        {
                            label: 'Services',
                            link: '/services.html',
                            tabindex: 11,
                            children: [
                                {
                                    label: 'Global Services',
                                    link: '#',
                                    tabindex: 21,
                                    children: null
                                },
                                {
                                    label: 'Engagement Models',
                                    link: '#',
                                    tabindex: 22,
                                    children: null
                                }

                            ]
                        },
                        {
                            label: 'Training',
                            link: '/training.html',
                            tabindex: 12,
                            children: null
                        },
                        {
                            label: 'Business Relations',
                            link: '/business-relations.html',
                            tabindex: 13,
                            children: null
                        },
                        {
                            label: 'Management',
                            link: '/staff.html',
                            tabindex: 14,
                            children: null
                        },
                        {
                            label: 'Contact',
                            link: '/contact-us.html',
                            tabindex: 15,
                            children: null
                        }
                    ]
                });
            }
        };
    });
