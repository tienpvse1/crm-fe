import { IEmailTemplate } from '@modules/email-temlate/entity/email-template.entity';
import { Modal } from 'antd';
import { Dispatch, SetStateAction } from 'react';

interface ITemplateModel {
  visible: boolean;
  templates: IEmailTemplate[];
  handleLoad: (id: string) => void;
  setIsModelOpen: Dispatch<SetStateAction<boolean>>;
}

export const TemplatesModel: React.FC<ITemplateModel> = ({
  visible,
  templates,
  handleLoad,
  setIsModelOpen,
}) => {
  return (
    <div>
      <Modal
        title='Your templates...'
        visible={visible}
        onCancel={() => setIsModelOpen(false)}
      >
        {templates.map((template) => (
          <p
            style={{ cursor: 'pointer' }}
            onClick={() => {
              handleLoad(template.id), setIsModelOpen(false);
            }}
          >
            {template.name}
          </p>
        ))}
      </Modal>
    </div>
  );
};
