import htmlToJson from 'html-to-json';
import _ from 'lodash';

scrapeTorrentFreak = () => {
    return htmlToJson.request('http://www.youredm.com/', {

        'data': ['cb-mask', function ($a) {
            console.log($a.find('.entry-image').last().attr('style'));
            if ($a.attr('href')
                && $a.attr('rel')
                && $a.attr('title')) {
                return {
                    markdown: "<a onClick=\"window.open(\'"
                    + "https://torrentfreak.com" + $a.attr('href') + "\', \'_blank\')\"/>"
                    + "<br/><img src='/images/tf.jpg'/></div>"
                    + $a.find('.entry-title').last().text() +"</a>",
                    url: $a.attr('href')
                }
            }
        }]
    }).then(function(result){

        var obj = {};
        obj['siteId'] = "__scraped__TorrentFreak";
        obj['data'] = _.uniqWith(_.compact(result.data), _.isEqual).reverse();
        obj['urls'] = [];
        for (var i = 0; i < obj.data.length; i++){
            obj['urls'].push(obj.data[i].url);
        }
        return obj;

    }).catch(err => {
        throw new Meteor.Error(err)
    });
};
