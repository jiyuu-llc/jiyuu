import htmlToJson from 'html-to-json';
import _ from 'lodash';

scrapeWhowhatwhy = () => {
    return htmlToJson.request('http://whowhatwhy.org/', {

        'data': ['a.post-img', function ($a) {
            if ($a.attr('href')
                && $a.attr('data-original')
                && $a.attr('title')) {
                return {
                    markdown: "<a onClick=\"window.open(\'"
                    + $a.attr('href') + "\', \'_blank\')\" href=\'" + $a.attr('href')
                    + "\'/>" + "<br/><img src=\'" + $a.attr('data-original')
                    + "\'/>"
                    + $a.attr('title') +"</a>",
                    url: $a.attr('href')
                }
            }
        }]
    }).then(function(result){

        var obj = {};
        obj['siteId'] = "__scraped__WhoWhatWhy";
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
