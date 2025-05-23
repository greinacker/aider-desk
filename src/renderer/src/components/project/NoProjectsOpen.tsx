import { useTranslation } from 'react-i18next';

// @ts-expect-error TypeScript is not aware of asset import
import icon from '../../../../../resources/icon.png?asset';

type Props = {
  onOpenProject: () => void;
};

export const NoProjectsOpen = ({ onOpenProject }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-400">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-4">
          <img src={icon} alt="Aider Desk" className="h-16 w-16" />
        </div>
        <h2 className="text-xl font-medium mb-4 uppercase ">
          {t('noProjectsOpen.welcome')} <span className="text-neutral-100 font-bold">Aider Desk</span>
        </h2>
        <p className="text-neutral-400 mb-6 text-sm">{t('noProjectsOpen.description')}</p>
        <div className="space-y-4">
          <button
            className="px-6 py-3 border border-neutral-600 rounded hover:bg-neutral-700/30 hover:text-neutral-200 transition-colors duration-200 text-md font-medium mb-4 text-neutral-200"
            onClick={onOpenProject}
          >
            {t('common.openProject')}
          </button>
          <p className="text-xs text-neutral-500">{t('tips.multipleProjects')}</p>
        </div>
      </div>
    </div>
  );
};
