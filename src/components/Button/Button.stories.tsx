import type { Meta, StoryObj } from '@storybook/react-vite';
import { Plus } from 'lucide-react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'inactive', 'glass'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['small', 'normal', 'big'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'normal',
    leftIcon: <Plus />,
    rightIcon: <Plus />,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'normal',
    leftIcon: <Plus />,
    rightIcon: <Plus />,
  },
};

export const Inactive: Story = {
  args: {
    children: 'Button',
    variant: 'inactive',
    size: 'normal',
    leftIcon: <Plus />,
    rightIcon: <Plus />,
    disabled: true,
  },
};

export const Glass: Story = {
  render: ({ args }) => {
    return (
      <div className="bg-light-pink p-8">
        <Button {...args} />
      </div>
    );
  },
  args: {
    children: 'Button',
    variant: 'glass',
    size: 'normal',
    leftIcon: <Plus />,
    rightIcon: <Plus />,
  },
};

export const AllSizes: Story = {
  render: () => {
    return (
      <div style={{ 
        padding: '16px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
      }}>
        <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Primary - All Sizes</h3>
        <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
          <Button variant="primary" size="small" leftIcon={<Plus />} rightIcon={<Plus />} children="Small" />
          <Button variant="primary" size="normal" leftIcon={<Plus />} rightIcon={<Plus />} children="Normal" />
          <Button variant="primary" size="big" leftIcon={<Plus />} rightIcon={<Plus />} children="Big" />
        </div>
        
        <h3 style={{ fontSize: '16px', marginTop: '16px', marginBottom: '8px' }}>Secondary - All Sizes</h3>
        <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
          <Button variant="secondary" size="small" leftIcon={<Plus />} rightIcon={<Plus />} children="Small" />
          <Button variant="secondary" size="normal" leftIcon={<Plus />} rightIcon={<Plus />} children="Normal" />
          <Button variant="secondary" size="big" leftIcon={<Plus />} rightIcon={<Plus />} children="Big" />
        </div>
        
        <h3 style={{ fontSize: '16px', marginTop: '16px', marginBottom: '8px' }}>Inactive - All Sizes</h3>
        <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
          <Button variant="inactive" size="small" leftIcon={<Plus />} rightIcon={<Plus />} children="Small" />
          <Button variant="inactive" size="normal" leftIcon={<Plus />} rightIcon={<Plus />} children="Normal" />
          <Button variant="inactive" size="big" leftIcon={<Plus />} rightIcon={<Plus />} children="Big" />
        </div>
        
        <h3 style={{ fontSize: '16px', marginTop: '16px', marginBottom: '8px' }}>Glass - All Sizes</h3>
        <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
          <Button variant="glass" size="small" leftIcon={<Plus />} rightIcon={<Plus />} children="Small" />
          <Button variant="glass" size="normal" leftIcon={<Plus />} rightIcon={<Plus />} children="Normal" />
          <Button variant="glass" size="big" leftIcon={<Plus />} rightIcon={<Plus />} children="Big" />
        </div>
      </div>
    );
  },
};