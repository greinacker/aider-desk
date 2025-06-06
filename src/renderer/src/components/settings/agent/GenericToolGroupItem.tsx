import { GenericTool, ToolApprovalState } from '@common/types';
import { useTranslation } from 'react-i18next';
import { TOOL_GROUP_NAME_SEPARATOR } from '@common/tools';

import { GenericToolItem } from './GenericToolItem';

import { Accordion } from '@/components/common/Accordion';
import { Checkbox } from '@/components/common/Checkbox';

type Props = {
  name: string;
  tools: GenericTool[];
  toolApprovals: Record<string, ToolApprovalState>;
  onApprovalChange: (toolId: string, approval: ToolApprovalState) => void;
  enabled?: boolean;
  onEnabledChange?: (enabled: boolean) => void;
};

export const GenericToolGroupItem = ({ name, tools, toolApprovals, onApprovalChange, enabled, onEnabledChange }: Props) => {
  const { t } = useTranslation();

  const renderTitle = () => {
    const enabledCount =
      tools.length - tools.filter((tool) => toolApprovals[`${name}${TOOL_GROUP_NAME_SEPARATOR}${tool.name}`] === ToolApprovalState.Never).length;

    return (
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          {onEnabledChange && <Checkbox id={`enable-group-${name}`} checked={enabled || false} onChange={() => onEnabledChange(!enabled)} className="mr-2" />}
          <span className="text-sm">{name}</span>
        </div>
        <div className="flex items-center">
          {tools.length > 0 && (
            <span className="text-xs mr-3 text-neutral-400">
              {t('mcp.serverToolStatus', {
                count: tools.length,
                enabledCount,
              })}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="border border-neutral-700 rounded mb-1">
      <Accordion title={renderTitle()} buttonClassName="px-2" chevronPosition="right">
        {tools.length > 0 ? (
          <div>
            <div className="text-xs p-2 pt-1 rounded mt-1 space-y-2">
              <div className="text-xs text-neutral-400 ml-1">{t('mcp.tools')}</div>
              {tools.map((tool) => (
                <GenericToolItem key={tool.name} tool={tool} toolApprovals={toolApprovals} onApprovalChange={onApprovalChange} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-xs text-neutral-500 p-4">{t('mcp.noToolsFound')}</div>
        )}
      </Accordion>
    </div>
  );
};
