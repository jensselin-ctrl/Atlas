import React from 'react';

/**
 * Icon component wrapper for SVG icons
 * Provides consistent props and behavior across all icons
 * 
 * Usage: <Icon icon="Home" size="large" color="blue" />
 */

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

/**
 * Icon component - renders SVG icons with consistent styling
 * 
 * The icon name should match the SVG filename (e.g., "Home.svg" -> icon="Home")
 */
export const Icon = ({
  icon,
  size = 'md',
  color = 'currentColor',
  opacity,
  onClick,
  attrs,
  ...rest
}: IconProps) => {
  // Default size in pixels
  const sizeMap: Record<string, number> = {
    'sm': 16,
    'md': 20,
    'lg': 24,
    'xl': 32,
    '2xl': 48,
  };

  const sizePx = typeof size === 'number' ? size : sizeMap[size];
  
  // Apply color if specified (overrides fill="currentColor")
  const colorAttr = color !== 'currentColor' ? { fill: color } : {};
  
  // Apply opacity if specified
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

/**
 * Import individual icons from their respective category folders:
 * 
 * import { Home, ArrowRight, Search } from './icons/navigation';
 * import { User, Team, Settings } from './icons/users';
 * import { Plus, Edit, Delete } from './icons/interface';
 * 
 * Usage:
 * <Home size="lg" color="var(--color-blue)" />
 * <User onClick={handleUserClick} />
 */

// Helper function for common icon usage patterns
export const iconProps: IconProps = {
  icon: 'Home',
  size: 'md',
  color: 'currentColor',
};