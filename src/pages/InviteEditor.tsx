import { InviteForm } from '../components/InviteForm';
import { InvitePreview } from '../components/InvitePreview';
import { DownloadButtons } from '../components/DownloadButtons';

export function InviteEditor() {
  return (
    <div className="invite-editor">
      <header className="editor-header">
        <h1>📨 Criador de Convites</h1>
        <p>Cria o teu convite em minutos</p>
      </header>

      <div className="editor-main">
        <div className="editor-sidebar">
          <InviteForm />
          <DownloadButtons />
        </div>

        <div className="editor-preview">
          <InvitePreview />
        </div>
      </div>
    </div>
  );
}