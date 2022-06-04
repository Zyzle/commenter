
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LoginComponent } from './login.component';

export default {
  title: 'Login',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, HttpClientModule]
    })
  ]
} as Meta;

const template: Story = (args: any) => ({
  props: args,
});

export const Login = template.bind({});
Login.args = {};
