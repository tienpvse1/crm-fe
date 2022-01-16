import { TemplatesModel } from '@components/email-compose/templates-model';
import { createTemplate } from '@modules/email-temlate/mutation/email-template.post';
import {
  findAllTemplates,
  getTemplateById,
} from '@modules/email-temlate/query/email-template.get';
import { useSendEmail } from '@modules/email/mutate/email.post';
import { Button, Input } from 'antd';
import { useRef, useState } from 'react';
import EmailEditor from 'react-email-editor';
import { openNotification } from '@util/notification';
export const EmailCompose: React.FC = ({}) => {
  // necessary state
  const emailEditorRef = useRef<EmailEditor>(null);
  const [templates, setTemplates] = useState();
  const [name, setName] = useState('template 1');
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [isModelOpen, setIsModelOpen] = useState(false);

  const { mutate, isLoading } = useSendEmail();

  // this function will handle when use hit send button
  // every content will be convert to html and send via gmail
  const exportHTML = () => {
    if (emailEditorRef.current) {
      emailEditorRef.current.exportHtml((design) => {
        mutate({
          subject,
          to,
          value: design.html,
        });
      });
    }
  };

  // this is still in experiment
  // save the current template as a new one to database]
  // TODO: if the current template has exist in database, update it only
  const saveTemplate = () => {
    if (!emailEditorRef.current) return;
    emailEditorRef.current.saveDesign(async (design) => {
      await createTemplate({ design, name });
      openNotification(
        'Notification',
        'Your email template have been saved successfully'
      );
    });
  };

  // load all saved template from database and apply to the modal
  const handleLoad = async (id: string) => {
    if (!emailEditorRef.current) return;
    const data = await getTemplateById(id);
    emailEditorRef.current.loadDesign(data.data.design);
    openNotification(
      'Notification',
      'Email template have been loaded successfully'
    );
  };

  // when user choose an template form modal
  // its template from database will be apply to the database
  const loadTemplates = async () => {
    const data = await findAllTemplates();

    setTemplates(data.data);
    setIsModelOpen(true);
  };

  return (
    <>
      {templates && (
        <TemplatesModel
          templates={templates}
          visible={isModelOpen}
          handleLoad={handleLoad}
          setIsModelOpen={setIsModelOpen}
        />
      )}
      <Input placeholder='to' onChange={(e) => setTo(e.target.value)} />
      <Input
        placeholder='Email subject'
        onChange={(e) => setSubject(e.target.value)}
      />

      <EmailEditor
        ref={emailEditorRef}
        options={{
          customCSS: [
            'https://examples.unlayer.com/examples/custom-css/custom.css',
          ],
        }}
        appearance={{
          theme: 'dark',
        }}
      />
      <Button onClick={saveTemplate} type='primary' danger>
        Save
      </Button>
      <Button onClick={loadTemplates} type='primary' danger>
        Load
      </Button>
      <Button onClick={exportHTML} type='primary' danger loading={isLoading}>
        Send
      </Button>
    </>
  );
};
