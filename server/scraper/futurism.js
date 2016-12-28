import htmlToJson from 'html-to-json';
import _ from 'lodash';

scrapeFuturism = () => {
    return htmlToJson.request('http://futurism.com', {

        'data': ['a.post-img', function ($a) {
            if ($a.attr('href')
                && $a.attr('data-original')
                && $a.attr('title')) {
                return {
                    markdown: "<a onClick=\"window.open(\'"
                    + $a.attr('href') + "\', \'_blank\')\"/>" + "<br/><img src=\'" + $a.attr('data-original')
                    + "\'/>"
                    + $a.attr('title') +"</a>",
                    url: $a.attr('href')
                }
            }
        }]
    }).then(function(result){

        var obj = {};
        obj['siteId'] = "__scraped__Futurism";
        obj['data'] = _.uniqWith(_.compact(result.data), _.isEqual).reverse();
        obj['urls'] = [];
        for (var i = 0; i < obj.data.length; i++){
            obj['urls'].push(obj.data[i].url);
        }
        return obj;

    }).catch(err => {
        throw new Meteor.Error(err)
    });
}
