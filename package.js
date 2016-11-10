Package.describe({
  name: 'xvendo:tagit',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Implements tagit JQUERY Plugin',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('mizzao:jquery-ui@1.11.4');
  api.addFiles(['src/js/tag-it.min.js', 'src/css/jquery.tagit.css'], 'client');  
});
