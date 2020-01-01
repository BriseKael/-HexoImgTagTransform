'use strict';

hexo.extend.filter.register('before_post_render', function(data){
  data.content = data.content.replace(/!\[(.+?)\]\(\/?(.+?)\)/g, "{% img /$2 $1 %}");
  return data;
});
