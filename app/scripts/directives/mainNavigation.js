'use strict';

angular.module('123CompletedWebsiteApp')
    .directive('mainNavigation', function ($resource, $compile) {
        return {
            restrict: 'E',
            replace: true,
            compile: function () {
                return {
                    pre: function preLink(scope, element, attrs) {

                        var data = {
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
                                            tabindex: 22
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

                        function buildNavigationTree(el, nodes, toplevel) {

                            if (!nodes.length) {
                                return;
                            }

                            var list = angular.element('<ul></ul>');
                            if (toplevel) {
                                list.addClass('list-inline pull-right');
                            } else {
                                //                        list.addClass('list-unstyled')
                                list.addClass('dropdown-menu');
                            }
                            el.append(list);

                            angular.forEach(nodes, function (n) {
                                var listItem = angular.element('<li></li>');
                                if (toplevel && n.children) {
                                    listItem.addClass('dropdown');
                                }
                                var anchor = angular.element('<a tabindex="' + n.tabindex + '">' + n.label + '</a>');
                                if (toplevel && n.children) {
                                    anchor.addClass('dropdown-toggle');
                                }
                                listItem.append(anchor);
                                n.link && anchor.attr('href', n.link);

                                if (n.children && n.children.length && toplevel) {
                                    // recursive call for nested levels
                                    buildNavigationTree(listItem, n.children);
                                }

                                list.append(listItem);
                            });
                        }


                        // we need to compile and link the template ourselves:
                        // the class attributes won't have any affect as bootstrap will
                        // always instantiate before linkage has had a chance to execute,
                        // thus the menu-toggle won't work.
                        var navEl = angular.element('<nav></nav>').attr('id', 'main-nav');
                        buildNavigationTree(navEl, data.model, true);

                        element.append(navEl);

                        var linkFn = $compile(navEl);
                        linkFn(scope);

                    },
                    post: angular.noop
                };

            }
        };
    });
