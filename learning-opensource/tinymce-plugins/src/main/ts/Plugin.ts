import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('tinymce-plugins', {
    text: 'tinymce-plugins button',
    onAction: () => {
      openDialog()
    }
  });
  const openDialog = function () {
    return editor.windowManager.open({
      title: "Example plugin",
      body: {
        type: "panel",
        items: [
          {
            type: 'alertbanner', // component type
            level: 'info',
            text: 'An <strong>informative</strong> message to the user',
            url: 'http://my.url',
            icon: 'question'
          },
          {
            type: 'button', // component type
            text: 'Alpha',
            buttonType: 'primary',
            name: 'alpha-button',
            enabled: false,
            borderless: false
          },
          {
            type: 'checkbox', // component type
            name: 'checkbox-1', // identifier
            label: 'Checkbox Label', // text for the label
            enabled: false // enabled state
          },
          {
            type: 'colorinput', // component type
            name: 'colorinput', // identifier
            label: 'Color Label' // text for the label
          },
          {
            type: 'colorpicker', // component type
            name: 'colorpicker', // identifier
          },
          {
            type: 'dropzone', // component type
            name: 'dropzone', // identifier
            label: 'Dropzone' // text for the label
          },
          {
            type: 'iframe', // component type
            name: 'iframe', // identifier
            label: 'Description of iframe', // text for the iframe's title attribute
            sandboxed: true
          },
          {
            type: 'imagepreview', // component type
            name: 'preview', // identifier
            height: '100px', // optional CSS height to constrain the image preview to
          },
          {
            type: 'input', // component type
            name: 'inputA', // identifier
            inputMode: 'text',
            label: 'Input Label', // text for the label
            placeholder: 'example', // placeholder text for the input
            enabled: true, // disabled state
            maximized: false // grow width to take as much space as possible
          },
          {
            type: 'listbox', // component type
            name: 'ListBoxA', // identifier
            label: 'ListBox Label',
            enabled: true, // enabled state
            items: [
              { text: 'One', value: 'one' },
              { text: 'Two', value: 'two' },
              { text: 'Submenu', items: [
                { text: 'Three', value: 'three' }
              ]}
            ]
          },
          {
            type: 'selectbox', // component type
            name: 'SelectA', // identifier
            label: 'Select Label',
            enabled: true, // enabled state
            size: 1, // number of visible values (optional)
            items: [
              { value: 'one', text: 'One' },
              { value: 'two', text: 'Two' }
            ]
          },
          {
            type: 'sizeinput', // component type
            name: 'size', // identifier
            label: 'Dimensions',
            enabled: true // enabled state
          } ,
          {
            type: 'slider', // component type
            name: 'vol', // identifier
            label: 'Volume',
            min: 0, // minimum value
            max: 100 // maximum value
          },
          {
            type: 'table', // component type
            header: [ 'Heading 1', 'Heading 2', 'Heading 3' ],
            cells: [
              [ 'Cell 1', 'Cell 2', 'Cell 3' ],
              [ 'Cell 4', 'Cell 5', 'Cell 6' ]
            ]
          },
          {
            type: 'textarea', // component type
            name: 'text-a', // identifier
            label: 'Text: ',
            placeholder: 'example',
            enabled: true, // enabled state
            maximized: false // grow width to take as much space as possible
          },
          {
            type: 'urlinput', // component type
            name: 'url', // identifier
            filetype: 'file', // allow any file types
            label: 'Url', // text for component label
            enabled: false // enabled state
          }
        ],
      },
      buttons: [
        {
          type: "cancel",
          text: "Close",
        },
        {
          type: "submit",
          text: "Save",
          primary: true,
        },
      ],
      onSubmit: function (api) {
        const data = api.getData();
        editor.setContent('<p>content added from tinymce-plugins</p>');
        api.close();
      },
    });
  };
};

export default (): void => {
  tinymce.PluginManager.add('tinymce-plugins', setup);
};
