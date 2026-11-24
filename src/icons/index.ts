/**
 * Icons - Atlas Design System
 * 
 * A comprehensive collection of SVG icons organized by category.
 * All icons can be used with the Icon component wrapper or imported directly.
 * 
 * @example Basic Usage
 * <Icon icon="Home" size="md" color="blue" />
 * 
 * @example With Click Handler
 * <Icon icon="Home" onClick={handleClick} size="lg" />
 * 
 * @example Custom Color
 * <Icon icon="Home" color="#3b82f6" size="lg" />
 * 
 * @example Icon Component (No Wrapper)
 * <Home size="lg" />
 * <User onClick={handleUserClick} />
 */

// Main Icon component wrapper - consistent styling and behavior
export { Icon, IconProps } from './Icon';

// Re-export all icon categories
export { interface as Interface } from './interface';
export { navigation as Navigation } from './navigation';
export { users as Users } from './users';
export { content as Content } from './content';
export { communication as Communication } from './communication';
export { feedback as Feedback } from './feedback';
export { other as Other } from './other';
export { social as Social } from './social';

// Helper function for common icon usage
export const iconProps = {
  icon: 'Home',
  size: 'md',
  color: 'currentColor',
  opacity: 100,
};

/**
 * Import icons from category folders:
 * 
 * Individual Icons:
 *   import { Home, ArrowRight } from './icons/navigation';
 *   import { User, Team } from './icons/users';
 *   import { Document, Template } from './icons/content';
 *   import { Email, Video } from './icons/communication';
 *   import { HappyFace, Warning } from './icons/feedback';
 *   import { Search, Settings } from './icons/other';
 *   import { Linkedin } from './icons/social';
 * 
 * Using Icon Wrapper:
 *   import { Icon, Home, ArrowRight } from './icons/navigation';
 *   <Icon icon="Home" size="lg" />
 *   <Icon icon="ArrowRight" size="md" color="blue" />
 */