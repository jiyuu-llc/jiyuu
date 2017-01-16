import htmlToJson from 'html-to-json';
import _ from 'lodash';

scrapeLinux = () => {
    return htmlToJson.request('https://www.linux.com/', {
        'data': ['.article-list__title', function ($div) {
            if ($div.find('a').attr('href')) {
                return {
                    markdown: "<a onClick=\"window.open(\'"
                    + "https://www.linux.com" + $div.find('a').attr('href') + "\', \'_blank\')\">"
                    + "<br/><img src='/images/linux.jpg'/></div>"
                    + $div.find('a').text() +"</a>",
                    url: $div.find('a').attr('href')
                }
            }
        }]
    }).then(function(result){
        var obj = {};
        obj['siteId'] = "__scraped__Linux";
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


/*

 scrapeTasty = () => {
 return htmlToJson.request('https://www.buzzfeed.com/tasty', {
 'data': ['.card--article', function ($div) {
 console.log($div.find('a').attr('href')) ;
 if ($div.find('a').attr('href')
 && $div.find('a').attr('data-bfa')
 && $div.find('a').attr('href')) {
 console.log("test");
 return {
 markdown: "<a onClick=\"window.open(\'"
 +  $div.find('a').attr('href') + "\', \'_blank\')\"/>"
 + "<br/><img src='/images/tasty.jpg'/></div>"
 + $div.find('div').last().text() +"</a>",
 url: $div.find('a').attr('href')
 }
 }
 }]
 }).then(function(result){

 var obj = {};
 obj['siteId'] = "__scraped__Tasty";
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

 */