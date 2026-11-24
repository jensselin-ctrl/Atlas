/* Icons from the feedback category */

export interface IconProps {
  /** SVG file identifier - matches filename without extension */
  icon: string;
  /** Icon size - matches spacing tokens */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
  /** Icon color - matches color tokens or hex values */
  color?: string;
  /** Icon opacity (1-100) */
  opacity?: number | string;
  /** Click handler - fires on icon click */
  onClick?: (event: React.MouseEvent) => void;
  /** Additional SVG attributes */
  attrs?: Record<string, unknown>;
}

export { IconProps };

/* Icon component wrapper for SVG icons
 * Provides consistent props and behavior across all icons
 * Usage: <Icon icon="Add" size="large" color="blue" />
 */

export const Icon = ({
  icon,
  size = 'md',
  color = 'currentColor',
  opacity,
  onClick,
  attrs,
  ...rest
: IconProps) => {
  const sizeMap = {
    'sm': 16,
    'md': 20,
    'lg': 24,
    'xl': 32,
    '2xl': 48,
  };

  const sizePx = typeof size === 'number' ? size : sizeMap[size];
  
  const colorAttr = color !== 'currentColor' ? { fill: color } : {};
  
  const opacityAttr = opacity ? { opacity: typeof opacity === 'number' ? opacity / 100 : opacity } : {};
  
  const commonProps = {
    width: sizePx,
    height: sizePx,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color !== 'currentColor' ? color : 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...colorAttr,
    ...opacityAttr,
    ...attrs,
  };

  return (
    <svg
      {...commonProps}
      {...rest}
      onClick={onClick}
      style={{
        ...(color === 'currentColor' && !attrs?.fill) ? { color: 'currentColor' } : {},
        ...(typeof opacity === 'number' ? { opacity: opacity / 100 } : {}),
      }}
    >
      {/* Icon-specific SVG paths */}
    </svg>
  );
};

export { IconProps };

/* Import individual icons from their respective category folders: */

/*
  Icon.tsx - Main Icon component wrapper
  index.ts - Re-exports all icon components from this category
*/

// Import icons from this category:
import { ATS, Achievement, Admin2, AlterCompany, Feedback, HappyFace, HelpCentre, Info, MoreQuestions, ReportIssue, SadFace, SomewhatHappyFace, StarOutline, StarOutlined, Warning, Recommend } from './';

export const ATS = Icon;
export const Achievement = Icon;
export const Admin2 = Icon;
export const AlterCompany = Icon;
export const Feedback = Icon;
export const HappyFace = Icon;
export const HelpCentre = Icon;
export const Info = Icon;
export const MoreQuestions = Icon;
export const ReportIssue = Icon;
export const SadFace = Icon;
export const SomewhatHappyFace = Icon;
export const StarOutline = Icon;
export const StarOutlined = Icon;
export const Warning = Icon;
export const Recommend = Icon;