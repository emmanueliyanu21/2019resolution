window.Instagram = {
    // store application settings
    config: {},

    BASE_URL: '',
    init: function(opt) {
        opt = opt || {};
        this.config.client_id = opt.client_id;
    },

    popular: function(callback) {
        var endpoint = this.BASE_URL + '/tags/' + this.config.client_id;
        this.getJSON(endpoint, callback);
    },

    tagsByName: function(name, callback) {
        var endpoint = this.BASE_URL + '/tags/' + name + '?access_token=' + this.config.client_id;
        this.getJSON(endpoint, callback);
    },

    getJSON: function(url, callback) {

        $.ajax({
            type: 'GET',
            url: endpoint,
            dataType: 'jsonp',
            success: function(response) {
                if (typeof callback === 'function') callback(response);

            }
        });
    }
};

Instagram.init({
    client_id: ''
});

Instagram.popular(function(response) {
    var $instagram = $('#instagram');
    for (var i = 0; i < response.data.length; i++) {
        image = response.data[i].image.low_resolution.url;
        $instagram.append('<img src=' + +'"/>');
    }
});

$(document).ready(function() {

    Instagram.popular(function(response) {
        var $instagram = $('#instagram');
        for (var i = 0; i < response.data.length; i++) {
            imageUrl = response.data[i].image.low_resolution.url;
            $instagram.append('<img src="' + imageUrl + '"/>');
        }
    });

    $('#form').on('submit', 'input', function(e) {
        e.preventDefault();

        var tagName = $('#search').val();
        Instagram.tagByName(tagsByName, function(response) {});
        var $instagram = $('#instagram');
        $instagram.html('');

        for (var i = 0; i < response.data.length; i++) {
            imageUrl = response.data[i].image.low_resolution.url;
            $instagram.append('<img src="' + imageUrl + '"/>');
        }
    });

});