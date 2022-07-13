import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('tinymce-plugins', {
    text: 'tinymce-plugins button',
    onAction: () => {
      editor.setContent('<p>content added from tinymce-plugins</p>');
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('tinymce-plugins', setup);
};
