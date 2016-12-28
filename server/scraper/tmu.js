import htmlToJson from 'html-to-json';
import _ from 'lodash';

scrapeTheMindUnleashed = () => {
  return htmlToJson.request('http://themindunleashed.org', {

    'data': ['.post-image', function ($post) {
        if ($post.find('a').attr('title') &&
            $post.find('img').attr('src')) {
          return {
              markdown: "<a onClick=\"window.open(\'"
              + $post.find('a').attr('href') + "\', \'_blank\')\"/>" + "<br/><img src=\'" + $post.find('img').attr('src')
              + "\'/>"
              + $post.find('a').attr('title') +"</a>",
              url: $post.find('a').attr('href')
          }
        }
      }]
    }).then(function(result){

      var obj = {};
      obj['siteId'] = "__scraped__TheMindUnleashed";
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
