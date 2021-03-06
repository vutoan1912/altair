angular
    .module('altairApp')
    .controller('paymentCtrl', [
        '$scope',
        function ($scope) {

            $scope.address_data = {
                options: [
                    {
                        id: 1,
                        title: "Country A",
                        value: "c_a"
                    },
                    {
                        id: 1,
                        title: "Country B",
                        value: "c_b"
                    },
                    {
                        id: 1,
                        title: "Country C",
                        value: "c_c"
                    },
                    {
                        id: 1,
                        title: "Country D",
                        value: "c_d"
                    },
                ]
            };

            $scope.address_config = {
                create: false,
                maxItems: 1,
                valueField: 'value',
                labelField: 'title',
                searchField: 'title',
                placeholder: 'Country...'
            };

            $('[name="pm"]').on('ifChecked',function() {
                var $this = $(this);
                $('.js-pm_info').not($this).slideUp('fast');
                $('.' + $this.attr('id')).slideDown('fast');
            })

        }
    ]);