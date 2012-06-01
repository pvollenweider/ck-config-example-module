CKEDITOR.stylesSet.add('text', [
    { name:'Title', element:'h2', attributes:{ 'class':'title' } },
    { name:'Bold', element:'span', attributes:{ 'class':'bold' } }
]);

CKEDITOR.editorConfig = function (config) {
    config.contextPath = (typeof contextJsParameters != 'undefined') ? contextJsParameters.contextPath : '';
    config.language = (typeof contextJsParameters != 'undefined') ? contextJsParameters.uilang : 'en';
    config.contentlanguage = (typeof contextJsParameters != 'undefined') ? contextJsParameters.lang : 'en';
    config.siteUuid = (typeof contextJsParameters != 'undefined') ? contextJsParameters.siteUuid : '';
    config.skin = 'jahia';

    config.filebrowserWindowWidth = '810';
    config.filebrowserWindowHeight = '650';
    config.filebrowserLinkWindowHeight = '800';
    config.filebrowserWindowFeatures = 'location=no,menubar=no,toolbar=no,dependent=yes,minimizable=no,modal=yes,alwaysRaised=yes,resizable=yes,scrollbars=yes';
    config.filebrowserWindowName = 'JahiaFileBrowser';
    config.filebrowserBrowseUrl = config.contextPath + '/engines/contentpicker.jsp?site=' + config.siteUuid + '&lang=' + config.contentlanguage + '&uilang=' + config.language;
    config.filebrowserImageBrowseUrl = config.contextPath + '/engines/contentpicker.jsp?type=imagepicker&site=' + config.siteUuid + '&lang=' + config.contentlanguage + '&uilang=' + config.language;
    config.filebrowserFlashBrowseUrl = config.contextPath + '/engines/contentpicker.jsp?mime=application%2Fx-shockwave-flash%2Cvideo%2Fx-flv&site=' + config.siteUuid + '&lang=' + config.contentlanguage + '&uilang=' + config.language;
    config.filebrowserLinkBrowseUrl = config.contextPath + '/engines/contentpicker.jsp?type=editoriallinkpicker&site=' + config.siteUuid + '&lang=' + config.contentlanguage + '&uilang=' + config.language;
    config.image_previewText = '';

    config.toolbar = 'Tinny';
    config.stylesSet = 'text';
    config.contentsCss = ((typeof contextJsParameters != 'undefined') ? contextJsParameters.contextPath : '') + '/modules/ck-config-example-module/css/ckconfigexamplemodule-ck.css';
    config.templates_files = [ ((typeof contextJsParameters != 'undefined') ? contextJsParameters.contextPath : '') + '/modules/ck-config-example-module/javascript/ckconfigexamplemodule-templates.js' ];


    config.toolbar_Tinny = [
        ['Source', '-', 'Templates', 'PasteText', '-', 'Styles', '-', 'NumberedList', 'BulletedList', 'Blockquote', '-', 'Link', 'Unlink', '-', 'Image']
    ];

    config.extraPlugins = 'acheck';
};

