angular
    .module('altairApp')
    .controller('advancedCtrl', [
        '$scope',
        '$rootScope',
        '$timeout',
        function ($scope,$rootScope,$timeout) {

            $scope.forms_advanced = {
                "input_error": "Something wrong",
                "input_ok": "All ok",
                "ionslider_1": 23,
                "ionslider_2": {
                    "from": 160,
                    "to": 592
                },
                "ionslider_3": 40,
                "ionslider_4": {
                    "from": 20,
                    "to": 80
                },
                selectize_planets: ["2", "3"]
            };

            // model change
            $timeout(function() {
                $scope.forms_advanced.datepicker = "23.06.2016"
            }, 5000);

        // Advanced selects

            /*var planets_data = $scope.selectize_planets_options = [
                {id: 1, title: 'Mercury', url: 'http://en.wikipedia.org/wiki/Mercury_(planet)'},
                {id: 2, title: 'Venus', url: 'http://en.wikipedia.org/wiki/Venus'},
                {id: 3, title: 'Earth', url: 'http://en.wikipedia.org/wiki/Earth'},
                {id: 4, title: 'Mars', url: 'http://en.wikipedia.org/wiki/Mars'},
                {id: 5, title: 'Jupiter', url: 'http://en.wikipedia.org/wiki/Jupiter'},
                {id: 6, title: 'Saturn', url: 'http://en.wikipedia.org/wiki/Saturn'},
                {id: 7, title: 'Uranus', url: 'http://en.wikipedia.org/wiki/Uranus'},
                {id: 8, title: 'Neptune', url: 'http://en.wikipedia.org/wiki/Neptune'},
                {id: 9, title: 'Mercury', url: 'http://en.wikipedia.org/wiki/Mercury_(planet)'},
                {id: 10, title: 'Venus', url: 'http://en.wikipedia.org/wiki/Venus'},
                {id: 11, title: 'Earth', url: 'http://en.wikipedia.org/wiki/Earth'},
                {id: 12, title: 'Mars', url: 'http://en.wikipedia.org/wiki/Mars'},
                {id: 13, title: 'Jupiter', url: 'http://en.wikipedia.org/wiki/Jupiter'},
                {id: 14, title: 'Saturn', url: 'http://en.wikipedia.org/wiki/Saturn'},
                {id: 15, title: 'Uranus', url: 'http://en.wikipedia.org/wiki/Uranus'},
                {id: 16, title: 'Neptune', url: 'http://en.wikipedia.org/wiki/Neptune'},
                {id: 17, title: 'Mercury', url: 'http://en.wikipedia.org/wiki/Mercury_(planet)'},
                {id: 18, title: 'Venus', url: 'http://en.wikipedia.org/wiki/Venus'},
                {id: 19, title: 'Earth', url: 'http://en.wikipedia.org/wiki/Earth'},
                {id: 20, title: 'Mars', url: 'http://en.wikipedia.org/wiki/Mars'},
                {id: 21, title: 'Jupiter', url: 'http://en.wikipedia.org/wiki/Jupiter'},
                {id: 22, title: 'Saturn', url: 'http://en.wikipedia.org/wiki/Saturn'},
                {id: 23, title: 'Uranus', url: 'http://en.wikipedia.org/wiki/Uranus'},
                {id: 24, title: 'Neptune', url: 'http://en.wikipedia.org/wiki/Neptune'},
                {id: 25, title: 'Mercury', url: 'http://en.wikipedia.org/wiki/Mercury_(planet)'},
                {id: 26, title: 'Venus', url: 'http://en.wikipedia.org/wiki/Venus'},
                {id: 27, title: 'Earth', url: 'http://en.wikipedia.org/wiki/Earth'},
                {id: 28, title: 'Mars', url: 'http://en.wikipedia.org/wiki/Mars'},
                {id: 29, title: 'Jupiter', url: 'http://en.wikipedia.org/wiki/Jupiter'},
                {id: 30, title: 'Saturn', url: 'http://en.wikipedia.org/wiki/Saturn'},
                {id: 31, title: 'Uranus', url: 'http://en.wikipedia.org/wiki/Uranus'},
                {id: 32, title: 'Neptune', url: 'http://en.wikipedia.org/wiki/Neptune'}
            ];*/

            $scope.selectize_planets_edit = [59545,2840];

            var planets_data = $scope.selectize_planets_options = [
                {
                    login: "loiane",
                    id: 59545,
                    avatar_url: "https://avatars3.githubusercontent.com/u/59545?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/loiane",
                    html_url: "https://github.com/loiane",
                    followers_url: "https://api.github.com/users/loiane/followers",
                    following_url: "https://api.github.com/users/loiane/following{/other_user}",
                    gists_url: "https://api.github.com/users/loiane/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/loiane/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/loiane/subscriptions",
                    organizations_url: "https://api.github.com/users/loiane/orgs",
                    repos_url: "https://api.github.com/users/loiane/repos",
                    events_url: "https://api.github.com/users/loiane/events{/privacy}",
                    received_events_url: "https://api.github.com/users/loiane/received_events",
                    type: "User",
                    site_admin: false,
                    score: 1
                },
                {
                    login: "akitaonrails",
                    id: 2840,
                    avatar_url: "https://avatars1.githubusercontent.com/u/2840?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/akitaonrails",
                    html_url: "https://github.com/akitaonrails",
                    followers_url: "https://api.github.com/users/akitaonrails/followers",
                    following_url: "https://api.github.com/users/akitaonrails/following{/other_user}",
                    gists_url: "https://api.github.com/users/akitaonrails/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/akitaonrails/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/akitaonrails/subscriptions",
                    organizations_url: "https://api.github.com/users/akitaonrails/orgs",
                    repos_url: "https://api.github.com/users/akitaonrails/repos",
                    events_url: "https://api.github.com/users/akitaonrails/events{/privacy}",
                    received_events_url: "https://api.github.com/users/akitaonrails/received_events",
                    type: "User",
                    site_admin: false,
                    score: 1
                },
                {
                    login: "rodrigobranas",
                    id: 7491283,
                    avatar_url: "https://avatars3.githubusercontent.com/u/7491283?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/rodrigobranas",
                    html_url: "https://github.com/rodrigobranas",
                    followers_url: "https://api.github.com/users/rodrigobranas/followers",
                    following_url: "https://api.github.com/users/rodrigobranas/following{/other_user}",
                    gists_url: "https://api.github.com/users/rodrigobranas/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/rodrigobranas/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/rodrigobranas/subscriptions",
                    organizations_url: "https://api.github.com/users/rodrigobranas/orgs",
                    repos_url: "https://api.github.com/users/rodrigobranas/repos",
                    events_url: "https://api.github.com/users/rodrigobranas/events{/privacy}",
                    received_events_url: "https://api.github.com/users/rodrigobranas/received_events",
                    type: "User",
                    site_admin: false,
                    score: 1
                },
                {
                    login: "henriquebastos",
                    id: 12066,
                    avatar_url: "https://avatars1.githubusercontent.com/u/12066?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/henriquebastos",
                    html_url: "https://github.com/henriquebastos",
                    followers_url: "https://api.github.com/users/henriquebastos/followers",
                    following_url: "https://api.github.com/users/henriquebastos/following{/other_user}",
                    gists_url: "https://api.github.com/users/henriquebastos/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/henriquebastos/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/henriquebastos/subscriptions",
                    organizations_url: "https://api.github.com/users/henriquebastos/orgs",
                    repos_url: "https://api.github.com/users/henriquebastos/repos",
                    events_url: "https://api.github.com/users/henriquebastos/events{/privacy}",
                    received_events_url: "https://api.github.com/users/henriquebastos/received_events",
                    type: "User",
                    site_admin: false,
                    score: 1
                },
                {
                    login: "sergiolopes",
                    id: 91123,
                    avatar_url: "https://avatars0.githubusercontent.com/u/91123?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/sergiolopes",
                    html_url: "https://github.com/sergiolopes",
                    followers_url: "https://api.github.com/users/sergiolopes/followers",
                    following_url: "https://api.github.com/users/sergiolopes/following{/other_user}",
                    gists_url: "https://api.github.com/users/sergiolopes/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/sergiolopes/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/sergiolopes/subscriptions",
                    organizations_url: "https://api.github.com/users/sergiolopes/orgs",
                    repos_url: "https://api.github.com/users/sergiolopes/repos",
                    events_url: "https://api.github.com/users/sergiolopes/events{/privacy}",
                    received_events_url: "https://api.github.com/users/sergiolopes/received_events",
                    type: "User",
                    site_admin: false,
                    score: 1
                },
                {
                    login: "jaydson",
                    id: 72206,
                    avatar_url: "https://avatars3.githubusercontent.com/u/72206?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/jaydson",
                    html_url: "https://github.com/jaydson",
                    followers_url: "https://api.github.com/users/jaydson/followers",
                    following_url: "https://api.github.com/users/jaydson/following{/other_user}",
                    gists_url: "https://api.github.com/users/jaydson/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/jaydson/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/jaydson/subscriptions",
                    organizations_url: "https://api.github.com/users/jaydson/orgs",
                    repos_url: "https://api.github.com/users/jaydson/repos",
                    events_url: "https://api.github.com/users/jaydson/events{/privacy}",
                    received_events_url: "https://api.github.com/users/jaydson/received_events",
                    type: "User",
                    site_admin: false,
                    score: 1
                },
                {
                    login: "rochacbruno",
                    id: 458654,
                    avatar_url: "https://avatars2.githubusercontent.com/u/458654?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/rochacbruno",
                    html_url: "https://github.com/rochacbruno",
                    followers_url: "https://api.github.com/users/rochacbruno/followers",
                    following_url: "https://api.github.com/users/rochacbruno/following{/other_user}",
                    gists_url: "https://api.github.com/users/rochacbruno/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/rochacbruno/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/rochacbruno/subscriptions",
                    organizations_url: "https://api.github.com/users/rochacbruno/orgs",
                    repos_url: "https://api.github.com/users/rochacbruno/repos",
                    events_url: "https://api.github.com/users/rochacbruno/events{/privacy}",
                    received_events_url: "https://api.github.com/users/rochacbruno/received_events",
                    type: "User",
                    site_admin: false,
                    score: 1
                },
                {
                    login: "LFeh",
                    id: 3603793,
                    avatar_url: "https://avatars0.githubusercontent.com/u/3603793?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/LFeh",
                    html_url: "https://github.com/LFeh",
                    followers_url: "https://api.github.com/users/LFeh/followers",
                    following_url: "https://api.github.com/users/LFeh/following{/other_user}",
                    gists_url: "https://api.github.com/users/LFeh/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/LFeh/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/LFeh/subscriptions",
                    organizations_url: "https://api.github.com/users/LFeh/orgs",
                    repos_url: "https://api.github.com/users/LFeh/repos",
                    events_url: "https://api.github.com/users/LFeh/events{/privacy}",
                    received_events_url: "https://api.github.com/users/LFeh/received_events",
                    type: "User",
                    site_admin: false,
                    score: 1
                }
            ];

            var totalCount, page, perPage = 10;
            $scope.selectize_planets_config = {
                plugins: ['infinite_scroll'],
                maxItems: null,
                valueField: 'id',
                labelField: 'login',
                searchField: 'login',
                create: false,
                render: {
                    option: function(planets_data, escape) {
                        return  '<div class="option">' +
                            '<span class="title">' + escape(planets_data.login) + '</span>' +
                            '</div>';
                    },
                    item: function(planets_data, escape) {
                        return '<div class="item"><a href="' + escape(planets_data.id) + '" target="_blank">' + escape(planets_data.login) + '</a></div>';
                    }
                },
                load: function(query, callback) {
                    query = JSON.parse(query)
                    page = query.page || 1

                    if(!totalCount || totalCount > ( (page - 1) * perPage) ){
                        $.ajax({
                            url: 'https://api.github.com/search/users?q=' + query.search  + '+location:Brasil+location:Brazil&per_page=' + perPage + '&page=' + query.page,
                            error: function() {
                                callback();
                            },
                            success: function(res) {
                                totalCount = res.total_count;
                                callback(res.items);
                            }
                        });
                    } else {
                        callback();
                    }
                }
            };

            var emails_data = $scope.selectize_emails_options = [
                {id: 1, email: 'brian@thirdroute.com', name: 'Brian Reavis'},
                {id: 2, email: 'nikola@tesla.com', name: 'Nikola Tesla'},
                {id: 3, email: 'someone@gmail.com'}
            ];

            var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
                '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';

            $scope.selectize_emails_config = {
                plugins: {
                    'remove_button': {
                        label: ''
                    }
                },
                persist: false,
                maxItems: null,
                valueField: 'email',
                labelField: 'name',
                searchField: ['name', 'email'],
                placeholder: "Select email",
                render: {
                    item: function(emails_data, escape) {
                        return '<div>' +
                            (emails_data.name ? '<span class="name">' + escape(emails_data.name) + '</span>' : '') +
                            (emails_data.email ? '<span class="email">' + escape(emails_data.email) + '</span>' : '') +
                            '</div>';
                    },
                    option: function(emails_data, escape) {
                        var label = emails_data.name || emails_data.email;
                        var caption = emails_data.name ? emails_data.email : null;
                        return '<div>' +
                            '<span class="label">' + escape(label) + '</span>' +
                            (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                            '</div>';
                    }
                },
                createFilter: function(input) {
                    var match, regex;

                    // email@address.com
                    regex = new RegExp('^' + REGEX_EMAIL + '$', 'i');
                    match = input.match(regex);
                    if (match) return !this.options.hasOwnProperty(match[0]);

                    // name <email@address.com>
                    regex = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
                    match = input.match(regex);
                    if (match) return !this.options.hasOwnProperty(match[2]);

                    return false;
                },
                create: function(input) {
                    if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
                        return {email: input};
                    }
                    var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
                    if (match) {
                        return {
                            email : match[2],
                            name  : $.trim(match[1])
                        };
                    }
                    alert('Invalid email address.');
                    return false;
                }
            };

        // date range
            var $dp_start = $('#uk_dp_start'),
                $dp_end = $('#uk_dp_end');

            var start_date = UIkit.datepicker($dp_start, {
                format:'DD.MM.YYYY'
            });

            var end_date = UIkit.datepicker($dp_end, {
                format:'DD.MM.YYYY'
            });

            $dp_start.on('change',function() {
                end_date.options.minDate = $dp_start.val();
            });

            $dp_end.on('change',function() {
                start_date.options.maxDate = $dp_end.val();
            });

        // masked inputs
            var $maskedInput = $('.masked_input');
            if($maskedInput.length) {
                $maskedInput.inputmask();
            }

        //Date time range picker
            $scope.DatetimeRange = {
                ngModelStart: null,
                ngModelEnd: null,
                kNgModelStart: null,
                kNgModelEnd: null,
                EnableShow: false
            }
            $scope.openModalDateTimeRange = function(){
                $scope.DatetimeRange.EnableShow = true;
            }
            $scope.cancelModalDateTimeRange = function () {
                $scope.DatetimeRange.EnableShow = false;
            }
            $scope.selectDateTimeRange = function(){
                $scope.DatetimeRange.EnableShow = false;
            }
            $scope.clearModalDateTimeRange = function(){
                $scope.DatetimeRange.ngModelStart = null;
                $scope.DatetimeRange.ngModelEnd = null;
                $scope.DatetimeRange.kNgModelStart = null;
                $scope.DatetimeRange.kNgModelEnd = null;
            }
            $scope.$watchGroup(['DatetimeRange.ngModelStart', 'DatetimeRange.ngModelEnd'], function(newValues, oldValues, scope) {
                //console.log(newValues[0].format('YYYY-MM-dd HH:mm:ss'))
                //console.log(newValues[1].format('YYYY-MM-dd HH:mm:ss'))

                console.log(newValues[0])
                console.log(newValues[1])
            });

            /*var $dp_start_range = $('#uk_dp_start_range'),
                $dp_end_range = $('#uk_dp_end_range');

            var start_date_range = UIkit.datepicker($dp_start_range, {
                format:'YYYY-MM-DD HH:mm:ss'
            });

            var end_date_range = UIkit.datepicker($dp_end_range, {
                format:'YYYY-MM-DD HH:mm:ss'
            });

            $dp_end_range.on('change',function() {
                $scope.DatetimeRange.ngModelEnd = start_date_range.options.maxDate = $dp_end_range.val();
                //console.log(start_date_range.options.maxDate)
            });
            $dp_start_range.on('change',function() {
                $scope.DatetimeRange.ngModelStart = end_date_range.options.minDate = $dp_start_range.val();
                //console.log(end_date_range.options.minDate)
            });*/

        //number range
            $scope.NumberRange = {
                ngModelStart: null,
                ngModelEnd: null,
                ngModelEqual: null,
                EnableShow: false
            }
            $scope.openModalNumberRange = function(){
                $scope.NumberRange.EnableShow = true;
            }
            $scope.cancelModalNumberRange = function () {
                $scope.NumberRange.EnableShow = false;
            }
            $scope.selectNumberRange = function(){
                $scope.NumberRange.EnableShow = false;
            }
            $scope.clearModalNumberRange = function(){
                $scope.NumberRange.ngModelStart = null;
                $scope.NumberRange.ngModelEnd = null;
            }

        //Date range picker
            $scope.DateRange = {
                ngModelStart: null,
                ngModelEnd: null,
                //ngModelEqual: null,
                inputValue: null,
                EnableShow: false
            }
            $scope.openModalDateRange = function(){
                $scope.DateRange.EnableShow = true;
            }
            $scope.cancelModalDateRange = function () {
                $scope.DateRange.EnableShow = false;
            }
            $scope.selectDateRange = function(){
                $scope.DateRange.EnableShow = false;
            }
            $scope.clearModalDateRange = function(){
                $scope.DateRange.ngModelStart = null;
                $scope.DateRange.ngModelEnd = null;
                $uk_date_start.val("");
                $uk_date_end.val("");
                $uk_date_equal.val("");
            }
            $scope.$watchGroup(['DateRange.ngModelStart', 'DateRange.ngModelEnd'], function(newValues, oldValues, scope) {
                console.log(newValues[0])
                console.log(newValues[1])
            });

            var $uk_date_start = $('#uk_date_start'), $uk_date_end = $('#uk_date_end'), $uk_date_equal = $('#uk_date_equal');

            var start_date_range = UIkit.datepicker($uk_date_start, {
                //format:'YYYY-MM-DD HH:mm:ss.sss'
                format:'YYYY-MM-DD'
            });
            var end_date_range = UIkit.datepicker($uk_date_end, {
                format:'YYYY-MM-DD'
            });
            var date_equal = UIkit.datepicker($uk_date_equal, {
                format:'YYYY-MM-DD'
            });

            $uk_date_end.on('change',function() {
                $scope.DateRange.ngModelEnd = $uk_date_end.val().toString() + " 24:00:00.000";
                //console.log($scope.DateRange.ngModelEnd)
            });
            $uk_date_start.on('change',function() {
                $scope.DateRange.ngModelStart = $uk_date_start.val().toString() + " 00:00:00.000";
                //console.log($scope.DateRange.ngModelStart)
            });
            $uk_date_equal.on('change',function() {
                $scope.DateRange.ngModelStart = $uk_date_equal.val().toString() + " 00:00:00.000";
                $scope.DateRange.ngModelEnd = $uk_date_equal.val().toString() + " 24:00:00.000";
                //console.log($scope.DateRange.ngModelEqual)
            });
        }
    ]);