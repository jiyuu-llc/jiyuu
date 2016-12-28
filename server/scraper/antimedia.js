import htmlToJson from 'html-to-json';
import _ from 'lodash';

scrapeTheAntiMedia = () => {
    return htmlToJson.request('http://theantimedia.org/', {

            'data': ['.recent-post', function ($div) {
                if ($div.find('img').attr('alt')
                    && $div.find('img').attr('src')
                    && $div.find('a').attr('href')) {
                    return {
                        markdown: "<a onClick=\"window.open(\'"
                        + $div.find('a').attr('href') + "\', \'_blank\')\">"
                        + "<br/><img src=\"" + $div.find('img').attr('src') + "#333\" alt=\"" + $div.find('img').attr('alt') + "\" />"
                        + $div.find('img').attr('alt') +"</a>",
                        url: $div.find('a').attr('href')
                    }
                }
            }]
        }).then(function(result){

            var obj = {};
            obj['siteId'] = "__scraped__TheAntiMedia";
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
