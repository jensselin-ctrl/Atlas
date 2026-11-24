/* Icons from the content category */

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
import { Article, ContentReleaseNotes, CustomContent, Customise, DocumentUpload, Document, FeutereReleaseNotes, Insights, Quiz, Template } from './';

export const Article = Icon;
export const ContentReleaseNotes = Icon;
export const CustomContent = Icon;
export const Customise = Icon;
export const DocumentUpload = Icon;
export const Document = Icon;
export const FeutereReleaseNotes = Icon;
export const Insights = Icon;
export const Quiz = Icon;
export const Template = Icon;