import { definePlugin } from 'sanity';
import LeadsTool from './components/LeadsTool';

const leadsTool = () => {
  return {
    title: 'Leads',
    name: 'leads',
    component: () => (
      LeadsTool()
    ),
  }
}

export const leadPlugin = definePlugin({
  name: 'leadPlugin',
  
  tools: [ 
    leadsTool() 
  ],
});
