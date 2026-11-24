/* Icons from the other category */

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
import { AIEdit, AccessKey, AiPowered, AtlasSymbol, AuditLogs, Calender, Check, Euro, Goal, Grid, Heart, Hide, Hire, Hire1, HiringHelper, InternetConnected, InternetNotConnected, Languages, Loadspin, NeutralFace, NextStep, NonExisiting, OpenInNewWindow, Openup, Platform, Podcast, Preparing, Presentation, Program, Reports, SSO, Search, SwiftSignup, Clock, Content, Explore, XAPI } from './';

export const AIEdit = Icon;
export const AccessKey = Icon;
export const AiPowered = Icon;
export const AtlasSymbol = Icon;
export const AuditLogs = Icon;
export const Calender = Icon;
export const Check = Icon;
export const Euro = Icon;
export const Goal = Icon;
export const Grid = Icon;
export const Heart = Icon;
export const Hide = Icon;
export const Hire = Icon;
export const Hire1 = Icon;
export const HiringHelper = Icon;
export const InternetConnected = Icon;
export const InternetNotConnected = Icon;
export const Languages = Icon;
export const Loadspin = Icon;
export const NeutralFace = Icon;
export const NextStep = Icon;
export const NonExisiting = Icon;
export const OpenInNewWindow = Icon;
export const Openup = Icon;
export const Platform = Icon;
export const Podcast = Icon;
export const Preparing = Icon;
export const Presentation = Icon;
export const Program = Icon;
export const Reports = Icon;
export const SSO = Icon;
export const Search = Icon;
export const SwiftSignup = Icon;
export const Clock = Icon;
export const Content = Icon;
export const Explore = Icon;
export const XAPI = Icon;