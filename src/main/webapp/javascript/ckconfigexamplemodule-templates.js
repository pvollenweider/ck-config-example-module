CKEDITOR.addTemplates('default',
    {
        // The name of the subfolder that contains the preview images of the templates.
        imagesPath:((typeof contextJsParameters != 'undefined') ? contextJsParameters.contextPath : '') + '/modules/ck-config-example-module/icons/templates/',
        // Template definitions.
        templates:[
            {
                title:'My Template 1',
                image:'template1.png',
                description:'Description of My Template 1.',
                html:'<h2 class="title">Template 1</h2>' +
                    '<p>Type your text here.</p>'
            },
            {
                title:'My Template 2',
                image:'template1.png',
                description:'Description of My Template 2.',
                html:'<strong>Template 2</strong>' +
                    '<p>Type your text here.</p>'
            }
        ]
    });
