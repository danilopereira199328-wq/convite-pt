import { useInviteStore } from '../store/inviteStore';
import { templates } from '../templates';

export function InvitePreview() {
  const { data } = useInviteStore();

  const template = templates[data.templateId as keyof typeof templates];

  if (!template) {
    return <div className="preview-empty">Escolhe um template</div>;
  }

  const TemplateComponent = template.component;

  return (
    <div className="invite-preview-container">
      <div className="preview-scaler">
        <div className="preview-canvas">
          <TemplateComponent data={data} />
        </div>
      </div>
    </div>
  );
}